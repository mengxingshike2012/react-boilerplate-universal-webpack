'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'id': joi.number().integer(),
        'comment': joi.string(),
        'createdAt': joi.number().integer(),
        'reason': joi.string(),
        'status': joi.number().integer().allow(0,1,2),
        'result': joi.string(),
        'order': joi.object().keys({
                   'id': joi.number().integer(),
                   'shop': joi.object().keys({
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
                   'rider': joi.object().keys({
                              'id': joi.number().integer(),
                              'regionId': joi.number().integer(),
                              'position': joi.number().integer().allow(0,1),
                              'workStatus': joi.number().integer().allow(0,1),
                              'accountStatus': joi.number().integer().allow(0,1),
                              'name': joi.string(),
                              'phone': joi.string(),
                              'idNumber': joi.string(),
                          }),
                   'shipping': joi.object().keys({
                                 'id': joi.number().integer(),
                             }),
                   'charge': joi.object().keys({
                               'rider': joi.object().keys({
                                          'base': joi.number(),
                                          'distance': joi.number(),
                                          'time': joi.number(),
                                      }),
                               'shop': joi.object().keys({
                                         'base': joi.number(),
                                         'distance': joi.number(),
                                         'time': joi.number(),
                                     }),
                           }),
                   'info': joi.object().keys({
                             'comment': joi.string(),
                             'source': joi.number().integer(),
                             'cancelSource': joi.number().integer(),
                             'channelId': joi.string(),
                             'placeTime': joi.number().integer(),
                             'finishTime': joi.number().integer(),
                             'dispatchMode': joi.number().integer().allow(1,2),
                         }),
               }),
        'shop': joi.object().keys({
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
        'rider': joi.object().keys({
                   'id': joi.number().integer(),
                   'regionId': joi.number().integer(),
                   'position': joi.number().integer().allow(0,1),
                   'workStatus': joi.number().integer().allow(0,1),
                   'accountStatus': joi.number().integer().allow(0,1),
                   'name': joi.string(),
                   'phone': joi.string(),
                   'idNumber': joi.string(),
               }),
    }),
    params: joi.object().keys({
    }), 
}