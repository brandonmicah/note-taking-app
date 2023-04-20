"use strict";

// Easy dom access variables
const textArea = document.getElementById("textArea");
const addNoteBtn = document.getElementById("addNoteBtn");
const deleteBtn = document.getElementById("deleteBtn");
const noteGrid = document.getElementById("noteGrid");
const gridItem1 = document.getElementById("gridItem1");
const gridItem2 = document.getElementById("gridItem2");
const gridItem3 = document.getElementById("gridItem3");
const gridItem4 = document.getElementById("gridItem4");
const gridItem5 = document.getElementById("gridItem5");
const gridItem6 = document.getElementById("gridItem6");
const gridItem7 = document.getElementById("gridItem7");
const gridItem8 = document.getElementById("gridItem8");

// Functions
function addNote() {
  // Create Elements
  const noteText = document.createElement("p");
  const newDiv = document.createElement("div");
  const deleteDiv = document.createElement("div");
  //   Add classes to elements
  deleteDiv.classList.add("delete-btn");
  newDiv.classList.add("note");
  noteText.classList.add("note-text");
  //   Add elements as element children
  newDiv.appendChild(deleteDiv);
  noteGrid.appendChild(newDiv);
  newDiv.appendChild(noteText);
  //   Change html within new elements
  deleteDiv.innerHTML = "X";
  noteText.innerHTML = textArea.value;
  //   Clear textarea after action
  textArea.value = "";
  return newDiv;
}

function removeNote() {
  newDiv.remove();
}

function noTextAlert() {
  alert("Please write something in the text area");
}
// Code

addNoteBtn.addEventListener("click", function () {
  if (textArea.value === "") {
    noTextAlert();
  } else {
    addNote();
  }
});

deleteBtn.addEventListener("click", function () {
  removeNote();
});

window.addEventListener("keydown", function (e) {
  if (textArea.value === "") {
    noTextAlert();
  } else if (e.key === "Enter") {
    addNote();
  }
});
