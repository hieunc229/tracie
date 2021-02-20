import request from "./request";

type TracieProps = {
    server: string
}

export type TracieClientAddFunction = (
    name: string, 
    params?: { [name: string]: number | string | Date | boolean }
) => Promise<any>;

export default class TracieClient {

    _endpoint: string;

    constructor(props: TracieProps) {
        this._endpoint = props.server;
    }

    setEndpoint(path: string) {
        this._endpoint = path;
    }

    add: TracieClientAddFunction = (name, params) => {
        return this.request("POST", "", { data: { name, ...params } })
    }

    private request(method: "POST" | "GET" | "PATCH" | "DELETE", path: string, options: {
        data?: { [name: string]: any }
    }) {

        return new Promise((resolve, reject) => {

            let url = `${this._endpoint}/${path}`;
            let init: RequestInit = { method };

            if (options?.data) {
                init = Object.assign(init, {
                    body: JSON.stringify(options.data),
                    headers: {
                        [`Content-Type`]: `application/json`
                    }
                })
            }

            request(url, init)
                .then(rs => {
                    if (rs.status !== 204) {
                        return rs.json()
                    }
                    return Promise.resolve({});
                })
                .then(resolve)
                .catch(reject)
        })
    }
}