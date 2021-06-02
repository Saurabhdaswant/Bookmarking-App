const addButtton = document.querySelector(".btn");
const input = document.querySelector("input[type=text]");
const body = document.body;

function callback() {
  body.classList.add("show-floater");
}

function fallback() {
  body.classList.remove("show-floater");
}

input.addEventListener("focusin", callback);
input.addEventListener("focusout", fallback);

//======================================================================

const bookmarkList = document.querySelector(".bookmarkList");
const form = document.querySelector(".form");
const formInput = form.querySelector("input[type=text]");
const bookmarks = [];

function createBookmark(e) {
  e.preventDefault();
  const takeValue = formInput.value;
  const bookmarkLink = document.createElement("a");
  bookmarkLink.className = "mainContent";
  bookmarkLink.textContent = takeValue;
  bookmarkLink.href = "#";
  bookmarkLink.target = "_blank";
  bookmarkList.appendChild(bookmarkLink);

  form.reset();
}

form.addEventListener("submit", createBookmark);
form.addEventListener("submit", fallback);
