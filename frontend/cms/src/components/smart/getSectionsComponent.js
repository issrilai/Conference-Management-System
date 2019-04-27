import {action, extendObservable} from "mobx";

class storeSections {
    constructor(){
        extendObservable(this, {
            sections: [],
            loadSections: action(function(confId) {
                fetch(`http://127.0.0.1:8000/api/sections/?confid=${confId}`)
            .then(data => data.json())
            .then(response => {
                console.log(response);
                this.sections = response;
            })
            })
        })
    }

}

const store = new storeSections();
export default store;