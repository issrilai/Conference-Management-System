import {action, extendObservable} from "mobx";

class storeCommitteeMembers {
    constructor() {
        extendObservable(this, {
            committeeMembers: [],
            loaded: false,
            loadMembers: action(function () {
                fetch(`http://127.0.0.1:8000/api/members/`)
                    .then(data => data.json())
                    .then(response => {
                        console.log(response);
                        this.committeeMembers = response;
                        this.loaded = true;
                    })
            })
        })
    }

}

const store = new storeCommitteeMembers();
export default store;