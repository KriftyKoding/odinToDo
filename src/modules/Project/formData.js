//takes first form on page and console logs name(b) and value(b)
function formDataAuto(form) {
    form.preventDefault();

    var formData = new FormData(document.querySelector("form"));
    formData.forEach((a,b) => {
        console.log(b + " : " + a);
       
    })
}

module.exports = formDataAuto;