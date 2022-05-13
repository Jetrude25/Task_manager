//Création des variables permettant de récupérer certains éléments
var ul = document.getElementsByTagName("ul")[0];
var myList = document.getElementsByTagName("li");
var myListSpan = document.getElementsByTagName("span");

//Création d'une fonction permettant de pouvoir cocher les éléments de la liste
function checked() {
    var classLi = this.getAttribute("class");
    if (classLi === "checked") {
        this.setAttribute("class", "unchecked");
    }
    else {
        this.setAttribute("class", "checked");
    }
}

//Création d'une fonction permettant d'éffacer les élements de la liste une fois qu'on click sur la croix
function deleteToDo() {
    ul.removeChild(this.parentElement);
}

//l'instruction donnée au bouton une fois que l'utilisateur aura à cliquer sur le boutton "Ajouter"
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

//Création de gestionnaire d'évenement 
for (var i = 0; i < myList.length; i++) {
    myListSpan[i].addEventListener("click", deleteToDo);
    myList[i].addEventListener("click", checked);
}
