export default class iconsHandler {
  constructor() {
    this.hiddenSections = [];
    this.uploadContents();

    this.addHandlers(".academics", this.academicHandler);
    this.addHandlers(".entertainment", this.hobbiesHandler);
    this.addHandlers(".extracurriculars", this.extracurrcularHandler);
    this.addHandlers(".basic_info", this.basicHandler);
    this.addHandlers(".goals", this.goalsHandler);
    this.addHandlers(".digital_skills", this.digitalHandler);
  }

  addHandlers(class_name, function_name) {
    this.elementTrigger = document.querySelectorAll(class_name);
    for (let element of this.elementTrigger) {
      element.addEventListener("click", function_name.bind(this));
    }
  }

  hideAllSections() {
    this.hiddenSections.forEach((section) => {
      section.style.height = "0";
    });
  }

  uploadContents = () => {
    this.readFile("../public/txt/ecs.txt", "Extracurriculars");
    this.readFile("../public/txt/academics.txt", "Academics");
    this.readFile("../public/txt/hobbies.txt", "Hobbies");
    this.readFile("../public/txt/goals.txt", "Goals");
    this.readFile("../public/txt/basic.txt", "Basic");
    this.readFile("../public/txt/digital.txt", "Digital");
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

        const hiddenSections = document.querySelectorAll("#hiddenInfoSections");
        hiddenSections[0].append(newSection);
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

  digitalHandler(event) {
    event.preventDefault();
    this.hideAllSections();

    let digitalSection = this.getHiddenSection("Digital");
    digitalSection.style.height = digitalSection.scrollHeight + "px";
  }
}
