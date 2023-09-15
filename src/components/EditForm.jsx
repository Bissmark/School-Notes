import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as tasksServices from '../utilities/tasks-service';

const EditForm = ({ tasks, setImage, priorities, times, categories, uploadImage }) => {
    let { id } = useParams();
    const task = tasks.find((n) => n._id === id);
    const [editedTask, setEditedTask] = useState(task);
    const navigate = useNavigate();

    async function updateTask(task) {
        const editedTask = await tasksServices.updateTask(task);
        setEditedTask(editedTask);
    }

    function _handleChange(e) {
        setEditedTask({
            ...editedTask,
            [e.target.name]: e.target.value
        })
    }

    async function _handleSubmit(e) {
        e.preventDefault();
        const data = await uploadImage();
        editedTask.image = data.url;
        updateTask(editedTask);
        navigate(`/tasks/${task._id}`);
    }
    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={ _handleSubmit }>
                <input type="text" name="name" value={editedTask.name}  onChange={_handleChange} required />
                <select name="category" value={editedTask.category} onChange={_handleChange }>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <select name="time" value={editedTask.time} onChange={_handleChange }>
                    {times.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}
                </select>
                <select name="priority" value={editedTask.priority} onChange={_handleChange }>
                    {priorities.map((priority, index) => (
                        <option key={index} value={priority}>{priority}</option>
                    ))}
                </select>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditForm;