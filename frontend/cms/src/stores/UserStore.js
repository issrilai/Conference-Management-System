import {action, extendObservable} from "mobx";

class UserStore {
    constructor() {
        extendObservable(this, {
            username : "",
            password : "",
            checkCredentials: action(function() {
                fetch('http://127.0.0.1:8000/auth/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        {
                            username: this.username,
                            password: this.password
                        }
                    )
                })
                    .then((data) => data.json())
                    .then((response) => {
                        console.log("in user store");
                        console.log(response)
                    })
            })
        })
    }

}

const userStore = new UserStore();
export default userStore;