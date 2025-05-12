let counter = document.getElementById("counter");
let addPassenger = document.getElementById("addPassenger");
let resetCounter = document.getElementById("resetCounter");

let count = 0;

if (localStorage.getItem("counter")) {
  count = parseInt(localStorage.getItem("counter"));
  counter.innerHTML = count;
}

addPassenger.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  localStorage.setItem("counter", count);
})

resetCounter.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  localStorage.setItem("counter", count);
})