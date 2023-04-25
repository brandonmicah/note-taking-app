"use strict";

// Easy dom access variables
const textArea = document.getElementById("textArea");
const addNoteBtn = document.getElementById("addNoteBtn");
const deleteBtn = document.getElementById("deleteBtn");
const noteGrid = document.getElementById("noteGrid");
const gridItem1 = document.getElementById("gridItem1");

let storageArr = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

addNoteBtn.addEventListener("click", function () {
  if (textArea.value === "") {
    noTextAlert();
  } else {
    const note = textArea;
    createNote(note);
  }
});

window.addEventListener("keydown", function (e) {
  if (textArea.value === "" && e.key === "Enter") {
    noTextAlert();
  } else if (e.key === "Enter") {
    const note = textArea;
    createNote(note);
  }
});

function createNote(note) {
  // Store item in storageArr
  storageArr.push(note.value);
  updateLocalStorage();

  // Reset the cursor
  textArea.focus();
  textArea.setSelectionRange(0, 0);

  // refresh page
  location.reload();

  // Clear the text area
  textArea.value = "";
}

function displayNotes() {
  let notes = "";
  for (let i = 0; i < storageArr.length; i++) {
    notes += `
                <div class="grid-item-1 note" id="grid-item-1">
                    <p class="note-text cat">
                    ${storageArr[i]}
                    </p>
                    <div class="delete-btn" id="deleteBtn">
                    X
                    </div>
                </div>
  `;
  }
  noteGrid.insertAdjacentHTML("afterbegin", notes);
  activateDeleteListener();
}

function deleteItem(i) {
  storageArr.splice(i, 1);
  updateLocalStorage();
  // location.reload()
}

function activateDeleteListener() {
  let deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((db, i) => {
    db.addEventListener("click", function () {
      deleteItem(i);
    });
  });
}

document.body.addEventListener("click", function (e) {
  if (e.target.id === "deleteBtn") {
    e.target.closest(".note").remove();
  }
});

function noTextAlert() {
  alert("Please write something in the text area");
}

function updateLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(storageArr));
}

displayNotes();
console.log(storageArr);

// Create an object for each note.
// const note = `
//   <div class="grid-item-1 note" id="grid-item-1">
//       <p class="note-text">
//       ${textArea.value}
//       </p>
//       <div class="delete-btn" id="deleteBtn">
//       X
//       </div>
//   </div>
// `;
// noteGrid.insertAdjacentHTML("afterbegin", note);
