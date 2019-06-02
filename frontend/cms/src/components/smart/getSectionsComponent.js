import {action, extendObservable} from "mobx";

class storeSections {
    constructor(){
        extendObservable(this, {
            sections: [],
            loaded: false,
            loadSections: action(function() {
                fetch(`http://127.0.0.1:8000/api/sections/`)
            .then(data => data.json())
            .then(response => {
                this.sections = response;
                this.loaded = true;
            })
            })
        })
    }

}

const store = new storeSections();
export default store;