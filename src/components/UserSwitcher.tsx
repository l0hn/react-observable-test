import React from "react";
import {observer} from "mobx-react";
import {AppState} from "../state/AppState";
import {User} from "../data/User";


/**
 * Just simulate the user state object completely changing somehow:
 */
@observer
export class UserSwitcher extends React.Component<any, any> {


    makeSomeUser():User {
        switch (AppState.userState.user.firstName) {
            case "John":
                return new User({
                    firstName: "Mikey",
                    surname: "(Hungry) Burke",
                    dob: Date.now()
                })
            default:
                return  new User({
                    firstName: "John",
                    surname: "Haines",
                    dob: Date.now()
                })
        }
    }

    switchUser() {
        //try setting user to a new object:
        AppState.userState.setUser(this.makeSomeUser());
        console.log("Switched User");
    }

    render() {
        return (
            <div>
                <button onClick={() => this.switchUser()}>Change {AppState.userState.user.fullName}</button>
            </div>
        );
    }
}