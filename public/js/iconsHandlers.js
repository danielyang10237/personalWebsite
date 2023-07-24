export default class iconsHandler {
  constructor() {
    this.hiddenSections = [];
    this.uploadContents();

    this.academics = document.querySelector(`#academicsIcon`);
    this.academics.addEventListener("click", this.academicHandler.bind(this));

    this.hobbies = document.querySelector(`#hobbiesIcon`);
    this.hobbies.addEventListener("click", this.hobbiesHandler.bind(this));

    this.extacurriculars = document.querySelector(`#extracurricularIcon`);
    this.extacurriculars.addEventListener(
      "click",
      this.extracurrcularHandler.bind(this)
    );

    this.basic = document.querySelector(`#basicIcon`);
    this.basic.addEventListener("click", this.basicHandler.bind(this));

    this.goals = document.querySelector(`#goalsIcon`);
    this.goals.addEventListener("click", this.goalsHandler.bind(this));
  }

  hideAllSections() {
    this.hiddenSections.forEach((section) => {
      section.style.height = "0";
    });
  }

  uploadContents = () => {
    this.readFile("../txt/ecs.txt", "Extracurriculars");
    this.readFile("../txt/academics.txt", "Academics");
    this.readFile("../txt/hobbies.txt", "Hobbies");
    this.readFile("../txt/goals.txt", "Goals");
    this.readFile("../txt/basic.txt", "Basic");
  };

  getHiddenSection(id) {
    for (let i = 0; i < this.hiddenSections.length; i++) {
      if (this.hiddenSections[i].id === id) {
        return this.hiddenSections[i];
      }
    }
  }

  readFile(file, iconName) {
    fetch(file)
      .then((response) => response.text())
      .then((content) => {
        const lines = content.split(`\n`);

        const newSection = document.createElement("section");
        newSection.className = "hidden";
        newSection.id = iconName;
        this.hiddenSections.push(newSection);

        let bulletedList = null;

        lines.forEach((line) => {
          if (line.startsWith("%L%")) {
            const newTitle = document.createElement("h2");
            newTitle.id = iconName + "Title";
            newTitle.className = "textHeaderL";
            newTitle.textContent = line.substring(3);
            newSection.append(newTitle);
            // console.log(newTitle);
          } else if (line.startsWith(`%M%`)) {
            const newBody = document.createElement("h3");
            newBody.className = `textHeaderM`;
            newBody.textContent = line.substring(3);
            newSection.append(newBody);
          } else if (line.startsWith(`%NL%`)) {
            const newSpacer = document.createElement("div");
            newSpacer.className = `spacer`;
            newSpacer.textContent = "";
            newSection.append(newSpacer);
          } else if (line.startsWith(`%B%`)) {
            const newBoldHeader = document.createElement("p");
            newBoldHeader.className = `boldHeader`;
            newBoldHeader.textContent = line.substring(3);
            newSection.append(newBoldHeader);
          } else if (line.startsWith(`%I%`)) {
            const newItalicHeader = document.createElement("p");
            newItalicHeader.className = `italicHeader`;
            newItalicHeader.textContent = line.substring(3);
            newSection.append(newItalicHeader);
          } else if (line.startsWith(`%BL%`)) {
            let newBulletedList = null;
            if (bulletedList === null) {
              bulletedList = document.createElement("ul");
              bulletedList.className = `bulletedList`;
              newSection.append(bulletedList);
            }
            const newBulletedLine = document.createElement("li");
            newBulletedLine.className = "bulletedLine";
            newBulletedLine.textContent = line.substring(4);
            bulletedList.append(newBulletedLine);
          } else {
            const newParagraph = document.createElement("p");
            newParagraph.className = `paragraph`;

            if (line.includes("${")) {
              while (line.includes("${")) {
                let boldStart = line.indexOf("${");
                let boldEnd = line.indexOf("}$");
                if (boldEnd < 0) {
                  boldEnd = line.length;
                }

                let boldText = line.substring(boldStart + 2, boldEnd);
                let boldedText = document.createElement("b");
                boldedText.textContent = boldText;
                line = line.replace(
                  "${" + boldText + "}$",
                  boldedText.outerHTML
                );
              }
              newParagraph.innerHTML = line;
            } else {
              newParagraph.textContent = line;
            }
            newSection.append(newParagraph);
          }

          if (!line.startsWith("%BL%")) {
            bulletedList = null;
          }
        });

        document.querySelector("#hiddenInfoSections").append(newSection);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  academicHandler(event) {
    event.preventDefault();
    this.hideAllSections();

    let academicSection = this.getHiddenSection("Academics");
    academicSection.style.height = academicSection.scrollHeight + "px";
  }

  hobbiesHandler(event) {
    event.preventDefault();
    this.hideAllSections();

    let hobbiesSection = this.getHiddenSection("Hobbies");
    hobbiesSection.style.height = hobbiesSection.scrollHeight + "px";
  }

  extracurrcularHandler(event) {
    event.preventDefault();
    this.hideAllSections();

    let extracurricularSection = this.getHiddenSection("Extracurriculars");
    extracurricularSection.style.height =
      extracurricularSection.scrollHeight + "px";
  }

  basicHandler(event) {
    event.preventDefault();
    this.hideAllSections();

    let basicSection = this.getHiddenSection("Basic");
    basicSection.style.height = basicSection.scrollHeight + "px";
  }

  goalsHandler(event) {
    event.preventDefault();
    this.hideAllSections();

    let goalsSection = this.getHiddenSection("Goals");
    goalsSection.style.height = goalsSection.scrollHeight + "px";
  }
}
