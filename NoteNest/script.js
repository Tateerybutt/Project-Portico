function addNote() {
    const noteText = document.getElementById('note-text').value.trim();
    if (noteText === "") {
        alert("Please write something for your note.");
        return;
    }

    const notesList = document.getElementById('notes-list');
    const noteItem = document.createElement('li');
    noteItem.className = 'note';
    noteItem.innerHTML = `
        ${noteText}
        <button class="delete" onclick="deleteNote(this, '${noteText}')">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    notesList.appendChild(noteItem);
    saveNoteToStorage(noteText);
    document.getElementById('note-text').value = "";  // Clear the textarea
}

function deleteNote(button, noteContent) {
    const noteItem = button.parentElement;
    noteItem.remove();
    removeNoteFromStorage(noteContent);
}

function saveNoteToStorage(note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(noteText => {
        const notesList = document.getElementById('notes-list');
        const noteItem = document.createElement('li');
        noteItem.className = 'note';
        noteItem.innerHTML = `
            ${noteText}
            <button class="delete" onclick="deleteNote(this, '${noteText}')">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        notesList.appendChild(noteItem);
    });
}

function removeNoteFromStorage(note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = notes.filter(storedNote => storedNote.trim() !== note.trim());
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
}

// Load notes on page load
document.addEventListener('DOMContentLoaded', loadNotes);
