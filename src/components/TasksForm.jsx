import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as tasksServices from '../utilities/tasks-service';
import * as categoriesServices from '../utilities/categories-service';

export default function TaskForm ({tasks, setTasks, times, priorities, categories, uploadImage, setCategories }) {
    const [newTask, setNewTask] = useState({
        name: '',
        time: '',
        priority: '',
        date: '',
        image: ''
    });
    const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0]._id);
    // console.log(categories)

    const navigate = useNavigate();
    const [image, setImage] = useState('');

    async function addTaskToCategory(categoryId, task) {
        console.log(categoryId, task)
        const newTask = await tasksServices.addTaskToCategory(categoryId, task);
        console.log('newTask: ' + newTask)
        const newCategoriesArray = categories.map((category) => {
            if (category.id === categoryId) {
                category.tasks.push(newTask);
            }
            return category;
        });
        setCategories(newCategoriesArray);
    }

    const _handleChange = (e) => {
        setNewTask((prevTask) => ({
            ...prevTask, 
            [e.target.name]: e.target.value
        }));
    }

    const _handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const _handleCategoryChange = (e) => {
        setSelectedCategoryId(e.target.value);
        console.log(selectedCategoryId)
        setNewTask({...newTask, [e.target.name]: e.target.value});
    }
    
    const _handleSubmit = async (e) => {
        e.preventDefault();
        if (image) {
            const data = await uploadImage(image);
            newTask.image = data.url;
        } else {
            setImage('');
        }
        try {
            addTaskToCategory(selectedCategoryId, newTask)
        } catch (error) {
            console.log(error);
        }
        setImage('');
        //categories[0].tasks.push(newTask);
        //console.log(categories.tasks)
        //addTask(newTask);
        // addCategory(newTask);
        navigate('/')
    }

    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={ _handleSubmit }>
                <input type="text" name="name" value={newTask.name}  onChange={_handleChange} required />
                <select name="category" value={selectedCategoryId} onChange={_handleCategoryChange }>
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