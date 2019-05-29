import {action, extendObservable} from "mobx";
import Cookies from "universal-cookie";

class storeAssignPaperData {
    constructor() {
        extendObservable(this, {
            wishToReviewData: [],
            loaded: false,
            loadWishToReviewData: action(function () {
                const cookies = new Cookies();
                const session_key = cookies.get('session_key');
                const url = "http://127.0.0.1:8000/api/papers_reviwers_to_assign/" + session_key + "/";
                fetch(url)
                    .then(data => data.json())
                    .then(response => {
                        console.log(response);
                        this.wishToReviewData = response;
                        this.loaded = true;
                    })
            })
        })
    }
}

const store = new storeAssignPaperData();
export default store;