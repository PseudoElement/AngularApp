export class SingletonAbstract {
    private instance: SingletonAbstract;

    constructor() {
        if (!this.instance) {
            this.instance = new SingletonAbstract();
        }

        return this.instance;
    }
}
