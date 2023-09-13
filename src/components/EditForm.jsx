import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as notesServices from '../utilities/notes-service';

const EditForm = ({ notes, setImage, priorities, times, categories, uploadImage }) => {
    let { id } = useParams();
    const note = notes.find((n) => n._id === id);
    const [editedNote, setEditedNote] = useState(note);
    const navigate = useNavigate();

    async function updateNote(note) {
        const editedNote = await notesServices.updateNote(note);
        setEditedNote(editedNote);
    }

    function _handleChange(e) {
        setEditedNote({
            ...editedNote,
            [e.target.name]: e.target.value
        })
    }

    async function _handleSubmit(e) {
        e.preventDefault();
        const data = await uploadImage();
        editedNote.image = data.url;
        updateNote(editedNote);
        navigate(`/notes/${note._id}`);
    }
    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={ _handleSubmit }>
                <input type="text" name="name" value={editedNote.name}  onChange={_handleChange} required />
                <select name="category" value={editedNote.category} onChange={_handleChange }>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <select name="time" value={editedNote.time} onChange={_handleChange }>
                    {times.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}
                </select>
                <select name="priority" value={editedNote.priority} onChange={_handleChange }>
                    {priorities.map((priority, index) => (
                        <option key={index} value={priority}>{priority}</option>
                    ))}
                </select>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditForm;