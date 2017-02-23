'use strict';

module.exports = function(controller, rules) {
    return function* (next) {
        let params = this.params;
        let body = this.body;
        let query = this.query;
        try {
            if (rules.param) {
                params = yield cb => rules.param.validate(params, cb);
            }
            if (rules.query) {
                query = yield cb => rules.query.validate(query, cb);
            }
            if (rules.body) {
                body = yield cb => rules.body.validate(body, cb);
            }
        } catch(e) {
            this.body = {
                success: false,
                errorMessage: e.message,
            }
            this.status = 422;
            yield next;
            return;
        }
        const { paging, data }= yield controller(params, query, body);
        this.body = {
            paging,
            data,
            success: true,
        };
        this.status = 200;
        this.type = 'json';
        yield next;
    }
}