import oceanPage from "../contentPage/ocean/oceanPage.js";
import guitarPage from "../contentPage/guitar/guitarPage.js";
import switchToGuitar from "../contentPage/guitar/switchToGuitar.js";
import switchToOcean from "../contentPage/ocean/switchToOcean.js";

export default class switcher {
  constructor(curPage) {

    this.oceanPage = document.querySelectorAll(".aquatic");
    this.guitarPage = document.querySelectorAll(".acoustic");

    this.page = curPage;
    this.oceanSelect = document.querySelector(".switch");
    this.oceanSelect.addEventListener("click", this.switchPage.bind(this));
  
    const urlParams = new URLSearchParams(window.location.search);
    this.curPage = urlParams.get("page");

    if (this.curPage === "ocean") {
      const ocean = new oceanPage();
      for (let aquaticElem of this.oceanPage) {
        aquaticElem.classList.remove("hidden");
      }
    } else {
      const guitar = new guitarPage();
      for (let aquaticElem of this.oceanPage) {
        aquaticElem.classList.add("hidden");
      }
      this.oceanSelect.classList.add("switched");
      this.curPage = "guitar";
      for (let acousticElem of this.guitarPage) {
        acousticElem.classList.remove("hidden");
      }
    }
  }

  switchPage(event) {
    event.preventDefault();

    if (this.curPage === "guitar") {
      for (let aquaticElem of this.oceanPage) {
        aquaticElem.classList.remove("hidden");
      }
      for (let acousticElem of this.guitarPage) {
        acousticElem.classList.add("hidden");
      }
      this.oceanSelect.classList.remove("switched");
      this.curPage = "ocean";
      switchToOcean();
    } else {
      for (let aquaticElem of this.oceanPage) {
        aquaticElem.classList.add("hidden");
      }
      for (let acousticElem of this.guitarPage) {
        acousticElem.classList.remove("hidden");
      }
      this.oceanSelect.classList.add("switched");
      this.curPage = "guitar";
      switchToGuitar();
    }
  }
}

if (window.page === "ocean") {
  let allAquaticComponents = document.querySelectorAll(".aquatic");
  for (let aquaticElem of allAquaticComponents) {
    aquaticElem.classList.add("hidden");
  }
} else {
  let allAcousticComponents = document.querySelectorAll(".acoustic");
  for (let acousticElem of allAcousticComponents) {
    acousticElem.classList.add("hidden");
  }
}

const switchedUp = new switcher();
