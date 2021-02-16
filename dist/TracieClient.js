"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TracieClient {
    constructor(props) {
        this._endpoint = props.server;
    }
    add(name, params) {
        return this.request("POST", "/", { data: Object.assign({ name }, params) });
    }
    request(method, path, options) {
        return new Promise((resolve, reject) => {
            let url = `${this._endpoint}/${path}`;
            let init = { method };
            if (options === null || options === void 0 ? void 0 : options.data) {
                init = Object.assign(init, {
                    body: JSON.stringify(options.data),
                    headers: {
                        [`Content-Type`]: `application/json`
                    }
                });
            }
            fetch(url, init)
                .then(rs => rs.json())
                .then(resolve)
                .catch(reject);
        });
    }
}
exports.default = TracieClient;
