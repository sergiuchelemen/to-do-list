const userInput = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("add-task");

showTasks();

button.addEventListener("click", function(){
    if(userInput.value === ''){
        alert("No task provided!");
    }else{
        const li = document.createElement("li");
        li.innerHTML = userInput.value;
        listContainer.appendChild(li);
        userInput.value = '';
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
})

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      const li = e.target;
      li.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  }, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
  listContainer.innerHTML = localStorage.getItem("data");
}

  


