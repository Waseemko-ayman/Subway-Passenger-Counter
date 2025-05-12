let counter = document.getElementById("counter");
let addPassenger = document.getElementById("addPassenger");
let resetCounter = document.getElementById("resetCounter");

let count = 0;

if (localStorage.getItem("counter")) {
  count = parseInt(localStorage.getItem("counter"));
  counter.innerHTML = count;
}

function updateCounter() {
  counter.textContent = count;
  localStorage.setItem("counter", count);
}

addPassenger.addEventListener("click", () => {
  count++;
  updateCounter();
})

resetCounter.addEventListener("click", () => {
  count = 0;
  updateCounter();
})