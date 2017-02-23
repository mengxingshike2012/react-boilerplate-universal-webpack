#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const path = require('path');
const YAML = require('js-yaml');
const swaggerToJoi = require('./swaggerToJoi');
const tab = require('./utils').tab;
const genereateMockScript = require('./generateMockScript');
const pathToController = require('./pathToController');


const swaggerYamlFile = path.resolve(process.cwd(), process.argv[2]);
const swagger = YAML.load(fs.readFileSync(swaggerYamlFile).toString());
genereateMockScript(swagger);

generateRoutes();

function generateRoutes() {
    fs.mkdirpSync(path.resolve(__dirname, '../server/config'));
    fs.mkdirpSync(path.resolve(__dirname, '../server/requests'));
    const koaRoutes = {};
    for (const _path in swagger.paths) {
        const route = swagger.paths[_path];
        koaRoutes[swaggerPathToKoaPath(_path)] = {};
        for (const method in route) {
            if (!~['get', 'post', 'delete', 'put'].indexOf(method)) continue;
            const controller = route[method];
            const controllerName = pathToController(method + _path);
            koaRoutes[swaggerPathToKoaPath(_path)][method] = controllerName;

            // parse request validations
            const parameters = (route.parameters || [])
                                    .concat(route[method].parameters || [])
                                    .map(p => {
                                        if (p.$ref) {
                                            const result = p.$ref.match(/\#\/parameters\/([\w\d\.\_]+)/i);
                                            if (result && result[1]) {
                                                return swagger.parameters[result[1]];
                                            }
                                        }
                                        return p;
                                    });
            let requestRule = '\'use strict\';\nconst joi = require(\'joi\');\nmodule.exports = {\n';
            /*****  query */
            requestRule += `${tab(1)}query: joi.object().keys({\n`;
            const query = parameters
                        .filter(p => p.in === 'query')
            for (const q of query) {
                const rule  = swaggerToJoi(swagger, q);
                requestRule += `${tab(2)}'${q.name}': ${rule},\n`;
            }
            requestRule += `${tab(1)}}), \n`;
            /*****  end query */

            /*****  body */
            const body = parameters
                        .filter(p => p.in === 'body')[0];
            if (body) {
                const rule  = swaggerToJoi(swagger, body.schema)
                                .split('\n')
                                .map(l => tab(1) + l)
                                .join('\n')
                                .trim()
                requestRule += `${tab(1)}body: ${rule},\n`;
            }
            /*****  end body */
            /*****  path */
            requestRule += `${tab(1)}params: joi.object().keys({\n`;
            const pathParams = parameters
                        .filter(p => p.in === 'path')
            for (const q of pathParams) {
                const rule  = swaggerToJoi(swagger, q);
                requestRule += `${tab(2)}'${q.name}': ${rule},\n`;
            }
            requestRule += `${tab(1)}}), \n`;
            /*****  end path */
                     
            requestRule += '}';
            fs.writeFileSync(path.resolve(__dirname, `../server/requests/${controllerName}.js`), requestRule);
        }
    }
    const content = 'module.exports = ' + JSON.stringify(koaRoutes, 0, 4);
    fs.writeFileSync(path.resolve(__dirname, '../server/config/routes.js'), content);
}

function swaggerPathToKoaPath(path) {
    const result = path.replace(/\{[\d\w\_\-\.]+\}/, (val) => {
        return ':' + val.substr(1, val.length - 2)
    });
    return '/api' + result;
}

