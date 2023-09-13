import { useState } from "react";
import * as notesServices from '../utilities/notes-service';
import { useNavigate } from 'react-router-dom';

export default function NoteForm ({notes, setNotes, uploadImage, setImage, categories, times, priorities}) {
    const [newNote, setNewNote] = useState({
        name: '',
        category: 'CRC',
        time: '1',
        priority: 'Medium',
        date: '11/09/2023',
        image: ''
    });
    const navigate = useNavigate();

    async function addNote(note) {
        const newNote = await notesServices.createNote(note);
        setNotes([...notes, newNote]);
    }

    const _handleChange = (e) => {
        setNewNote({
            ...newNote,
            [e.target.name]: e.target.value,
        });
    }
    
    async function _handleSubmit(e) {
        e.preventDefault();
        const data = await uploadImage();
        newNote.image = data.url;
        addNote(newNote);
        setNewNote({name: '', category: '', time: '', priority: '', date: '', image: ''});
        navigate('/notes')
    }

    return (
        <div>
            <h1>Add Note</h1>
            <form onSubmit={ _handleSubmit }>
                <input type="text" name="name" value={newNote.name}  onChange={_handleChange} required />
                <select name="category" value={newNote.category} onChange={_handleChange }>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <select name="time" value={newNote.time} onChange={_handleChange }>
                    {times.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}
                </select>
                <select name="priority" value={newNote.priority} onChange={_handleChange }>
                    {priorities.map((priority, index) => (
                        <option key={index} value={priority}>{priority}</option>
                    ))}
                </select>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button>Add note</button>
            </form>
        </div>
    );
}