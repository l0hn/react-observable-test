import React from 'react';
import {AppState} from "./state/AppState";
import {observer} from "mobx-react";
import {UserSwitcher} from "./components/UserSwitcher";
import {UserNameChanger} from "./components/UserNameChanger";
import {Login} from "./components/Login";


/**
 * I don't care, I'm not styling it for a demo.
 */
@observer
class App extends React.Component {

  render() {
      console.log("App.render()");
    return (
        <div>
            <h1>React Observer Example (using mobx)</h1>
            <p>
                I am component 'App'. I show the current user's full name from the global 'AppState' object.
            </p>
            <p>
                I have 2 sub-components (UserSwitcher.tsx and UserNameChanger.tsx).
            </p>
            <ul>
                <li>They both observe and manipulate values on the global 'AppState.userState.user' object.</li>
                <li>'UserSwitcher' changes 'AppState.userState.user' to a different object ref to test update (they work)</li>
            </ul>
            <br/>

            <h2>Current User:</h2>
            <p>User: {AppState.userState.user.fullName}</p>
            <br/>

            <h2>'UserSwitcher' component:</h2>
            <UserSwitcher/>
            <br/>
            <br/>

            <h2>'UserNameChanger' component:</h2>
            <UserNameChanger/>
            <br/>
            <br/>

            <h2>'Login' component:</h2>
            <Login/>
        </div>
    );
  }
}

export default App;
