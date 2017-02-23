'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'id': joi.number().integer(),
        'regionId': joi.number().integer(),
        'name': joi.string(),
        'phone': joi.string(),
        'role': joi.number().integer().allow(0),
        'idNumber': joi.string(),
        'email': joi.string(),
    }),
    params: joi.object().keys({
        'id': joi.number().integer().required(),
    }), 
}