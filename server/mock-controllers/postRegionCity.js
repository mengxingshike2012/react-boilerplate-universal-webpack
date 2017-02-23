'use strict';
const joi = require('joi');
const Chance = require('chance');
const schemaToJoi = require('utils/schemaToJoi');
const chance = new Chance();
module.exports = function* (params, query, body, user) {
    return schemaToJoi({
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "id": {
            "type": "integer"
        },
        "hasPublished": {
            "type": "boolean"
        },
        "hasUnpublished": {
            "type": "boolean"
        },
        "needToPublish": {
            "type": "boolean"
        }
    }
});
};
