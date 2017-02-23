'use strict';
const joi = require('joi');
const Chance = require('chance');
const schemaToJoi = require('utils/schemaToJoi');
const chance = new Chance();
module.exports = function* (params, query, body, user) {
    return schemaToJoi({
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            },
            "cityId": {
                "type": "integer"
            },
            "frenchisee": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "phone": {
                        "type": "string",
                        "m-pool": "0123456789",
                        "m-length": 11
                    }
                }
            }
        }
    }
});
};
