const { domElementCreate } = require("./domElementCreate");
const {domRadioBTTNCreate } = require("./domElementCreate");
const formData = require("./formData");
const subquest = require("./subquest");

function form() {
  //Submit BTTN
  document.addEventListener('DOMContentLoaded', () => {
        document
          .getElementById('myForm')
          .addEventListener('submit', formData);
      });
  // Form
  let content = document.getElementById("content");
   
  let form = {
      elementType : "form",
      id : "myForm",
      parentElement : content
    }
    domElementCreate(form);
    form = document.getElementById("myForm");
    
    let titleInput = {
      elementType : "input",
      name : "title",
      type : "text",
      placeholder : "Title",
      parentElement : form
    }
    domElementCreate(titleInput);
    
    let dateInput = {
      elementType : "input",
      name : "dateInput",
      type : "date",
      parentElement : form
    }
    domElementCreate(dateInput);

    let colorContainer = {
      elementType : "div",
      id : "colorContainer",
      parentElement : form
    }
    domElementCreate(colorContainer);
    colorContainer = document.getElementById("colorContainer")
    let colorTitle = {
      elementType : "p",
      innerText : "Color",
      parentElement : colorContainer
    }
    domElementCreate(colorTitle);
    let radioBTTNColorNone = {
      name : "Color",
      value: "none",
      checked: true,
      parentElement : colorContainer,
      label : true,
      setAttribute : ["for", "none"],
    }
    domRadioBTTNCreate(radioBTTNColorNone);
    let radioBTTNColorRed = {
      name : "Color",
      value: "red",
      parentElement : colorContainer,
      label : true,
      setAttribute : ["for", "red"],
    }
    domRadioBTTNCreate(radioBTTNColorRed);
    let radioBTTNColorBlue = {
      name : "Color",
      value: "blue",
      parentElement : colorContainer,
      label : true,
      setAttribute : ["for", "blue"],
    }
    domRadioBTTNCreate(radioBTTNColorBlue);


    let priorityContainer = {
      elementType : "div",
      id : "priorityContainer",
      parentElement : form
    }
    domElementCreate(priorityContainer);
    priorityContainer = document.getElementById("priorityContainer")
    let priorityTitle = {
      elementType : "p",
      innerText : "Priority",
      parentElement : priorityContainer
    }
    domElementCreate(priorityTitle);
    let radioBTTNPriorityNone = {
      name : "Priority",
      value: "none",
      checked: true,
      parentElement : priorityContainer,
      label : true,
      setAttribute : ["for", "none"],
    }
    domRadioBTTNCreate(radioBTTNPriorityNone);
    let radioBTTNPriorityNow = {
      name : "Priority",
      value: "now",
      parentElement : priorityContainer,
      label : true,
      setAttribute : ["for", "now"],
    }
    domRadioBTTNCreate(radioBTTNPriorityNow);
    let radioBTTNPrioritySoon = {
      name : "Priority",
      value: "soon",
      parentElement : priorityContainer,
      label : true,
      setAttribute : ["for", "soon"],
    }
    domRadioBTTNCreate(radioBTTNPrioritySoon);

    let subquestBTTN = {
      elementType : "input",
      type : "button",
      onclick : subquest,
      value  : "Add Subquest",
      parentElement : form
    }
    domElementCreate(subquestBTTN);

    let submit = {
      elementType : "input",
      type : "submit",
      value  : "submit",
      parentElement : form
    }
    domElementCreate(submit);
}

module.exports = form;