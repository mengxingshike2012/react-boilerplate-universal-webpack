'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'id': joi.number().integer(),
        'regionId': joi.number().integer(),
        'position': joi.number().integer().allow(0,1),
        'workStatus': joi.number().integer().allow(0,1),
        'accountStatus': joi.number().integer().allow(0,1),
        'name': joi.string(),
        'phone': joi.string(),
        'idNumber': joi.string(),
    }),
    params: joi.object().keys({
        'id': joi.number().integer(),
    }), 
}