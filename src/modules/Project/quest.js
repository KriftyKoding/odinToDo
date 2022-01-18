const { isObject } = require("lodash");

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
    let questList = document.createElement("div");
    questList.id = "questlist"
    content.appendChild(questList);

   
    let titleDisplay =document.createElement("p");
    titleDisplay.classList = "title"
    titleDOM (titleDisplay, example2) 

    
    example2.subquest.forEach(element => {  
        let subquestDisplay = document.createElement("p");
        subquestDisplay.classList = "subquest"
        titleDOM (subquestDisplay, element)
    });

    //creates Checkbox, BR, adds innerText and style to each title
    function titleDOM (variable, element) {
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList = "checkbox"
        questList.appendChild(checkbox)
       
        variable.style = "text-transform:capitalize;"
        variable.innerText = element.title;
        questList.appendChild(variable);

        let br = document.createElement("BR");
        questList.appendChild(br);
    }
    

}

module.exports = Quest;