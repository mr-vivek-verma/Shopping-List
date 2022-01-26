var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul")

button.addEventListener("click", function () {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})

input.addEventListener("keypress", function (event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        // we can use like event.which===13 or event.code===13
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})