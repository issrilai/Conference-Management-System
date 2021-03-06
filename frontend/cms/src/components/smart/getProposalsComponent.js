import {action, extendObservable} from "mobx";

class storeProposals {
    constructor(){
        extendObservable(this, {
            proposals: [],
            loaded: false,
            //todo change in loadProposals
            loadSections: action(function() {
                fetch(`http://127.0.0.1:8000/api/proposals/`)
            .then(data => data.json())
            .then(response => {
                this.proposals = response;
                this.loaded = true;
            })
            })
        })
    }

}

const store = new storeProposals();
export default store;