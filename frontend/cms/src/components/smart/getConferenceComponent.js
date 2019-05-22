import {action, extendObservable} from "mobx";

class storeConferences {
    constructor() {
        extendObservable(this, {
            conferences: [],
            //scopul lui loaded este sa zica daca s-a facut primul request cu succes
            loaded: false,
            loadConferences: action(function () {
                fetch(`http://127.0.0.1:8000/api/conferences/`)
                    .then(data => data.json())
                    .then(response => {
                        console.log(response);
                        this.conferences = response;
                        this.loaded = true;
                        //    setez loaded true ca sa stiu ca am facut requestul
                    })
            })
        })
    }

}

const store = new storeConferences();
export default store;