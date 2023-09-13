import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import * as notesServices from '../utilities/notes-service';

const NotesDetail = ({ notes, setNotes }) => {
    const [singleNote, setSingleNote] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        notesServices.getNoteDetails(id).then((note) => {
            setSingleNote(note);
        });
    }, );

    async function deleteNote(id) {
        await notesServices.deleteNote(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
        navigate('/notes');
    }

    return (
        <div key={singleNote._id} className='note'>
            <button className='delete-button' onClick={ () => deleteNote(singleNote._id) }>&times;</button>
            
            <ul>
                <li>{ singleNote.name }</li>
                <li>{ singleNote.category }</li>
                <li>{ singleNote.time }</li>
                <li>{ singleNote.priority }</li>
                <li>{ new Date(singleNote.createdAt).toLocaleString() }:</li>
                <img src={singleNote.image} alt="" />
            </ul>
            <Link to={'edit'}>Edit</Link>
        </div>
    )
}

export default NotesDetail