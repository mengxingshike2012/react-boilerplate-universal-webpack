'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
        'paginator.size': joi.number().integer().required().min(0).max(10),
        'paginator.page': joi.number().integer().required().min(0),
        'hasPublished': joi.boolean(),
        'hasUnpublished': joi.boolean(),
    }), 
    params: joi.object().keys({
        'provinceId': joi.number().integer(),
    }), 
}