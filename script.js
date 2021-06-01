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

const bookmark = document.querySelector(".bookmark");
const links = document.querySelector(".links");
const bookmarkForm = document.querySelector(".bookmark-form");

function createBookmark(e) {
  e.preventDefault();
  const takeValue = input.value;
  const bookmarkLink = document.createElement("a");
  bookmarkLink.className = "bookmark";
  bookmarkLink.textContent = takeValue;
  bookmarkLink.href = "#";
  bookmarkLink.target = "_blank";
  links.appendChild(bookmarkLink);

  bookmarkForm.reset();
}

bookmarkForm.addEventListener("submit", createBookmark);
bookmarkForm.addEventListener("submit", fallback);
