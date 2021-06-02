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
const bookmarkForm = document.querySelector(".form");
const bookmarkFormInput = bookmarkForm.querySelector("input[type=text]");
const bookmarks = [];

function createBookmark(e) {
  e.preventDefault();

  //add a new bookmark (item === bookmark) to the bookmarks (array)
  const userInput = bookmarkFormInput.value;
  const bookmark = {
    title: userInput,
  };
  bookmarks.push(bookmark);
  fillbookmarksList(bookmarks);

  console.table(bookmarks);
  //save that bookmarks list to  the local storage

  // const userInput = bookmarkFormInput.value;
  // const bookmark = document.createElement("a");
  //the bookmark === a tag  which will born after submit
  // bookmark.className = "mainContent";
  // bookmark.textContent = userInput;
  // bookmark.href = "#";
  // bookmark.target = "_blank";
  // bookmarkList.appendChild(bookmark);

  bookmarkForm.reset();
}

function fillbookmarksList(bookmarks = []) {
  let bookmarksHtml = "";
  for (let i = 0; i < bookmarks.length; i++) {
    bookmarksHtml += `
    <a href = "#" class = "mainContent">
    ${bookmarks[i].title}
    </a> 
    `;
  }

  console.log(bookmarksHtml);
  bookmarkList.innerHTML = bookmarksHtml;
}

bookmarkForm.addEventListener("submit", createBookmark);
bookmarkForm.addEventListener("submit", fallback);
