import {User} from "./User";
import {action, makeAutoObservable, observable} from "mobx";

/**
 * A state object holding UserState. this is pointless as is because it just holds a 'User', but this could contain
 * other state info, or not. But this shows that nested objects are observable.
 */
export class UserState {
    @observable private _user:User;

    @action
    set user(user:User) {
        this._user = user;
    }

    get user():User {
        return this._user;
    }

    constructor(user:User) {
        makeAutoObservable(this);
        this.user = user;
    }
}