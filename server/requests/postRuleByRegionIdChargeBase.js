'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'base': joi.number().min(0),
    }),
    params: joi.object().keys({
        'regionId': joi.number().integer().required(),
    }), 
}