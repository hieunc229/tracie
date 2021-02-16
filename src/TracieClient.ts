
type TracieProps = {
    server: string
}

export default class TracieClient {

    _endpoint: string;

    constructor(props: TracieProps) {
        this._endpoint = props.server;
    }

    add(name: string, params?: { [name: string]: number | string | Date | boolean }): Promise<any> {
        return this.request("POST", "/", { data: { name, ...params } })
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

            fetch(url, init)
                .then(rs => rs.json())
                .then(resolve)
                .catch(reject)
        })
    }
}