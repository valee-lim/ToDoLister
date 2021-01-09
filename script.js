var btn = document.getElementById("enter");
var inp = document.getElementById("userInput");
var ul = document.getElementById("list");
var listLength = document.getElementsByClassName("listStyle");
var header = document.querySelector("p");

function getListLength(){
    console.log(listLength);
    return listLength.length;
}

function trimString(arg){
    var result = "", i = 0;
    while (arg[i] == ' '){
        i++;
    }
    for (; i < arg.length; i++){
        result += arg[i];
    }
    return result;
}

function validInput(){
    inp.value = trimString(inp.value);
    if (inp.value.length > 0){
        return true;
    }
    return false;
}

function createDeleteButton(){
    var delBtn = document.createElement("button");
    delBtn.classList.add('fas', 'fa-times', 'deleteBtn');
    delBtn.onclick = removeParent;
    return delBtn;

    function removeParent(evt){
        evt.target.parentNode.remove(evt);
        if (getListLength() === 0) {
            header.style.display = "flex";
        }
    }
}

function createList() {
    var li = document.createElement("li");
    li.classList.add('listStyle');
    li.onclick = strikeThrough;
    return li;

    function strikeThrough(){
        li.classList.toggle('strikeThrough');
    }
}

function addElementToList(){
    var li = createList();
    var delBtn = createDeleteButton();
    li.appendChild(document.createTextNode(inp.value));
    li.appendChild(delBtn);
    ul.appendChild(li);

    if (getListLength() > 0){
        header.style.display = "none";
    }
}

btn.addEventListener("click", function(){
    if (validInput()){
        addElementToList();
    }
    inp.value = "";
})

inp.addEventListener("keydown", function(evt){
    if (evt.key === "Enter"){
        if (validInput()){
            addElementToList();
        }
        inp.value = "";
    }
})
