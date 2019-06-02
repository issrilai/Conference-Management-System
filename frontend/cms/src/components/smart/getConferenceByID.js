import {action, extendObservable} from "mobx";

class storeConferenceById {
    constructor() {
        extendObservable(this, {
            conference: '',
            loaded: false,
            id: -1,
            loadConference: action(function () {
                console.log(this.id);
                fetch('http://127.0.0.1:8000/api/conferences/' + this.id + "/")
                    .then(data => data.json())
                    .then(response => {
                        this.conference = response;
                        console.log(this.conference);
                        this.loaded = true;
                    })
            })
        })
    }

}

const store = new storeConferenceById();
export default store;