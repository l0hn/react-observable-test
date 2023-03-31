import React from "react";
import {observer} from "mobx-react";
import {AppState} from "../state/AppState";
import {User} from "../state/User";
import {runInAction} from "mobx";


/**
 * Just simulate the user state object completely changing somehow:
 */
@observer
export class UserSwitcher extends React.Component<any, any> {


    /**
     * Example of 'batching' changes inside an action to prevent unnecessary change notifications.
     */
    actionDemo() {
        runInAction(() => {
            AppState.userState.user.firstName = "changed firstName";
            AppState.userState.user.surname = "changed surName";
        });
    }

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
        AppState.userState.user = this.makeSomeUser();
        console.log("Switched User");
    }

    render() {
        console.log("UserSwitcher.render()");
        return (
            <div>
                <button onClick={() => this.switchUser()}>Change {AppState.userState.user.fullName}</button>
            </div>
        );
    }
}