import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TasksList from './TasksList';
import * as categoriesServices from '../utilities/categories-service';
import './HomePage.css';

export default function HomePage({ setCategories, categories, searchQuery }) {
    const navigate = useNavigate();
    // const [deleted, setDeleted] = useState(new Set());
    console.log(categories)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesRender = await categoriesServices.getCategories();
                setCategories(categoriesRender);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategories()
    }, []);

    async function deleteCategory(category) {
        try {
            await categoriesServices.deleteCategory(category);
            const updatedCategories = categories.filter((n) => n._id !== category._id);
            setCategories(updatedCategories);
        } catch (error) {
            console.log(error);
        }
    }

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
                    {categories.map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <button className='delete-button' onClick={ () => deleteCategory(category) }>&times;</button>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList category={category} searchQuery={searchQuery} />
                        </div>
                    ))}
                </div>
                <div className='grid-item' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {categories.map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <button className='delete-button' onClick={ () => deleteCategory(category) }>&times;</button>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList category={category} searchQuery={searchQuery} />
                        </div>
                    ))}
                </div>
                <div className='grid-item' style={{borderRight: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {categories.map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <button className='delete-button' onClick={ () => deleteCategory(category) }>&times;</button>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList  category={category} searchQuery={searchQuery} />
                        </div>
                    ))}
                </div>
                <div className='grid-item'>
                    {categories.map((category) => (
                        <div className='category' style={{border: '1px solid purple'}} key={category._id}>
                            <button className='delete-button' onClick={ () => deleteCategory(category) }>&times;</button>
                            <h1 style={{color: 'purple'}}>{category.name}</h1>
                            <TasksList category={category} searchQuery={searchQuery} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}