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
    
    const baseOrigin = window.location.origin;

    const newPageUrl = `${baseOrigin}/personalWebsite/public/pageLayout.html?page=ocean`;

    window.location.href = newPageUrl;
  }

  redirectToGuitarPage(event) {
    event.preventDefault();

    event.preventDefault();

    window.page = "guitar";
    
    const baseOrigin = window.location.origin;

    const newPageUrl = `${baseOrigin}/personalWebsite/public/pageLayout.html?page=guitar`;
    window.location.href = newPageUrl;
  }
}
