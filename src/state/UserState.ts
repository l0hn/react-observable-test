import {User} from "../data/User";
import {action, makeObservable, observable} from "mobx";

/**
 * A state object holding UserState. this is pointless as is because it just holds a 'User', but this could contain
 * other state info, or not. But this shows that nested objects are observable.
 */
export class UserState {
    public user:User;

    setUser(user:User) {
        this.user = user;
    }

    constructor(user:User) {
        makeObservable(this, {
            user:observable,
            setUser:action.bound
        })
        this.user = user;
    }
}