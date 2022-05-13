var ul = document.getElementsByTagName("ul")[0];
var myList = document.getElementsByTagName("li");
var myListSpan = document.getElementsByTagName("span");

function checked() {
    var classLi = this.getAttribute("class");
    if (classLi === "checked") {
        this.setAttribute("class", "unchecked");
    }
    else {
        this.setAttribute("class", "checked");
    }
}
function deleteToDo() {
    ul.removeChild(this.parentElement);
}

function addToDo() {
    var todo = document.getElementById("todo").value;
    if (todo === "") {
        alert("Vous devez écrire quelque chose");
    }
    else {
        document.getElementById("todo").value = "";
        var li = document.createElement("li");
        li.innerHTML = todo;
        li.addEventListener("click", checked);
        var span = document.createElement("span");
        span.innerHTML = "x";
        span.addEventListener("click", deleteToDo);
        li.appendChild(span);
        ul.appendChild(li);
    }
}

for (var i = 0; i < myList.length; i++) {
    myListSpan[i].addEventListener("click", deleteToDo);
    myList[i].addEventListener("click", checked);
}
