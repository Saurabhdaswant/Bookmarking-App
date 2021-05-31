const showFloater = document.querySelector(".show-floater");
const floaterTop = document.querySelector(".floater-top");
const btn = document.querySelector(".btn");
const input = document.querySelector("input[type=text]");
const floater = document.querySelector(".floater");
const body = document.body;

function callback() {
  body.classList.add("show-floater");
}

input.addEventListener("focusin", callback);
input.addEventListener("focusout", callback);
