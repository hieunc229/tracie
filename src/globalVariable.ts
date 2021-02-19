import TracieClient, { TracieClientAddFunction } from "./TracieClient";

interface ExtendedPromise<T> extends Promise<T> {
    initiate: (configs: { server: string }) => void
}

declare global {
    interface Window { tc: (name: string, params: any) => ExtendedPromise<any>; }
}

(function (host: Window) {

    let tracieGlobal = new TracieClient({ server: "" })

    let tc: any = (name: string, params: any) => {
        return tracieGlobal.add(name, params);
    }

    tc.initiate = function (configs: { server: string }) {
        tracieGlobal.setEndpoint(configs.server);
    }

    host.tc = tc;

})(window);

export { };