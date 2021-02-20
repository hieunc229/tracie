interface ExtendedPromise<T> extends Promise<T> {
    initiate: (configs: {
        server: string;
    }) => void;
}
declare global {
    interface Window {
        tc: (name: string, params: any) => ExtendedPromise<any>;
    }
}
export {};
