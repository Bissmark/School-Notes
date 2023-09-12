import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export async function createNote(noteText) {
    return sendRequest(BASE_URL, 'POST', noteText);
}

export async function getNotes () {
    return sendRequest(BASE_URL);
}

export async function getNote(id) {
    return sendRequest(`${ BASE_URL }/${ id }`);
}


export async function deleteNote(id) {
    console.log('delete')
    return sendRequest(`${ BASE_URL }/${ id }`, 'DELETE');
}

export async function updateNote(note) {
    console.log(`${ BASE_URL }/${ note._id }`)
    return sendRequest(`${ BASE_URL }/${ note._id }`, 'PUT', note);
}