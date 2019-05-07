    
import {action, extendObservable} from "mobx/lib/mobx";

class UserDummyStore {
    constructor(){
        extendObservable(this, {
            user: {},
            users: [],
            get filteredUser(){
                const matchFilter = new RegExp(this.filter, "i");
            return this.users.filter(user => !this.filter || matchFilter.test(user))
            },
            loadUser: action(function(userID) {
                fetch(`http://127.0.0.1:8000/api/users/${userID}`)
            .then(data => data.json())
            .then(response => {
                console.log(response);
                this.user = response;
            })
            })
        })
    }

}

const store = new UserDummyStore();
export default store;