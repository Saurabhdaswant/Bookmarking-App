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
// input.addEventListener("focusout", fallback);

//======================================================================

const bookmarkList = document.querySelector(".bookmarkList");
const bookmarkForm = document.querySelector(".form");
const bookmarkFormInput = bookmarkForm.querySelector("input[type=text]");
const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
const apiUrl = "https://opengraph.io/api/1.0/site";
const appId = "58858c7bcf07b61e64257391";

fillbookmarksList(bookmarks);

function createBookmark(e) {
  e.preventDefault();

  const url = encodeURIComponent(bookmarkFormInput.value);

  //add a new bookmark (item === bookmark) to the bookmarks (array)
  fetch(`${apiUrl}/${url}?app_id=${appId}`)
    .then((response) => response.json())
    .then((data) => {
      const bookmark = {
        title: data.hybridGraph.title,
        image: data.hybridGraph.image,
        link: data.hybridGraph.url,
      };

      bookmarks.push(bookmark);
      fillbookmarksList(bookmarks);
      storeBookmarks(bookmarks);
      bookmarkForm.reset();
    });

  // console.table(bookmarks);
  //save that bookmarks list to  the local storage

  // const userInput = bookmarkFormInput.value;
  // const bookmark = document.createElement("a");
  // the bookmark === a tag  which will born after submit
  // bookmark.className = "mainContent";
  // bookmark.textContent = userInput;
  // bookmark.href = "#";
  // bookmark.target = "_blank";
  // bookmarkList.appendChild(bookmark);
}

function fillbookmarksList(bookmarks = []) {
  const bookmarksHtml = bookmarks
    .map((bookmark, i) => {
      return `
    <a href = "${bookmark.link}" class="mainContent" data-id=${i}>
      
      <div class="img" style="background-image:url(${bookmark.image})"></div>
      <span class="title">${bookmark.title}</span>
      <div class="x">x</div>
    </a> 
    
    `;
    })
    .join("");
  bookmarkList.innerHTML = bookmarksHtml;

  // localStorage.clear();

  // let bookmarksHtml = "";
  // for (let i = 0; i < bookmarks.length; i++) {
  //   bookmarksHtml += `
  //   <a href = "#" class = "mainContent">
  //   ${bookmarks[i].title}
  //   </a>
  //   `;
  // }
  // console.log(bookmarksHtml);
}

function removeBookmark(e) {
  console.log(e);

  if (!e.target.matches(".x")) return;

  console.log("fuck");

  //find the index
  //remove from the bookmarklist using splice
  //flill the list
  //store back the localstrorage
  const index = e.target.parentNode.dataset.id;
  bookmarks.splice(index, 1);
  fillbookmarksList(bookmarks);
  storeBookmarks(bookmarks);
}

function storeBookmarks(bookmarks = []) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

bookmarkForm.addEventListener("submit", createBookmark);
bookmarkForm.addEventListener("submit", fallback);
bookmarkList.addEventListener("click", removeBookmark);

// localStorage.clear();
