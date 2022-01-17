//depentant on id and class names

function inputCollect(form) {
   form.preventDefault();
   
   let title = document.getElementById("title")
   console.log(title.id + ": " + title.value);

   let dateInput = document.getElementById("dateInput")
   console.log(dateInput.id + ": " + dateInput.value);

   let color = document.querySelectorAll('.colorRadio')
   color.forEach((e) => {
      if (e.checked == true) {
         console.log(e.name + ": " + e.value);
      }
   })

   let priority = document.querySelectorAll('.priorityRadio')
   priority.forEach((e) => {
      if (e.checked == true) {
         console.log(e.name + ": " + e.value);
      }
   })

   let sudquests = document.querySelectorAll('.subquests')
   sudquests.forEach((e) => {
         console.log(e.name + ": " + e.value);

   })


}

module.exports = inputCollect;