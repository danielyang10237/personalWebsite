export default function switchToOcean() {
  var pageBackground = document.querySelector(".mainPage");
  pageBackground.classList.remove("guitar");

  var background = document.getElementById("oceanBackground");
  background.style.backgroundImage = "url('../images/underwater.jpg')";
  var backgroundHead = document.querySelector(".introBackground");
  backgroundHead.style.backgroundImage = "url('../images/surface.jpg')";

  var topHeader = document.querySelector(".introBackground");
  var divider = document.createElement("hr");
  divider.classList.add("hr-styled1");
  topHeader.append(divider);
  var middleHeader = document.getElementById("introSection");
  var divider2 = document.createElement("hr");
  divider2.classList.add("hr-styled2");
  middleHeader.append(divider2);

  var hiddenBackground = document.getElementById("oceanBackground");

  const hiddenBG = document.getElementById("hiddenInfoSections");
  hiddenBG.style.backgroundColor = "rgb(104, 175, 193)";
}
