'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
        'id': joi.string(),
        'name': joi.string(),
        'description': joi.string(),
        'paginator.size': joi.number().integer().required().min(0).max(10),
        'paginator.page': joi.number().integer().required().min(0),
    }), 
    params: joi.object().keys({
    }), 
}