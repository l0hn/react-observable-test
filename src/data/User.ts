import {computed, makeObservable, observable} from "mobx";


/**
 * Some example state object of a User
 * Notice the lack of extensive janky boilerplate code, I'm not forced to use an insane system of reducers that are
 * impossible to type without getting a headache, code is readable, use normal methods / properties / setters etc..
 */
export class User {
    firstName: string;
    surname: string;
    dob: Number;

    get fullName():string {
        return `${this.firstName} ${this.surname}`;
    }

    constructor(options: {
        firstName: string,
        surname: string,
        dob:Number
    }) {
        makeObservable(this, {
            firstName: observable,
            surname: observable,
            dob: observable,
            fullName: computed
        })

        this.firstName = options.firstName;
        this.surname = options.surname;
        this.dob = options.dob;
    }
}