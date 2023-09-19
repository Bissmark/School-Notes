import { useState } from "react";
import * as tasksServices from '../utilities/tasks-service';
import { useNavigate } from 'react-router-dom';

export default function TaskForm ({tasks, setTasks, times, priorities, categories, uploadImage }) {
    const [newTask, setNewTask] = useState({
        name: '',
        time: '',
        category: '',
        priority: '',
        date: '',
        image: ''
    });
    console.log(categories)

    const navigate = useNavigate();
    const [image, setImage] = useState('');

    async function addTask(task) {
        const newtask = await tasksServices.createTask(task);
        setTasks([...tasks, newtask]);
    }

    const _handleChange = (e) => {
        setNewTask({...newTask, [e.target.name]: e.target.value});
    }

    const _handleImageChange = (e) => {
        setImage(e.target.files[0])
    }
    
    const _handleSubmit = async (e) => {
        e.preventDefault();
        if (image) {
            const data = await uploadImage(image);
            newTask.image = data.url;
        } else {
            setImage('');
        }
        setImage('');
        addTask(newTask);
        navigate('/')
    }

    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={ _handleSubmit }>
                <input type="text" name="name" value={newTask.name}  onChange={_handleChange} required />
                <select name="category" value={newTask.category} onChange={_handleChange }>
                    {categories.map((category, index) => (
                        <option key={index} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <select name="time" value={newTask.time} onChange={_handleChange }>
                    {times.map((time, index) => (
                        <option key={index} value={time} defaultValue={time}>{time}</option>
                    ))}
                </select>
                <select name="priority" value={newTask.priority} onChange={_handleChange }>
                    {priorities.map((priority, index) => (
                        <option key={index} value={priority}>{priority}</option>
                    ))}
                </select>
                <input type="file" onChange={_handleImageChange} />
                <button>Add Task</button>
            </form>
        </div>
    );
}