import { useState } from "react";
import * as notesServices from '../utilities/notes-service';
import { useNavigate } from 'react-router-dom';

export default function NoteForm ({notes, setNotes, times, priorities, categories }) {
    const [newNote, setNewNote] = useState({
        name: '',
        time: '',
        category: '',
        priority: '',
        date: '',
        image: ''
    });
    const navigate = useNavigate();
    const [image, setImage] = useState('');

    async function addNote(note) {
        const newNote = await notesServices.createNote(note);
        setNotes([...notes, newNote]);
    }

    const uploadImage = (image) => {
		const data = new FormData()
		data.append("file", image)
		data.append("upload_preset", "react-cloudinary")
		data.append("cloud_name", "bissmark")
		return fetch("https://api.cloudinary.com/v1_1/bissmark/image/upload",{
			method: "post",
			body: data
		}).then(res => res.json())
        .catch(err => console.log(err))
	}

    const _handleChange = (e) => {
        setNewNote({...newNote, [e.target.name]: e.target.value});
    }

    const _handleImageChange = (e) => {
        setImage(e.target.files[0])
    }
    
    const _handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await uploadImage(image).then((data) => {
                console.log(data.url);
                newNote.image = data.url;
                console.log(newNote);
            });
            setImage('');
        } catch (error) {
            console.log(error);
        }
        addNote(newNote);
        navigate('/notes')
    }

    return (
        <div>
            <h1>Add Note</h1>
            <form onSubmit={ _handleSubmit }>
                <input type="text" name="name" value={newNote.name}  onChange={_handleChange} required />
                <select name="category" value={newNote.category} onChange={_handleChange }>
                    {categories.map((category, index) => (
                        <option key={index} value={category.name}>{category.name}</option>
                    ))}
                </select>
                <select name="time" value={newNote.time} onChange={_handleChange }>
                    {times.map((time, index) => (
                        <option key={index} value={time} defaultValue={time}>{time}</option>
                    ))}
                </select>
                <select name="priority" value={newNote.priority} onChange={_handleChange }>
                    {priorities.map((priority, index) => (
                        <option key={index} value={priority}>{priority}</option>
                    ))}
                </select>
                <input type="file" onChange={_handleImageChange} />
                <button>Add note</button>
            </form>
        </div>
    );
}