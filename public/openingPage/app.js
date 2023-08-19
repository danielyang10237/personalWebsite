window.page = "nothing";

export default class App {
  constructor() {
    this.oceanSelect = document.querySelector("#oceanChoice");
    this.oceanSelect.addEventListener("click", this.redirectToOceanPage.bind(this));

    this.oceanSelect = document.querySelector("#guitarChoice");
    this.oceanSelect.addEventListener("click", this.redirectToGuitarPage.bind(this));
  }

  redirectToOceanPage(event) {
    event.preventDefault();

    window.page = "ocean";
    window.location.href = "../public/pageLayout.html?page=ocean";
  }

  redirectToGuitarPage(event) {
    event.preventDefault();

    window.page = "guitar";
    window.location.href = "../public/pageLayout.html?page=guitar";
  }
}
