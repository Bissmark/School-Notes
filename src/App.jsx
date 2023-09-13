import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import AuthPage from './components/AuthPage';
import NavBar from './components/NavBar';
import NotesPage from './components/NotesPage';
import NotesDetail from './components/NotesDetail';
import NoteForm from './components/NotesForm';
import './App.css';
import EditForm from './components/EditForm';

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

function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);
  const [image, setImage] = useState('');

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

  return (
    <div className="container">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes" element={<NotesPage setNotes={setNotes} notes={notes} />} />
            <Route path="/notes/new" element={<NoteForm uploadImage={uploadImage} notes={notes} setNotes={setNotes} image={image} setImage={setImage} categories={categories} times={times} priorities={priorities} />} />
            <Route path="/notes/:id" element={<NotesDetail notes={notes} setNotes={setNotes} />} />
            <Route path="/notes/:id/edit" element={<EditForm uploadImage={uploadImage} notes={notes} setImage={setImage} categories={categories} times={times} priorities={priorities} />} />
            <Route path="*" element={<Navigate to="/notes" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;
