'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
        'cityId': joi.number().integer(),
        'regionId': joi.number().integer(),
        'name': joi.string(),
        'phone': joi.string(),
        'status': joi.number().integer(),
    }), 
    params: joi.object().keys({
    }), 
}