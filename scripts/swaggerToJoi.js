#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const YAML = require('js-yaml');
const s = require('./utils').space;
const TAB_WIDTH = require('./utils').TAB_WIDTH;



module.exports = function (swaggerYaml, schema) {

    const paths = swaggerYaml.paths;
    const definitions = swaggerYaml.definitions;

    

    function isComplex(item) {
        if (
            ~['object', 'array'].indexOf(item.type) ||
            item.$ref
        ) {
            return 1;
        }
        return 0;
    }

    function parseJoi(schema, align = 0) {
        if (schema.$ref) {
            const ref = schema.$ref.match(/\#\/definitions\/([\w\d]+)/i)[1];
            return parseJoi(definitions[ref], align);
        }
        let result = 'joi';
        switch (schema.type) {
            case 'object': {
                result += '.object().keys({\n';
                const properties = schema.properties;
                const keys = Object.keys(properties)
                            .sort((a, b) => {
                                return isComplex(properties[a]) - isComplex(properties[b]);   
                            });
                for (const key of keys ) {
                    result += `${s(TAB_WIDTH + align)}'${key}': ${parseJoi(properties[key], align + key.length + 2 + TAB_WIDTH)},\n`;
                }
                result += `${s(align)}})`;
                result = result
                            .split('\n')
                            //.map(line => s(TAB_WIDTH) + line)
                            .join('\n');
                break;
            }
            case 'integer':
                result += '.number().integer()';
                break;
            case 'string':
                result += '.string()';
                break;
            case 'number':
                result += '.number()';
                break;
            case 'boolean':
                result += '.boolean()';
                break;
        }

        const joiKeys = Object.keys(schema)
                        .filter(s => s.substr(0, 2) === 'j-')
                        .map(s => s.substr(2));

        for (const key of joiKeys) {
            let value = schema[`j-${key}`];
            if (value === true) {
                value = '';
            } 
            result += `.${key}(${value})`;
        }

        if (schema.enum) {
            const enums = [];
            for (const value of schema.enum) {
                if (schema.type === 'string') {
                    enums.push(`'${value}'`);
                } else {
                    enums.push(value);
                }
            }
            result += `.allow(${enums.join(',')})`;
        }

        return result
            .trim();
    }
    return parseJoi(schema);
}