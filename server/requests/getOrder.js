'use strict';
const joi = require('joi');
module.exports = {
    query: joi.object().keys({
        'cityId': joi.number().integer(),
        'regionId': joi.number().integer(),
        'id': joi.number().integer(),
        'orderStatus': joi.number().integer(),
        'placeTime': joi.number().integer(),
        'finishTime': joi.number().integer(),
        'shopId': joi.number().integer(),
        'shopName': joi.string(),
        'riderId': joi.number().integer(),
        'riderName': joi.string(),
        'shippingAddress': joi.string(),
        'status': joi.string(),
        'paginator.size': joi.number().integer().required().min(0).max(10),
        'paginator.page': joi.number().integer().required().min(0),
    }), 
    params: joi.object().keys({
    }), 
}