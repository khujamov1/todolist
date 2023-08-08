var elForm = document.querySelector(".main-form");
var elInput = elForm.querySelector(".main-input");
var elList = document.querySelector(".main-list");

var works = [];

function mainResult() {
    for(var item of works) {
    var elNewItem = document.createElement("li");
    elList.appendChild(elNewItem);
    elNewItem.textContent = item;   
}
}

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    elList.innerHTML = "";


    var elInputVal = capitalCase(elInput.value);
    works.push(`${works.length+1}. ${elInputVal}`);
    elInput.value = '';
    mainResult();
})


function capitalCase(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}   