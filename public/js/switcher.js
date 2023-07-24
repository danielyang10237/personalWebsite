import oceanPage from "./oceanPage.js";
import guitarPage from "./guitarPage.js";
import App from "./app.js";

export default class switcher {
  constructor(curPage) {

    this.oceanPage = document.getElementById("aquatic");
    this.guitarPage = document.getElementById("acoustic");

    this.page = curPage;
    this.oceanSelect = document.querySelector(".switch");
    this.oceanSelect.addEventListener("click", this.switchPage.bind(this));

    const urlParams = new URLSearchParams(window.location.search);
    this.curPage = urlParams.get("page");

    if (this.curPage === "ocean") {
      const ocean = new oceanPage();
      this.oceanPage.classList.remove("hidden");
    } else {
      const guitar = new guitarPage();
      this.guitarPage.classList.remove("hidden");
    }
  }

  switchPage(event) {
    event.preventDefault();

    if (this.curPage === "guitar") {
      this.oceanPage.classList.remove("hidden");
      this.guitarPage.classList.add("hidden");
      this.oceanSelect.classList.remove("switched");
      this.curPage = "ocean";
      const ocean = new oceanPage();
    } else {
      this.oceanPage.classList.add("hidden");
      this.guitarPage.classList.remove("hidden");
      this.oceanSelect.classList.add("switched");
      this.curPage = "guitar";
      const guitar = new guitarPage();
    }
  }
}

if (window.page === "ocean") {
  document.getElementById("acoustic").classList.add("hidden");
} else {
  document.getElementById("aquatic").classList.add("hidden");
}

const switchedUp = new switcher();
