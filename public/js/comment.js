import apiRequest from "./apiRequest.js";

export default class comment {
    constructor (data) {
        this.displayName = data.commentName;
        this.commentText = data.commentText;
        this.status = "success";

        this.apiPackage = {
            name: this.displayName,
            text: this.commentText
        }

        this.initialize();
    }

    initialize = async () => {
        if (this.apiPackage.name == "" || this.apiPackage.text == "") {
            // console.log(this.apiPackage.displayName);
            // console.log(this.apiPackage.commentText);
            this.status = "failed";
            return;
        }
        await apiRequest("POST", "/comments", this.apiPackage);
    }

    convert = () => {
        return {
            username: this.displayName,
            text: this.commentText
        }
    }
}