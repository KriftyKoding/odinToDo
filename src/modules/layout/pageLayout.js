const displayContent = require("./content.js");
const displayHeader = require("./header.js");
const displayNav = require("./nav.js");


function mainHTML() {
    const body = document.getElementsByTagName("BODY")[0]
    
    const header = document.createElement('header');
    header.id = "header";
    body.appendChild(header);
    displayHeader();
    
    const nav = document.createElement('nav');
    nav.id = "nav";
    body.appendChild(nav);
    displayNav();
    
    const content = document.createElement('main');
    content.id = "content";
    body.appendChild(content);
    displayContent();
}



module.exports = mainHTML;