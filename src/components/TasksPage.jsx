import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TasksList from './TasksList';
import * as tasksServices from '../utilities/tasks-service';
import * as categoriesServices from '../utilities/categories-service';
import './TasksPage.css';

export default function TasksPage({ tasks, setTasks, setCategories, categories, searchQuery }) {

    useEffect(() => {
        tasksServices.getTasks().then((tasks) => {
            setTasks(tasks);
        });
        categoriesServices.getCategories().then((categories) => {
            setCategories(categories);
        });
    }, [setTasks, setCategories]);

    return (
        <>
            <h1>Tasks Page</h1>
            <div>
                <Link to='/tasks/new'>Add Task</Link>
            </div>
            <div>
                <Link to='/categories/new'>Add Category</Link>
            </div>
            <div className='grid-container'>
                <div className='grid-item' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.8)', borderRight: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {categories.filter((category) => category.name.toLowerCase().includes(searchQuery.toLowerCase())).map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList tasks={tasks} />
                        </div>
                    ))}
                </div>
                <div className='grid-item' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {categories.filter((category) => category.name.toLowerCase().includes(searchQuery.toLowerCase())).map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList tasks={tasks} />
                        </div>
                    ))}
                </div>
                <div className='grid-item' style={{borderRight: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {categories.filter((category) => category.name.toLowerCase().includes(searchQuery.toLowerCase())).map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList tasks={tasks} />
                        </div>
                    ))}
                </div>
                <div className='grid-item'>
                    {categories.filter((category) => category.name.toLowerCase().includes(searchQuery.toLowerCase())).map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList tasks={tasks} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}