let counter = document.getElementById("counter");
let addPassenger = document.getElementById("addPassenger");
let reset = document.getElementById("reset");
let save = document.getElementById("save");
let previousEntries = document.getElementById("entries");

let count = 0;

if (localStorage.getItem("counter")) {
  count = parseInt(localStorage.getItem("counter"));
  counter.innerHTML = count;
}

if (localStorage.getItem("previousEntries")) {
  previousEntries.textContent = localStorage.getItem("previousEntries");
}

function updateCounter() {
  counter.textContent = count;
  localStorage.setItem("counter", count);
}

addPassenger.addEventListener("click", () => {
  count++;
  updateCounter();
})

save.addEventListener("click", () => {
  let countStr = count + " - ";
  previousEntries.textContent += countStr;
  localStorage.setItem("previousEntries", previousEntries.textContent);
  count = 0;
  updateCounter();
})

reset.addEventListener("click", () => {
  previousEntries.textContent = "";
  localStorage.setItem("previousEntries", previousEntries.textContent);
  count = 0;
  updateCounter();
})
