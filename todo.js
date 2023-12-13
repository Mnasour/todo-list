const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container"); // Fix the ID here

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7" ;
        li.appendChild(span)
    }
    inputBox.value = " ";
    savedata();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){

        e.target.classList.toggle ("check");
        savedata();
    }
    
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML );
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();