'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'password': joi.string(),
    }),
    params: joi.object().keys({
    }), 
}