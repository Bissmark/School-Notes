import { upload } from "@testing-library/user-event/dist/upload";
import { useEffect, useState } from "react";

const categories = [
    'CRC',
    'Data',
    'Conf.',
    'PL',
    'APCI',
    'Other'
];

const times = [
    '1',
    '2',
    '3',
]

const priorities = [
    'High',
    'Medium',
    'Low'
]

export default function NoteForm ({addNote, setImage, image }) {
    const [url, setUrl] = useState('')
    const [newNote, setNewNote] = useState({
        name: '',
        category: 'CRC',
        time: '1',
        priority: 'Medium',
        date: '11/09/2023',
        image: ''
    });

    const uploadImage = () => {
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
        setNewNote({
            ...newNote,
            [e.target.name]: e.target.value,
        });
    }
    
    async function _handleSubmit(e) {
        e.preventDefault();
        const data = await uploadImage(url);
        newNote.image = data.url;
        addNote(newNote);
        console.log(newNote)
        setNewNote({name: '', category: '', time: '', priority: '', date: '', image: ''});
    }

    return (
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
    );
}