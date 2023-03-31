import {AppState} from "./AppState";
import {User} from "./User";
import {Batch} from "../util/Batch";


export class LoginManager {
    public async login(email: string, pwd: string) {
        //simulate api call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const batch = Batch.start(() => {
            AppState.userState.user = new User({
                firstName: "Windy",
                surname: "You Won't See This",
                dob: new Date(2021, 9).getDate(),
            });
        });


        // Simulate another api call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        batch.add(() => {
            //deliberately set lots of different values to make sure render isn't called every time:
            AppState.userState.user.surname = "Miller";
            AppState.userState.user.surname = "Miller2";
            AppState.userState.user.surname = "Miller3";
            AppState.userState.user.surname = "Miller4";
            AppState.userState.user.surname = "Miller5";
            AppState.userState.user.dob = Date.now();
        }).processTransaction();

        //just change the dob outside the transaction to see if that causes a render (it shouldn't if it's not referenced from the view)
        AppState.userState.user.dob = Date.now();
    }
}