import React from "react";
import {AppState} from "../state/AppState";
import {observer} from "mobx-react";
import {runInAction} from "mobx";

/**
 * Simulate something updating a field on a state object:
 */
@observer
export class UserNameChanger extends React.Component<any, any> {


    firstNameInputChanged = (e:React.FormEvent<HTMLInputElement>) => {
        runInAction(() => {
            AppState.userState.user.firstName = e.currentTarget.value;
        });
    };

    surnameInputChanged = (e:React.FormEvent<HTMLInputElement>) => {
        runInAction(() => {
            AppState.userState.user.surname = e.currentTarget.value;
        });
    };

    render() {
        return (
            <div>
                <li>
                    <label>First Name: </label>
                    <input
                        type="text"
                        value={AppState.userState.user.firstName}
                        onChange={this.firstNameInputChanged}
                    />
                </li>
                <li>
                    <label>Surname: </label>
                    <input
                        type="text"
                        value={AppState.userState.user.surname}
                        onChange={this.surnameInputChanged}
                    />
                </li>
            </div>

        );
    }
}