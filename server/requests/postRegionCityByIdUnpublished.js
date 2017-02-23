'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi,
    params: joi.object().keys({
        'id': joi.number().integer().required(),
    }), 
}