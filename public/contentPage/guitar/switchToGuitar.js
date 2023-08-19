export default function switchToGuitar() {
  var pageBackground = document.querySelector(".mainPage");
  pageBackground.classList.add("guitar");

  var background = document.getElementById("guitarBackground");
  background.style.backgroundImage = "url('../public/images/underwater.jpg')";
  var backgroundHead = document.querySelector(".introBackground");
  backgroundHead.style.backgroundImage = "url('../public/images/guitarTop.jpg')";
  var background = document.getElementById("guitarBackground");
  background.style.backgroundImage = "url('../public/images/guitar.jpg')";

  const elements = document.querySelectorAll(".hr-styled1");
  elements.forEach((element) => {
    element.remove();
  });

  const elements2 = document.querySelectorAll(".hr-styled2");
  elements2.forEach((element2) => {
    element2.remove();
  });

  const hiddenBG = document.getElementById("hiddenInfoSections");
  hiddenBG.style.backgroundColor = "rgb(185, 100, 3)";
  hiddenBG.style.borderTop = "4px solid rgb(255, 255, 255)";
  hiddenBG.style.borderBottom = "4px solid rgb(255, 255, 255)";
}
