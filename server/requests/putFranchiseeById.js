'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'companyName': joi.string(),
        'id': joi.number(),
        'name': joi.string(),
        'identityNumber': joi.string(),
        'email': joi.string(),
        'phone': joi.string(),
        'address': joi.string(),
        'effectiveDate': joi.number(),
        'signedDate': joi.number(),
        'account': joi.object().keys({
                     'number': joi.string(),
                     'name': joi.string(),
                     'bank': joi.string(),
                 }),
        'region': joi,
    }),
    params: joi.object().keys({
        'id': joi.required(),
    }), 
}