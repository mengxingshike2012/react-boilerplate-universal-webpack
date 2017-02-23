'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'reason': joi.string().required(),
    }),
    params: joi.object().keys({
        'id': joi.number().integer().required(),
    }), 
}