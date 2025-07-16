const BoxInput = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (BoxInput.value.trim() === '') {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = BoxInput.value;
    listContainer.appendChild(li);

    // Créer le bouton de suppression
    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; 
     //span.classList.add("close"); // facultatif pour le style CSS
    li.appendChild(span);

    BoxInput.value = '';
  }
   saveData()
}
//function(e) : fonction à exécuter à chaque clic, avec e qui représente l'événement de clic (un objet contenant plein d'infos, comme où on a cliqué).

//false : indique que l’écouteur utilise la phase de bouillonnement (bubbling) — c'est le comportement par défaut (tu peux le supprimer si tu veux).
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
         saveData();
    }
    
} , false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showtask()