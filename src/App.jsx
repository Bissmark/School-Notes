import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import AuthPage from './components/AuthPage';
import NavBar from './components/NavBar';
import TasksPage from './components/TasksPage';
import TasksDetail from './components/TasksDetail';
import TaskForm from './components/TasksForm';
import './App.css';
import EditForm from './components/EditForm';
import CategoryForm from './components/CategoryForm';

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
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <div className="container">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/tasks" element={<TasksPage setTasks={setTasks} tasks={tasks} categories={categories} setCategories={setCategories} />} />
            <Route path="/tasks/new" element={<TaskForm tasks={tasks} setTasks={setTasks} times={times} priorities={priorities} categories={categories} />} />
            <Route path="/tasks/:id" element={<TasksDetail tasks={tasks} setTasks={setTasks} />} />
            <Route path="/tasks/:id/edit" element={<EditForm tasks={tasks} times={times} priorities={priorities} />} />
            <Route path="/categories/new" element={<CategoryForm categories={categories} setCategories={setCategories} />} />
            <Route path="*" element={<Navigate to="/tasks" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;
