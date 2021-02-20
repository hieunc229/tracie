
type FetchInterface = (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;

const request: FetchInterface = typeof require !== "undefined" && typeof fetch === "undefined" ?
    require("node-fetch") : fetch;

export default request;