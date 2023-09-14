import { useState } from 'react';
import './NotesList.css';
import { Link } from 'react-router-dom';

export default function NotesList ({notes, deleteNote}) {
    const [reverse, setReverse] = useState(false);

    if (notes.length === 0) {
        return <p>No notes yet!</p>
    }

    const notesList = notes.map(n => (
        <div key={n._id} className='note'>
            <ul>
                <Link to={n._id}><li>{ n.name }</li></Link>
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