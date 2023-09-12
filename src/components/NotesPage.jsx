import { useState, useEffect } from 'react';

import * as notesServices from '../utilities/notes-service';

import NotesList from '../components/NotesList';
import NoteForm from '../components/NotesForm';
import './NotesPage.css';

export default function NotesPage({ notes, setNotes }) {
    const [image, setImage] = useState('')

    // const uploadImage = () => {
	// 	const data = new FormData()
	// 	data.append("file", image)
	// 	data.append("upload_preset", "react-cloudinary")
	// 	data.append("cloud_name", "bissmark")
	// 	fetch("https://api.cloudinary.com/v1_1/bissmark/image/upload",{
	// 		method:"post",
	// 		body: data
	// 	}).then(res => res.json())
	// 	.then(data => {
	// 		setUrl(data.url)
    //         console.log(data.url)
	// 	}).catch(err => console.log(err))
	// }

    async function addNote(note) {
        const newNote = await notesServices.createNote(note);
        console.log(newNote);
        setNotes([...notes, newNote]);
    }

    useEffect(() => {
        notesServices.getNotes().then((notes) => {
            setNotes(notes);
        });
    }, []);

    return (
        <>
            <h1>
                NotesPage
            </h1>
            <div>
                <NoteForm addNote={ addNote } setImage={setImage} image={image} />
            </div>
            <div className='grid-container'>
                <div className='grid-item-1'>
                    <div className='category' style={{border: "1px solid purple"}}>
                        <h1 style={{color: "purple"}}>CRC</h1>
                        <NotesList notes={notes} />
                    </div>
                    <div className='category' style={{border: "1px solid green"}}>
                        <h1 style={{color: "green"}}>Data</h1>
                        <NotesList notes={notes} />
                    </div>
                    <div className='category' style={{border: "1px solid orange"}}>
                        <h1 style={{color: "orange"}}>Conf.</h1>
                        <NotesList notes={notes} />
                    </div>
                    <div className='category' style={{border: "1px solid fuchsia"}}>
                        <h1 style={{color: "fuchsia"}}>PL</h1>
                        <NotesList notes={notes} />
                    </div>
                    <div className='category' style={{border: "1px solid cyan"}}>
                        <h1 style={{color: "cyan"}}>APCI</h1>
                        <NotesList notes={notes} />
                    </div>
                    <div className='category' style={{border: "1px solid yellow"}}>
                        <h1 style={{color: "yellow"}}>Other</h1>
                        <NotesList notes={notes} />
                    </div>
                    
                </div>
                <div className='grid-item-2'>
                    <div className='category' style={{border: "1px solid purple"}}><h1 style={{color: "purple"}}>CRC</h1></div>
                    <div className='category' style={{border: "1px solid green"}}><h1 style={{color: "green"}}>Data</h1></div>
                    <div className='category' style={{border: "1px solid orange"}}><h1 style={{color: "orange"}}>Conf.</h1></div>
                    <div className='category' style={{border: "1px solid fuchsia"}}><h1 style={{color: "fuchsia"}}>PL</h1></div>
                    <div className='category' style={{border: "1px solid cyan"}}><h1 style={{color: "cyan"}}>APCI</h1></div>
                    <div className='category' style={{border: "1px solid yellow"}}><h1 style={{color: "yellow"}}>Other</h1></div>
                    {/* <NotesList notes={notes} deleteNote={ deleteNote } /> */}
                </div>
                <div className='grid-item-3'>
                    <div className='category' style={{border: "1px solid purple"}}><h1 style={{color: "purple"}}>CRC</h1></div>
                    <div className='category' style={{border: "1px solid green"}}><h1 style={{color: "green"}}>Data</h1></div>
                    <div className='category' style={{border: "1px solid orange"}}><h1 style={{color: "orange"}}>Conf.</h1></div>
                    <div className='category' style={{border: "1px solid fuchsia"}}><h1 style={{color: "fuchsia"}}>PL</h1></div>
                    <div className='category' style={{border: "1px solid cyan"}}><h1 style={{color: "cyan"}}>APCI</h1></div>
                    <div className='category' style={{border: "1px solid yellow"}}><h1 style={{color: "yellow"}}>Other</h1></div>
                    {/* <NotesList notes={notes} deleteNote={ deleteNote } /> */}
                </div>
                <div className='grid-item-4'>
                    <div className='category' style={{border: "1px solid purple"}}><h1 style={{color: "purple"}}>CRC</h1></div>
                    <div className='category' style={{border: "1px solid green"}}><h1 style={{color: "green"}}>Data</h1></div>
                    <div className='category' style={{border: "1px solid orange"}}><h1 style={{color: "orange"}}>Conf.</h1></div>
                    <div className='category' style={{border: "1px solid fuchsia"}}><h1 style={{color: "fuchsia"}}>PL</h1></div>
                    <div className='category' style={{border: "1px solid cyan"}}><h1 style={{color: "cyan"}}>APCI</h1></div>
                    <div className='category' style={{border: "1px solid yellow"}}><h1 style={{color: "yellow"}}>Other</h1></div>
                    {/* <NotesList notes={notes} deleteNote={ deleteNote } /> */}
                </div>
            </div>
        </>
    );
}