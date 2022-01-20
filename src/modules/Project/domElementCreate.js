function domElementCreate (obj) {
   
        let newElement = document.createElement(obj.elementType);
        if (obj.id != undefined) {
            newElement.id = obj.id;
        }
        if (obj.classList != undefined) {
            newElement.classList = obj.classList;
        }
        if (obj.innerText != undefined) {
            newElement.innerText = obj.innerText;
        }
        if (obj.type != undefined) {
            newElement.type = obj.type;
        }
        if (obj.style != undefined) {
            newElement.style = obj.style;
        }
        if (obj.name != undefined) {
            newElement.name = obj.name;
        }
        if (obj.placeholder != undefined) {
            newElement.placeholder = obj.placeholder;
        }
        if (obj.value != undefined) {
            newElement.value = obj.value;
        }
        if (obj.checked != undefined) {
            newElement.checked = obj.checked;
        }
        if ((obj.setAttribute != undefined)) {
            newElement.setAttribute((obj.setAttribute[0]), (obj.setAttribute[1])) 
        }
        if (obj.onclick != undefined) {
            newElement.onclick = obj.onclick;
        }
        obj.parentElement.appendChild(newElement)
        

}

function domRadioBTTNCreate (obj) {
    let bttn = {
      elementType : "input",
      type : "radio",
      name : obj.name,
      value: obj.value,
      checked: obj.checked,
      parentElement : obj.parentElement
    }
    domElementCreate(bttn)

    if (obj.label != undefined) {
      let label = {
        elementType : "label",
        setAttribute : obj.setAttribute,
        innerText :  obj.value,
        parentElement : obj.parentElement
      }
      domElementCreate(label)
    }
}


module.exports = {
    domRadioBTTNCreate,
    domElementCreate
}
