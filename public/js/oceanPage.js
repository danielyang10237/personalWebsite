import comment from "./comment.js";
import apiRequest from "./apiRequest.js";
import iconsHandlers from "./iconsHandlers.js";

export default class oceanPage {
  constructor() {
    var background = document.getElementById("oceanBackground");
    background.style.backgroundImage = "url('../images/underwater.jpg')";
    var backgroundHead = document.querySelector(".introBackground");
    backgroundHead.style.backgroundImage = "url('../images/surface.jpg')";

    this.instaIcon = document.getElementById("instagram");
    this.instaIcon.src = "../images/instagram.png";
    this.linkedInIcon = document.getElementById("linkedIn");
    this.linkedInIcon.src = "../images/linkedin.png";

    var topHeader = document.querySelector(".introBackground");
    var divider = document.createElement("hr");
    divider.classList.add("hr-styled1");
    topHeader.append(divider);
    var middleHeader = document.getElementById("introSection");
    var divider2 = document.createElement("hr");
    divider2.classList.add("hr-styled2");
    middleHeader.append(divider2);

    const setUpIcons = new iconsHandlers();

    this.commentForm = document.querySelector(`#commentForm`);
    commentForm.addEventListener(
      "submit",
      this.submitCommentHandler.bind(this)
    );

    this.instaIcon.addEventListener("click", this.instaHandler.bind(this));
    this.linkedInIcon.addEventListener(
      "click",
      this.linkedInHandler.bind(this)
    );

    this.updatePage();
  }

  instaHandler(event) {
    window.location.href = "https://www.instagram.com/308isreallygreat/";
  }

  linkedInHandler(event) {
    window.location.href =
      "https://www.linkedin.com/in/daniel-li-yang-070279255/";
  }

  submitCommentHandler(event) {
    event.preventDefault();

    let username = this.commentForm.commentName.value;
    let commentText = this.commentForm.commentText.value;

    this.commentForm.commentName.value = "";
    this.commentForm.commentText.value = "";

    let newPost = [];
    newPost.commentName = username;
    newPost.commentText = commentText;

    let post = new comment(newPost);
    if (post.status == "failed") {
      alert("Name or Message Can't Be Blank");
      return;
    }
    let convertedPost = post.convert();
    this.displayComment(convertedPost);
  }

  displayComment = (post) => {
    let elem = document.querySelector(`#templateComment`).cloneNode(true);
    elem.id = "comment";

    elem.querySelector(".nameDisplay").textContent = post.username;
    elem.querySelector(".messageDisplay").textContent = post.text;

    const commentFeed = document.querySelector("#commentFeed");
    commentFeed.insertBefore(elem, commentFeed.firstChild);
  };

  async updatePage() {
    let listOfComments = await apiRequest("GET", "/comments");
    let comments = listOfComments.comments;

    for (let comment of comments) {
      this.displayComment(comment);
    }
  }
}

