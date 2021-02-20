"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TracieClient {
    constructor(props) {
        this.add = (name, params) => {
            return this.request("POST", "", { data: Object.assign({ name }, params) });
        };
        this._endpoint = props.server;
    }
    setEndpoint(path) {
        this._endpoint = path;
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
                .then(rs => {
                if (rs.status !== 204) {
                    return rs.json();
                }
                return Promise.resolve({});
            })
                .then(resolve)
                .catch(reject);
        });
    }
}
exports.default = TracieClient;
