'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'dispatch': joi.object().keys({
                      'enabled': joi.boolean(),
                      'value': joi.number(),
                      'throttle': joi.number().integer().allow(0,1,2),
                  }),
        'merge': joi.object().keys({
                   'enabled': joi.boolean(),
                   'value': joi.number(),
                   'throttle': joi.number().integer().allow(0,1,2),
               }),
        'riderPick': joi.object().keys({
                       'enabled': joi.boolean(),
                   }),
    }),
    params: joi.object().keys({
    }), 
}