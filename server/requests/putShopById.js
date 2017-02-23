'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'id': joi.number().integer(),
        'regionId': joi.number().integer(),
        'name': joi.string(),
        'address': joi.string(),
        'balance': joi.number(),
        'geo': joi.object().keys({
                 'lat': joi.number(),
                 'lng': joi.number(),
             }),
        'account': joi.object().keys({
                     'phone': joi.string(),
                     'registerTime': joi.number().integer(),
                 }),
        'audit': joi.object().keys({
                   'time': joi.number().integer(),
                   'status': joi.number().integer(),
                   'pid': joi.object().keys({
                            'number': joi.string(),
                            'image': joi.object().keys({
                                       'front': joi.string(),
                                       'back': joi.string(),
                                       'hand': joi.string(),
                                   }),
                        }),
               }),
    }),
    params: joi.object().keys({
        'id': joi.number().integer().required(),
    }), 
}