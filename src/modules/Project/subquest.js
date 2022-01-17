//creats a subquest
function subquest(e) {
    let subquests = document.createElement("input");
    subquests.className = "subquests"
    subquests.name = "subquests"
    subquests.type = "text"
    subquests.placeholder = "Subquest"
    e.path[1].appendChild(subquests);
}

module.exports = subquest;