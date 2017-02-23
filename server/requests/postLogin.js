'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'username': joi.string().required(),
        'password': joi.string().required(),
    }),
    params: joi.object().keys({
    }), 
}