import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotesList from '../components/NotesList';
import * as notesServices from '../utilities/notes-service';
import './NotesPage.css';

export default function NotesPage({ notes, setNotes }) {

    useEffect(() => {
        notesServices.getNotes().then((notes) => {
            setNotes(notes);
        });
    }, [setNotes]);

    return (
        <>
            <h1>NotesPage</h1>
            <div>
                <Link to='/notes/new'>Add Note</Link>
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