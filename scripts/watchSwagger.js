#!/usr/bin/env node
'use strict';
const chokidar = require('chokidar');
const liveServer = require('live-server');
const _ = require('lodash');
const path = require('path');
const buildSwagger = require('./buildSwagger');
const fs = require('fs-extra');

const SWAGGER_PATH = path.resolve(__dirname, '../docs/swagger');
let isServerUp = false;

function build() {
    try {
        buildSwagger(SWAGGER_PATH);
        fs.copySync(
            path.resolve(__dirname, '../docs/swagger.yaml'),
            path.resolve(__dirname, '../docs/html/spec-files/swagger.yaml')
        );
    } catch(e) {
        console.log(e.stack || e);
    }
    if (!isServerUp) {
        liveServer.start({
            port: 7000,
            open: false,
            host: '0.0.0.0',
            root: path.resolve(__dirname, '../docs/html'),
            file: 'index.html',
        });
        console.log('Doc Page up at http://localhost:7000');
        isServerUp = true;
    }
}

const debouncedBuild = _.debounce(build, 1500);

chokidar.watch(SWAGGER_PATH).on('all', (event) => {
    debouncedBuild();
});