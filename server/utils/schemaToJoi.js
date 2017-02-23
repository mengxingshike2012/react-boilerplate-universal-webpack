'use strict';
const definitions = require('swagger/definitions');
const Chance = require('chance');
const chance = new Chance();

module.exports = function schemaToMock(schema) {
    const meta = {};
    const keys = Object.keys(schema).filter(k => k.substr(0, 2) === 'm-');
    for (const key of keys) {
        meta[key.substr(2)] = schema[key];
    }
    const metaType = meta.type;
    meta.type = null;
    if (meta.value !== undefined) {
        return meta.value;
    }
    if (schema.enum) {
        return chance.pickone(schema.enum);
    }
    if (schema.$ref) {
        const ref = schema.$ref.match(/\#\/definitions\/([\w\d]+)/i)[1];
        return schemaToMock(definitions[ref]);
    }
    if (metaType) {
        return chance[metaType](meta);
    }
    let result = null;
    switch (schema.type) {
        case 'object':
            result = {};
            for (const key in schema.properties) {
                result[key] = schemaToMock(schema.properties[key]);
            }
            break;
        case 'string': {
            result = chance.string(meta);
            break;
        }
        case 'integer': {
            result = chance.integer(meta);
            break;
        }
        case 'array': {
            const length = chance.integer({ min: 1, max: 10});
            result = [];
            for (let i = 0; i < length; i++) {
                result.push(schemaToMock(schema.items));
            }
            break;
        }
        case 'number':
            result = chance.floating(meta);
    }
    return result;
}