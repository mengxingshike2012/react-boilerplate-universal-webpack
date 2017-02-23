#!/usr/bin/env node
'use strict';
const YAML = require('js-yaml');
const path = require('path');
const fs = require('fs');

const SWAGGER_PATH = path.resolve(__dirname, '../docs/swagger');

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    let result = [];
    for (const file of files) {
        const f = path.resolve(dir, file);
        if (fs.lstatSync(f).isDirectory()) {
            result = result.concat(walkDir(f));
        } else {
            result.push(f);
        }
    }
    return result;
}

function readYaml(file) {
    try {
        return YAML.load(fs.readFileSync(file).toString());
    } catch (e) {
        e.message = `(${file}) \n ${e.message}`;
        throw e;
    }
}

function buildSwagger(SWAGGER_PATH) {
    const indexJSON= readYaml(path.resolve(SWAGGER_PATH, 'index.yaml'));

    //load all paths
    indexJSON.paths = {};
    const paths = walkDir(path.resolve(SWAGGER_PATH, 'paths'))
                    .map(f => path.relative(path.resolve(SWAGGER_PATH, 'paths'), f))
                    .map(f => f.slice(0, f.length - 5));
    for (const p of paths) {
        const yaml = readYaml(path.resolve(SWAGGER_PATH, `paths/${p}.yaml`));
        for (const method of Object.keys(yaml)) {
            if (!~['get', 'delete', 'post', 'put'].indexOf(method)) continue;
            yaml[method].responses['200'].description = '请求成功';
            yaml[method].summary = yaml[method].operationId;
            for (let i = 0; i < (yaml[method].parameters || []).length; i++) {
                if (yaml[method].parameters[i].in === 'body') {
                    yaml[method].parameters[i].required = true;
                }
            }
        }
        for (let i = 0; i < (yaml.parameters || []).length; i++) {
        }
        indexJSON.paths['/' + p] = yaml;
    }

    //load all definitions
    indexJSON.definitions = {};
    const definitions = fs.readdirSync(path.resolve(SWAGGER_PATH, 'definitions'));
    for (const definition of definitions) {
        const name = path.basename(definition, path.extname(definition));
        indexJSON.definitions[name] = readYaml(path.resolve(SWAGGER_PATH, 'definitions', definition));
    }

    const swaggerYaml = YAML.dump(indexJSON, {
    });
    const swaggerYamlLocation = path.resolve(SWAGGER_PATH, '../swagger.yaml');
    const swaggerHtmlLocation = path.resolve(SWAGGER_PATH, '../swagger-html');
    fs.writeFileSync(swaggerYamlLocation, swaggerYaml);
    console.log('swagger.yaml built')
    /*
    exec(`swagger-codegen generate -i ${swaggerYamlLocation} -l html2 -o ${swaggerHtmlLocation}`);
    console.log('swagger html built')
    */
}


if (!module.parent) {
    buildSwagger(SWAGGER_PATH);
} else {
    module.exports = buildSwagger;
}
