import {User} from "./User";
import {UserState} from "./UserState";
import {LoginManager} from "./LoginManager";


/**
 * AppState singleton stores the global application state objects:
 */
class AppStateSingleton {
    public userState: UserState;
    public readonly loginManager:LoginManager;

    constructor() {
        this.loginManager = new LoginManager();
    }
}

//initializing with some default state for example purposes
const appState = new AppStateSingleton();
appState.userState = new UserState(new User({
    firstName: "John",
    surname: "Haines",
    dob: Date.now()
}));


export const AppState = appState;