"use strict";

// Easy dom access variables
const textArea = document.getElementById("textArea");
const addNoteBtn = document.getElementById("addNoteBtn");
const deleteBtn = document.getElementById("deleteBtn");
const noteGrid = document.getElementById("noteGrid");
const gridItem1 = document.getElementById("gridItem1");

function addNote() {
  let html = `
    <div class="grid-item-1 note" id="grid-item-1">
        <p class="note-text">
        ${textArea.value}
        </p>
        <div class="delete-btn" id="deleteBtn">
        X
        </div>
    </div>
  `;
  noteGrid.insertAdjacentHTML("afterbegin", html);
  textArea.value = "";

  textArea.focus();
  textArea.setSelectionRange(0, 0);
}

document.body.addEventListener("click", function (e) {
  if (e.target.id === "deleteBtn") e.target.closest(".note").remove();
});

addNoteBtn.addEventListener("click", function () {
  if (textArea.value === "") {
    noTextAlert();
  } else {
    addNote();
  }
});

window.addEventListener("keydown", function (e) {
  if (textArea.value === "" && e.key === "Enter") {
    noTextAlert();
  } else if (e.key === "Enter") {
    addNote();
  }
});
