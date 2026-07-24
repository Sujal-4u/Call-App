let closeForm = document.querySelector("#closeBtn");
let create = document.querySelector("#creatBtn");
let form = document.querySelector(".form-container");



closeForm.addEventListener("click", function(){
  form.style.display = "none";
});