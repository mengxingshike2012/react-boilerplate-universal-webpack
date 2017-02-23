'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
        'regionId': joi.number().integer(),
        'name': joi.string(),
        'phone': joi.string(),
        'role': joi.number().integer(),
        'paginator.size': joi.number().integer().required().min(0).max(10),
        'paginator.page': joi.number().integer().required().min(0),
    }), 
    params: joi.object().keys({
    }), 
}