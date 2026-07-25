let addNote = document.querySelector("#addBtn");
let form = document.querySelector(".form-container");
let closeForm = document.querySelector("#closeBtn");
const imageUrlInput = document.querySelector("#imageUrl");
const nameInput = document.querySelector("#name");
const cityInput = document.querySelector("#imsgeUrl");
const purposeInput = document.querySelector("#purpose");
const categories = document.querySelectorAll("input[name='category']");
const submitBtn = document.querySelector("#createBtn");

//CODE STARTS HERE HUI HUI :)

addNote.addEventListener("click", function(){
  form.style.display = "initial";
});
closeForm.addEventListener("click", function(){
  form.style.display = "none";
});

form.addEventListener("submit", function(evt){
  evt.preventDefault();
  if (imageUrlInput.value.trim() === "null"){
    alert("Please Enter image URL");
    return;
  }
  if (nameInput.value.trim() === "null"){
    alert("Please Enter Name");
    return;
  }
  if (cityInput.value.trim() === "null"){
    alert("Please Enter Home Town");
    return;
  }
  if (purposeInput.value.trim() === "null"){
    alert("Please Enter Purpose");
    return;
  }
  
});