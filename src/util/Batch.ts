import {runInAction, transaction} from "mobx";

export class Batch {
    private readonly _actions = new Array<()=>any>();

    private constructor() {

    }

    public static start(action?:() => any):Batch {
        const batch = new Batch();
        if (action){
            batch.add(action);
        }
        return batch;
    }

    public add(action:() => any):Batch {
        this._actions.push(action);
        return this;
    }

    public processTransaction() {
        transaction(() => {this.process()});
    }

    public process() {
        this._actions.forEach(a => {
            runInAction(a)
        });
        this._actions.length = 0;
    }
}