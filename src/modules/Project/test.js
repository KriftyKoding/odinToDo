const { domElementCreate } = require("./domElementCreate");

function test () {
    let content = document.getElementById("nav");

    let questList = document.createElement("div");
    questList.id = "questlist"
    questList.innerText = "boobs"
    content.appendChild(questList);

    let testElement = {
        elementType : "p",
        class: "testClass",
        innerText : "tester",
        parentElement : content
    }
    
    domElementCreate(testElement);

    
    

}

module.exports = test;