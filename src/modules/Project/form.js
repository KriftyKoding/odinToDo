// submitBTTN ~~where form data is processed
const formData = require("./formData");
// subquestBTTN
const subquest = require("./subquest");

function form() {
  //Submit BTTN
  document.addEventListener('DOMContentLoaded', () => {
        document
          .getElementById('myForm')
          .addEventListener('submit', formData);
      });
    ///////////////////////
    // Form
    ////////////////////////
    let content = document.getElementById("content");
    
    let form = document.createElement("form");
    form.id = "myForm";
    content.appendChild(form);
    
    let titleInput = document.createElement("input");
    titleInput.name = "title"
    titleInput.type = "text"
    titleInput.placeholder = "Title"
    form.appendChild(titleInput);

    let dateInput = document.createElement("input")
    dateInput.name = "dateInput"
    dateInput.type = "date"
    form.appendChild(dateInput);

    let colorContainer = document.createElement("div");
    form.appendChild(colorContainer);
    let colorTitle = document.createElement("p")
    colorTitle.innerText = "Color"
    colorContainer.appendChild(colorTitle);
    let none = document.createElement("input")
    none.type = "radio"
    none.name = "Color"
    none.value = "none"
    none.checked = true;
    colorContainer.appendChild(none);
    let noneLabel = document.createElement("label");
    noneLabel.setAttribute("for", "none");
    noneLabel.textContent = "none"
    colorContainer.appendChild(noneLabel);
    let red = document.createElement("input")
    red.type = "radio"
    red.name = "Color"
    red.value = "red"
    colorContainer.appendChild(red);
    let redLabel = document.createElement("label");
    redLabel.setAttribute("for", "red");
    redLabel.textContent = "red"
    colorContainer.appendChild(redLabel);
    let blue = document.createElement("input")
    blue.type = "radio"
    blue.name = "Color"
    blue.value = "blue"
    colorContainer.appendChild(blue);
    let blueLabel = document.createElement("label");
    blueLabel.setAttribute("for", "blue");
    blueLabel.textContent = "blue"
    colorContainer.appendChild(blueLabel);

    let priorityContainer = document.createElement("div");
    form.appendChild(priorityContainer);
    let priorityTitle = document.createElement("p")
    priorityTitle.innerText = "Priority"
    priorityContainer.appendChild(priorityTitle);
    let no = document.createElement("input")
    no.type = "radio"
    no.name = "priority"
    no.value = "no"
    no.checked = true;
    priorityContainer.appendChild(no);
    let noLabel = document.createElement("label");
    noLabel.setAttribute("for", "no");
    noLabel.textContent = "no"
    priorityContainer.appendChild(noLabel);
    let now = document.createElement("input")
    now.type = "radio"
    now.name = "priority"
    now.value = "now"
    priorityContainer.appendChild(now);
    let nowLabel = document.createElement("label");
    nowLabel.setAttribute("for", "now");
    nowLabel.textContent = "now"
    priorityContainer.appendChild(nowLabel);
    let soon = document.createElement("input")
    soon.type = "radio"
    soon.name = "priority"
    soon.value = "soon"
    priorityContainer.appendChild(soon);
    let soonLabel = document.createElement("label");
    soonLabel.setAttribute("for", "soon");
    soonLabel.textContent = "soon"
    priorityContainer.appendChild(soonLabel);


    let subquestBTTN = document.createElement("input");
    subquestBTTN.type = "button"
    subquestBTTN.onclick = subquest;
    subquestBTTN.value = "Add Subquest"
    form.appendChild(subquestBTTN);

    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Submit";
    form.appendChild(submit);

}

module.exports = form;