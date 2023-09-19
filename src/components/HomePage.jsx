import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TasksList from './TasksList';
import * as tasksServices from '../utilities/tasks-service';
import * as categoriesServices from '../utilities/categories-service';
import './HomePage.css';

export default function HomePage({ tasks, setTasks, setCategories, categories, searchQuery }) {

    useEffect(() => {
        categoriesServices.getCategories().then((categories) => {
            setCategories(categories);
            console.log(categories)
        });
        // tasksServices.getTasks().then((tasks) => {
        //     setTasks(tasks);
        // });
    }, [setTasks, setCategories]);

    return (
        <>
            <h1>Tasks Page</h1>
            <div> { categories.length > 0 && 
                <Link to='/tasks/new'>Add Task</Link>
            }
            </div>
            <div>
                <Link to='/categories/new'>Add Category</Link>
            </div>
            <div className='grid-container'>
                <div className='grid-item' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.8)', borderRight: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {/* {categories.filter((category) => category.name.toLowerCase().includes(searchQuery.toLowerCase())).map((category) => ( */}
                    {categories.map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            {category.tasks.map((t) => {
                                return (
                                <div key={t._id} className='task'>
                                    <ul>
                                        <Link to={`/tasks/${t._id}`}><li>{ t.name }</li></Link>
                                    </ul>
                                </div>
                                )})
                            }
                            {/* <TasksList category={category} searchQuery={searchQuery} /> */}
                        </div>
                    ))}
                </div>
                <div className='grid-item' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {categories.map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            
                            <TasksList category={category} searchQuery={searchQuery} tasks={tasks} />
                        </div>
                    ))}
                </div>
                <div className='grid-item' style={{borderRight: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {categories.map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList  category={category} searchQuery={searchQuery} tasks={tasks} />
                        </div>
                    ))}
                </div>
                <div className='grid-item'>
                    {categories.map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList category={category} searchQuery={searchQuery} tasks={tasks} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}