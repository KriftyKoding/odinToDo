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

    



}

module.exports = Quest;