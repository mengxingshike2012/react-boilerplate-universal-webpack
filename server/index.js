'use strict';
require('app-module-path/register');
const fs = require('fs-extra');
const path = require('path');
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const Router = require('koa-router');
const mountController = require('middlewares/mountController');

const PORT = process.env.PORT || 7000;
const router = new Router();

const routes = require('config/routes');
for (const _path in routes) {
    const route = routes[_path];
    for (let method in route) {
        const name = route[method];
        method = method.toLowerCase();
        method = method === 'delete' ? 'del' : method;
        const rules = require(`requests/${name}`);
        if (fs.existsSync(path.resolve(__dirname, `controllers/${name}.js`))) { // use real controller instead of mock
            router[method](_path, mountController(require(`controllers/${name}`), rules));
        } else {
            router[method](_path, mountController(require(`mock-controllers/${name}`), rules));
        }
        console.log(`[${method}] ${_path}`);
    }
}

const server = koa();
server.use(function* (next) {
    yield next;
});
server.use(cors());
server.use(bodyParser());
server.use(router.routes());
server.use(router.allowedMethods());

server.listen(PORT);
console.log(`SERVER STARTED ON PORT: ${PORT}`);