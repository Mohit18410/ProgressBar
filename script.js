"use strict";

const progressBar = document.querySelector(".progress-bar");
const step = document.querySelectorAll(".step");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let activeNum = 1;

next.addEventListener("click", () => {
  activeNum++;

  if (activeNum > step.length) {
    activeNum = step.length;
  }

  update();
});

prev.addEventListener("click", () => {
  activeNum--;

  if (activeNum < 1) {
    activeNum = 1;
  }

  update();
});

function update() {
  step.forEach((stepNum, index) => {
    if (index < activeNum) {
      stepNum.classList.add("active");
    } else {
      stepNum.classList.remove("active");
    }
  });

  progressBar.style.width = ((activeNum - 1) / (step.length - 1)) * 100 + "%";

  if (activeNum === 1) {
    prev.disabled = true;
  } else if (activeNum === step.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
