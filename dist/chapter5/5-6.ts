type ReturnPromise<T> =
    T extends (...args: infer A) => infer R ? (...args: A) => Promise<R> : T;   

type Promisify<T> = {
    [P in keyof T]: ReturnPromise<T[P]>;
};

interface SyncService {
    baseUrl: string; 
    getA(): string;
}

class AsyncService implements Promisify<SyncService> {
    baseUrl: string; 

    getA(): Promise<string> {
        return Promise.resolve('');
    }
}

let service = new AsyncService();


let result = service.getA(); // hover over result: it's of type Promise<string>
