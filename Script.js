let addNote = document.querySelector(".addBtn");
let callForm = document.querySelector("form");
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
  if (localStorage.getItem("tasks") == null){
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
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
  let imageUrl = imageUrlInput.value;
  let name = nameInput.value;
  let city = cityInput.value;
  let purpose = purposeInput.value;
  saveToLocalStorage({
    imageUrl,
    name,
    city,
    purpose,
    selected,
   });
   callForm.reset();
});

function showCards(){
  let allTasks = JSON.par se(localStorage.getItem("tasks"));
  allTasks.forEach(function(task){
    
  const card = document.createElement("div");
  card.className = "cards";

  const img = document.createElement("img");
  img.src = data.imageUrl;
  img.alt = data.name;

  const h2 = document.createElement("h2");
  h2.className = "card-name";
  h2.textContent = data.name;

  const addressRow = document.createElement("div");
  addressRow.className = "info card-address";
  const addressLabel = document.createElement("p");
  addressLabel.textContent = "Home Town";
  const addressValue = document.createElement("p");
  addressValue.className = "card-city";
  addressValue.textContent = data.city;
  addressRow.append(addressLabel, addressValue);

  const purposeRow = document.createElement("div");
  purposeRow.className = "info card-purpose";
  const purposeLabel = document.createElement("p");
  purposeLabel.textContent = "Booking";
  const purposeValue = document.createElement("p");
  purposeValue.className = "card-purpose-text";
  purposeValue.textContent = data.purpose;
  purposeRow.append(purposeLabel, purposeValue);

  const actions = document.createElement("div");
  actions.className = "action-btn";
  const callBtn = document.createElement("button");
  callBtn.className = "action call-btn";
  callBtn.textContent = "Call";
  const br = document.createElement("br");
  const msgBtn = document.createElement("button");
  msgBtn.className = "action msg-btn";
  msgBtn.textContent = "Message";
  actions.append(callBtn, br, msgBtn);

  card.append(img, h2, addressRow, purposeRow, actions);
  });
}
