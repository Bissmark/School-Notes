import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import AuthPage from './components/AuthPage';
import NavBar from './components/NavBar';
import NotesPage from './components/NotesPage';
import NotesDetail from './components/NotesDetail';
import './App.css';
import EditForm from './components/EditForm';

function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  return (
    <div className="container">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes" element={<NotesPage setNotes={setNotes} notes={notes} />} />
            <Route path="/notes/:id" element={<NotesDetail notes={notes} setNotes={setNotes} />} />
            <Route path="/notes/:id/edit" element={<EditForm notes={notes} />} />
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
