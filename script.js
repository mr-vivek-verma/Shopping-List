// var input = document.getElementById("userinput");
// var button = document.getElementById("enter");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function () {
//     if (input.value.length > 0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })

// input.addEventListener("keypress", function (event) {
//     if (input.value.length > 0 && event.keyCode === 13) {
//         // we can use like event.which===13 or event.code===13
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })


// the above code is not an "optimal code" or we can say it is not a good way for developer,so we can do it like another way i.e shown below...
var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        // we can use like event.which===13 or event.code==="Enter"
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);