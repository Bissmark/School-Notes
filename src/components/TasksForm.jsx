import { useState } from "react";
import * as tasksServices from '../utilities/tasks-service';
import { useNavigate } from 'react-router-dom';

export default function TaskForm ({tasks, setTasks, times, priorities, categories }) {
    const [newTask, setNewTask] = useState({
        name: '',
        time: '',
        category: '',
        priority: '',
        date: '',
        image: ''
    });
    const navigate = useNavigate();
    const [image, setImage] = useState('');

    async function addTask(task) {
        const newtask = await tasksServices.createTask(task);
        setTasks([...tasks, newtask]);
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
        setNewTask({...newTask, [e.target.name]: e.target.value});
    }

    const _handleImageChange = (e) => {
        setImage(e.target.files[0])
    }
    
    const _handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (image) {
                const data = await uploadImage(image);
                newTask.image = data.url;
            } else {
                setImage('');
            }
            setImage('');
        } catch (error) {
            console.log(error);
        }
        addTask(newTask);
        navigate('/tasks')
    }

    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={ _handleSubmit }>
                <input type="text" name="name" value={newTask.name}  onChange={_handleChange} required />
                <select name="category" value={newTask.category} onChange={_handleChange }>
                    {categories.map((category, index) => (
                        <option key={index} value={category.name}>{category.name}</option>
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