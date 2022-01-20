const { domElementCreate } = require("./domElementCreate");

function Quest() {
   
    class Quest {
        constructor(title, dueDate, color, priority, subquest, category, complete = false) {
            this.title = title;
            this.dueDate = dueDate;
            this.color = color;
            this.priority = priority;
            this.subquest = subquest;
            this.category = category;
            this.complete = complete;
        }
    }

    let questOne = new Quest();

    let example1 = new Quest("blah", "2022-01-05", "blue", "no", ["html", "javascript", "css"]);
    let example2 = new Quest("coding", "2022-01-05", "blue", "no", [example1, example1]);
    // let example2 = new Quest(coding, "2022-01-05", blue, no, ["html", "javascript", "css"]);
     console.log(example1);
     console.log(example2);
     console.log(questOne);

     


    let content = document.getElementById("content");

    let questList = {
        elementType : "div",
        id : "questList",
        parentElement : content
    }
    domElementCreate(questList);
    questList = document.getElementById("questList")
////////////////////////////
 // Display examples
 //////////////////////////////
    titleDOM(example2, "title");

    example2.subquest.forEach(element => {  
       titleDOM (element, "subquest")
    });

    // creates Checkbox, BR around each ToDO
    function titleDOM (element, className) {
        let checkbox = {
            elementType : "input",
            type : "checkbox",
            classList : `checkbox ${className}`,
            parentElement : questList
        }
        domElementCreate(checkbox);

        let title = {
            elementType : "p",
            // classList : className,
            style : "text-transform:capitalize;",
            innerText : element.title,
            parentElement : questList
        }
        domElementCreate(title);
     
        let br = {
            elementType : "br",
            parentElement : questList
        }
        domElementCreate(br);
    }
    

}

module.exports = Quest;