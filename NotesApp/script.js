// Load notes from localStorage when page loads
document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
  let noteInput = document.getElementById("noteInput");
  let noteText = noteInput.value.trim();

  if (noteText === "") return;


  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = "";
  displayNotes();
}
function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let notesList = document.getElementById("notesList");
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${note} <button onclick="deleteNote(${index})">X</button>`;
    notesList.appendChild(li);
  });
}
function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}


function loadNotes() {
  displayNotes();
}
