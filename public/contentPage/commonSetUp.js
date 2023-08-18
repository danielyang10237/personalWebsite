import comment from "./comments/comment.js";
import apiRequest from "./comments/apiRequest.js";
import iconsHandlers from "./iconsHandlers.js";

const instaHandler = (event) => {
  window.location.href = "https://www.instagram.com/308isreallygreat/";
};

const linkedInHandler = (event) => {
  window.location.href =
    "https://www.linkedin.com/in/daniel-li-yang-070279255/";
};

const displayComment = (post) => {
  let elem = document.querySelector(`#templateComment`).cloneNode(true);
  elem.id = "comment";

  elem.querySelector(".nameDisplay").textContent = post.username;
  elem.querySelector(".messageDisplay").textContent = post.text;

  const commentFeed = document.querySelector("#commentFeed");
  commentFeed.insertBefore(elem, commentFeed.firstChild);
};

const submitCommentHandler = (event) => {
  event.preventDefault();

  const commentForm = document.getElementById(`commentForm`);
  commentForm.addEventListener("submit", submitCommentHandler.bind(this));

  let username = commentForm.commentName.value;
  let commentText = commentForm.commentText.value;

  commentForm.commentName.value = "";
  commentForm.commentText.value = "";

  let newPost = [];
  newPost.commentName = username;
  newPost.commentText = commentText;

  let post = new comment(newPost);
  if (post.status == "failed") {
    alert("Name or Message Can't Be Blank");
    return;
  }
  let convertedPost = post.convert();
  displayComment(convertedPost);
};

export async function createComments() {
  const setUpIcons = new iconsHandlers();

  const commentForm = document.getElementById(`commentForm`);
  commentForm.addEventListener("submit", submitCommentHandler.bind(this));

  const instaIcon = document.getElementById("instagram");
  instaIcon.src = "../images/instagram.png";
  const linkedInIcon = document.getElementById("linkedIn");
  linkedInIcon.src = "../images/linkedin.png";
  instaIcon.addEventListener("click", instaHandler.bind(this));
  linkedInIcon.addEventListener("click", linkedInHandler.bind(this));

  let listOfComments = await apiRequest("GET", "/comments");
  let comments = listOfComments.comments;

  for (let comment of comments) {
    displayComment(comment);
  }
}
