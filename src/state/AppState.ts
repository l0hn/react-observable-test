import {User} from "../data/User";
import {UserState} from "./UserState";


/**
 * AppState singleton stores the global application state objects:
 */
class AppStateSingleton {
    public userState: UserState;
}

//initializing with some default state for example purposes
const appState = new AppStateSingleton();
appState.userState = new UserState(new User({
    firstName: "John",
    surname: "Haines",
    dob: Date.now()
}));


export const AppState = appState;