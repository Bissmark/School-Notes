import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import * as tasksServices from '../utilities/tasks-service';

const TasksDetail = ({ tasks, setTasks }) => {
    const [singleTask, setSingleTask] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        tasksServices.getTaskDetails(id).then((task) => {
            setSingleTask(task);
        });
    }, []);

    async function deleteTask(id) {
        await tasksServices.deleteTask(id);
        const updatedtasks = tasks.filter((n) => n._id !== id);
        setTasks(updatedtasks);
        navigate('/');
    }

    return (
        <div key={singleTask._id} className='task'>
            <button className='delete-button' onClick={ () => deleteTask(singleTask._id) }>&times;</button>
            
            <ul>
                <li>{ singleTask.name }</li>
                <li>{ singleTask.category }</li>
                <li>{ singleTask.time }</li>
                <li>{ singleTask.priority }</li>
                <li>{ new Date(singleTask.createdAt).toLocaleString() }:</li>
                <img src={singleTask.image} alt="" />
            </ul>
            <Link to={`/tasks/${singleTask._id}/edit`}>Edit</Link>
        </div>
    )
}

export default TasksDetail