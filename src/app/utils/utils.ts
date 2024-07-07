export class AppUtils {
    public static wait<T>(ms: number, onFinish?: () => any): Promise<T> {
        return new Promise((res) => {
            setTimeout(() => res(onFinish?.()), ms);
        });
    }

    public static handleTimeout<T>(promise: Promise<T>, ms: number, timeoutText: string): Promise<T> {
        const onTimeout = () => {
            throw new Error(timeoutText);
        };

        const rejectPromise = <T>(): Promise<T> =>
            new Promise((r, rej) => {
                setTimeout(() => rej(timeoutText), ms);
            });

        return Promise.race([rejectPromise<T>(), promise]);
    }
}
