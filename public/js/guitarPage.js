import comment from "./comment.js";
import apiRequest from "./apiRequest.js";
import switcher from "./switcher.js";
import iconsHandlers from "./iconsHandlers.js";

export default class guitarPage {
  constructor() {
    var backgroundHead = document.querySelector(".introBackground");
    backgroundHead.style.backgroundImage = "url('../images/guitarTop.jpg')";
    var background = document.getElementById("oceanBackground");
    background.style.backgroundImage = "url('../images/underwater.jpg')";

    const elements = document.querySelectorAll(".hr-styled1");
    elements.forEach((element) => {
      element.remove();
    });

    const elements2 = document.querySelectorAll(".hr-styled2");
    elements2.forEach((element2) => {
      element2.remove();
    });
  }
}
