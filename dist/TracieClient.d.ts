declare type TracieProps = {
    server: string;
};
export default class TracieClient {
    _endpoint: string;
    constructor(props: TracieProps);
    add(name: string, params?: {
        [name: string]: number | string | Date | boolean;
    }): Promise<any>;
    private request;
}
export {};
