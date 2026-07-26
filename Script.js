let addNote = document.querySelector("#addBtn");
let callForm = document.querySelector("#callForm");
let form = document.querySelector("#formContainer");
let closeForm = document.querySelector("#closeBtn");
const imageUrlInput = document.querySelector("#imageUrl");
const nameInput = document.querySelector("#name");
const cityInput = document.querySelector("#city");
const purposeInput = document.querySelector("#purpose");
const categories = document.querySelectorAll("input[name='category']");
const stack = document.querySelector("#stack");

// checking local storage and saving data
function saveToLocalStorage(obj) {
  const stored = localStorage.getItem("tasks");
  const oldTasks = stored ? JSON.parse(stored) : [];
  oldTasks.push(obj);
  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}

addNote.addEventListener("click", function () {
  form.classList.remove("hidden");
});

closeForm.addEventListener("click", function () {
  form.classList.add("hidden");
});

// IMPORTANT: this must be on the actual <form> element (#callForm), not the
// wrapper div — "submit" only fires on <form> elements. Attaching it to the
// div meant this code never ran; clicking the submit button just triggered
// the browser's native form submission (a page reload) instead.
callForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let selected = false;
  categories.forEach(function (dets) {
    if (dets.checked) {
      selected = dets.value;
    }
  });

  if (imageUrlInput.value.trim() === "") {
    alert("Please Enter image URL");
    return;
  }
  if (nameInput.value.trim() === "") {
    alert("Please Enter Name");
    return;
  }
  if (cityInput.value.trim() === "") {
    alert("Please Enter Home Town");
    return;
  }
  if (purposeInput.value.trim() === "") {
    alert("Please Enter Purpose");
    return;
  }
  if (!selected) {
    alert("Please select a category");
    return;
  }

  let imageUrl = imageUrlInput.value;
  let name = nameInput.value;
  let city = cityInput.value;
  let purpose = purposeInput.value;

  saveToLocalStorage({ imageUrl, name, city, purpose, selected });

  callForm.reset();
  form.classList.add("hidden");
  showCards(); // re-render now that a new task was saved
});

function createCardElement(task) {
  const card = document.createElement("div");
  card.className = "cards";

  const img = document.createElement("img");
  img.src = task.imageUrl;
  img.alt = task.name;

  const h2 = document.createElement("h2");
  h2.className = "card-name";
  h2.textContent = task.name;

  const addressRow = document.createElement("div");
  addressRow.className = "info card-address";
  const addressLabel = document.createElement("p");
  addressLabel.textContent = "Home Town";
  const addressValue = document.createElement("p");
  addressValue.className = "card-city";
  addressValue.textContent = task.city;
  addressRow.append(addressLabel, addressValue);

  const purposeRow = document.createElement("div");
  purposeRow.className = "info card-purpose";
  const purposeLabel = document.createElement("p");
  purposeLabel.textContent = "Booking";
  const purposeValue = document.createElement("p");
  purposeValue.className = "card-purpose-text";
  purposeValue.textContent = task.purpose;
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
  return card;
}

function showCards() {
  console.log
  stack.innerHTML = ""; // clear before re-rendering, or every save duplicates the whole list

  const stored = localStorage.getItem("tasks");
  const allTasks = stored ? JSON.parse(stored) : [];

  allTasks.forEach(function (task) {
    stack.appendChild(createCardElement(task));
  });
}

showCards();
