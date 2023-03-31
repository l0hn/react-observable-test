import React from "react";
import {AppState} from "../state/AppState";


interface ILoginFormState {
    email:string;
    password:string;
    busy: boolean;
}

export class Login extends React.Component<any, ILoginFormState> {

    constructor(props:any) {
        super(props);
        this.state = {
            email: "",
            password: "",
            busy: false
        };
    }

    resetState() {
        this.setState({
            email: "",
            password: "",
            busy: false
        });
    }

    async loginSubmitHandler(){
        this.setState({busy: true});
        await AppState.loginManager.login(this.state.email, this.state.password).then(() => {
            this.resetState();
        });
    }

    async keyPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key !== "Enter")
            return;

        return this.loginSubmitHandler();
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="email address"
                           value={this.state.email}
                           onChange={e => this.setState({email: e.currentTarget.value})}
                           disabled={this.state.busy}
                           onKeyDown={e => {this.keyPressHandler(e)}}
                    />
                    <input type="password" placeholder="password"
                           value={this.state.password}
                           onChange={e => this.setState({password: e.currentTarget.value})}
                           disabled={this.state.busy}
                           onKeyDown={e => {this.keyPressHandler(e)}}
                    />
                    <input onClick={() => this.loginSubmitHandler()}
                           type="button"
                           value="Login"
                           disabled={this.state.busy}
                    />
                </form>
            </div>
        );
    }
}