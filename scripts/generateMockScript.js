#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const path = require('path');
const YAML = require('js-yaml');
const pathToController = require('./pathToController');

module.exports = function(swagger) {
    const mockedPaths = [];
    const paths = swagger.paths;
    const definitions = swagger.definitions;
    fs.mkdirpSync(path.resolve(__dirname, '../server/mock-controllers'));
    fs.mkdirpSync(path.resolve(__dirname, '../server/swagger'));
    let definitionJs = 'module.exports = ';
    definitionJs += JSON.stringify(swagger.definitions, 0, 4);
    definitionJs += ';\n';
    fs.writeFileSync(path.resolve(__dirname, '../server/swagger/definitions.js'), definitionJs);


    for (const _path in paths) {
        const route = paths[_path];
        for (let method in route) {
            method = method.toLowerCase();
            if (!~['get', 'post', 'delete', 'put'].indexOf(method)) continue;
            const controllerName = pathToController(method + _path);
            let content = `'use strict';\n`;
            content += `const joi = require('joi');\n`;
            content += `const Chance = require('chance');\n`;
            content += `const schemaToJoi = require('utils/schemaToJoi');\n`;
            content += 'const chance = new Chance();\n';
            content += 'module.exports = function* (params, query, body, user) {\n';
            content += `    return schemaToJoi(${JSON.stringify(route[method].responses[200].schema, 0, 4)});\n`
            content += '};\n';
            fs.writeFileSync(path.resolve(__dirname, `../server/mock-controllers/${controllerName}.js`), content);
        }
    }
}