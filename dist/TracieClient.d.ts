declare type TracieProps = {
    server: string;
};
export declare type TracieClientAddFunction = (name: string, params?: {
    [name: string]: number | string | Date | boolean;
}) => Promise<any>;
export default class TracieClient {
    _endpoint: string;
    constructor(props: TracieProps);
    setEndpoint(path: string): void;
    add: TracieClientAddFunction;
    private request;
}
export {};
