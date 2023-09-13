import { useEffect, useState } from 'react';
import './NotesList.css';
import { Link } from 'react-router-dom';
import * as notesServices from '../utilities/notes-service';
import NotesDetail from './NotesDetail';

export default function NotesList ({notes, deleteNote}) {
    const [reverse, setReverse] = useState(false);

    if (notes.length === 0) {
        return <p>No notes yet!</p>
    }

    const notesList = notes.map(n => (
        <div key={n._id} className='note'>
            {/* <button className='delete-button' onClick={ () => deleteNote(n._id) }>&times;</button> */}
            {/* <p>
                { new Date(n.createdAt).toLocaleString() }:
            </p> */}
            <ul>
                <Link to={n._id}><li>{ n.name }</li></Link>
                {/* <NotesDetail note={n} /> */}
            </ul>
        </div>
    ));
    
    return (
        <div>
            {/* <button onClick={ () => setReverse(!reverse) }>
                ▲ | ▼ 
            </button> */}
            {
                reverse ? notesList.reverse() : notesList
            }
        </div>
    )
}