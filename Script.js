let addNote = document.querySelector("#addBtn");
let form = document.querySelector(".form-container");
let closeForm = document.querySelector("#closeBtn");
addNote.addEventListener("click", function(){
  form.style.display = "initial";
});
closeForm.addEventListener("click", function(){
  form.style.display = "none";
});