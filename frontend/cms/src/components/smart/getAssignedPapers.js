import {action, extendObservable} from "mobx";
import Cookies from "universal-cookie";

class storeAssignedPapers {
    constructor() {
        extendObservable(this, {
            papers: [],
            loaded: false,
            loadPapers: action(function () {
                const cookies = new Cookies();
                const session_key = cookies.get('session_key');
                const url = "http://127.0.0.1:8000/api/papers_for_reviewer_view/" + session_key + "/";
                fetch(url)
                    .then(data => data.json())
                    .then(response => {
                        console.log(response);
                        this.papers = response;
                        this.loaded = true;
                    })
            })
        })
    }
}

const store = new storeAssignedPapers ();
export default store;