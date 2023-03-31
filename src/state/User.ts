import {action, computed, makeAutoObservable, observable} from "mobx";


/**
 * Some example state object of a User
 * Notice the lack of extensive janky boilerplate code, I'm not forced to use an insane system of reducers that are
 * impossible to type without getting a headache, code is readable, use normal methods / properties / setters etc..
 */
export class User {
    @observable private _firstName: string;
    @observable private _surname: string;
    @observable private _dob: number;

    @computed
    get fullName():string {
        return `${this._firstName} ${this._surname}`;
    }

    @computed
    get age():number {
        return Date.now()-this._dob;
    }

    @action
    set firstName(value:string) {
        this._firstName = value;
    }

    get firstName():string{
        return this._firstName;
    }

    @action
    set surname(value:string) {
        this._surname = value;
    }

    get surname():string {
        return this._surname;
    }

    @action
    set dob(value:number) {
        this._dob = value;
    }

    get dob():number {
        return this._dob;
    }

    constructor(options: {
        firstName: string,
        surname: string,
        dob:number
    }) {
        makeAutoObservable(this);

        this._firstName = options.firstName;
        this._surname = options.surname;
        this._dob = options.dob;
    }
}