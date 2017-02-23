'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
    }), 
    body: joi.object().keys({
        'rider': joi.object().keys({
                   'arrive': joi.number(),
                   'finish': joi.number(),
                   'arriveTimeoutPenalty': joi.number(),
                   'finishTimeoutPenalty': joi.number(),
                   'cancel': joi.object().keys({
                               'allow': joi.boolean(),
                               'time': joi.number(),
                               'intimePenalty': joi.number(),
                               'timeoutPenalty': joi.number(),
                           }),
               }),
        'shop': joi.object().keys({
                  'cancelDispatchedPenalty': joi.number(),
                  'cancelDispatchedTimeoutPenalty': joi.number(),
                  'cancelArrivedPenalty': joi.number(),
              }),
        'timer': joi.object().keys({
                   'pendingNotification': joi.number(),
                   'pendingCancellation': joi.number(),
                   'arrivingNotification': joi.number(),
                   'arrivingCancellation': joi.number(),
                   'leavingNotification': joi.number(),
                   'leavingCancellation': joi.number(),
                   'finishingNotification': joi.number(),
                   'finishingCancellation': joi.number(),
               }),
    }),
    params: joi.object().keys({
        'regionId': joi.number().integer(),
    }), 
}