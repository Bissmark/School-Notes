import * as notesAPI from './notes-api';

export async function createNote(noteText) {
    const newNote = await notesAPI.createNote(noteText);
    return newNote;
}
export async function getNotes() {
    const notes = await notesAPI.getNotes();
    return notes;
}

export async function getNoteDetails(id) {
    const note = await notesAPI.getNote(id);
    return note;
}

export async function deleteNote(id) {
    await notesAPI.deleteNote(id);
    return true;
}

export async function updateNote(id) {
    const note = await notesAPI.updateNote(id);
    return note;
}