let addNote = document.querySelector("#addBtn");
let form = document.querySelector(".form-container");
let closeForm = document.querySelector("#closeBtn");
const imageUrlInput = document.querySelector("#imageUrl");
const nameInput = document.querySelector("#name");
const cityInput = document.querySelector("#city");
const purposeInput = document.querySelector("#purpose");
const categories = document.querySelectorAll("input[name='category']");
const submitBtn = document.querySelector("#createBtn");

//CODE STARTS HERE HUI HUI :)
// checking local storage and saving data
function saveToLocalStorage(obj){
  if (localStorage.getItem("tasks" == null)){
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("task", JSON.stringify(oldTasks));
  } else {
    let oldTasks = localStorage.getItem("tasks");
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

addNote.addEventListener("click", function(){
  form.style.display = "initial";
});
closeForm.addEventListener("click", function(){
  form.style.display = "none";
});

form.addEventListener("submit", function(evt){
  evt.preventDefault();
  let selected = false;
  categories.forEach(function(dets){
    if (dets.checked){
      selected = dets.value;
    }
  });
  
  if (imageUrlInput.value.trim() === ""){
    alert("Please Enter image URL");
    return;
  }
  if (nameInput.value.trim() === ""){
    alert("Please Enter Name");
    return;
  }
  if (cityInput.value.trim() === ""){
    alert("Please Enter Home Town");
    return;
  }
  if (purposeInput.value.trim() === ""){
    alert("Please Enter Purpose");
    return;
  }
  if (!selected){
    alert("Please select a category");
    return;
  }
  saveToLocalStorage({
    imageUrlInput.value,
    nameInput.value,
    cityInput.value,
    purposeInput.value,
    selected,
   });
  form.reset();
});
