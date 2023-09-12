import { useParams, useNavigate, Link } from "react-router-dom"
import * as notesServices from '../utilities/notes-service';

const NotesDetail = ({ notes, setNotes }) => {
    const { id } = useParams();
    const note = notes.find((n) => n._id === id);
    const navigate = useNavigate();

    async function deleteNote(id) {
        await notesServices.deleteNote(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
        navigate('/notes');
    }

    return (
        <div key={note._id} className='note'>
            <button className='delete-button' onClick={ () => deleteNote(note._id) }>&times;</button>
            
            <ul>
                <li>{ note.name }</li>
                <li>{ note.category }</li>
                <li>{ note.time }</li>
                <li>{ note.priority }</li>
                <li>{ new Date(note.createdAt).toLocaleString() }:</li>
                <img src={note.image} alt="" />
            </ul>
            <Link to={`edit`}>Edit</Link>
        </div>
    )
}

export default NotesDetail