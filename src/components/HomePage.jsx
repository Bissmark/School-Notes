import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import TasksList from './TasksList';
import * as categoriesServices from '../utilities/categories-service';
import './HomePage.css';

export default function HomePage({ setCategories, categories, searchQuery }) {
    const [loading, setLoading] = useState(true);

    const quadrant1 = categories.filter((category) => category.time === 1 && category.priority === 'Low');
    const quadrant2 = categories.filter((category) => category.time === 2 && category.priority === 'Low');
    const quadrant3 = categories.filter((category) => category.time === 1 && category.priority === 'High');
    const quadrant4 = categories.filter((category) => category.time === 2 && category.priority === 'High');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesRender = await categoriesServices.getCategories();
                setCategories(categoriesRender);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchCategories()
    }, []);

    async function deleteCategory(category) {
        try {
            await categoriesServices.deleteCategory(category);
            setCategories((prevCategories) => prevCategories.filter((n) => 
                n._id !== category._id
            ));
        } catch (error) {
            console.log(error);
        }
    }

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <>
            <h1>Home Page</h1> 
            <div> { categories.length > 0 && 
                <button className='category-button'>
                    <Link to='/tasks/new'>Add Task</Link>
                </button>
            }
                <button className='category-button'>
                    <Link to='/categories/new'>Add Category</Link>
                </button>
            </div>
            <div className='grid-container horizontal'>
                <div className='grid-item' style={{borderRight: '1px solid rgba(0, 0, 0, 0.8)', borderBottom: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {quadrant1.map((category) => (
                        <div className='category' key={category._id}>
                            <div className='title'>
                                <button className='delete-button' onClick={ () => deleteCategory(category) }>&times;</button>
                                <h1>{category.name}</h1>
                            </div>
                            <TasksList category={category} searchQuery={searchQuery} />
                        </div>
                    ))}
                </div>
                <div className='grid-item' style={{borderBottom: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {quadrant3.map((category) => (
                        <div className='category' key={category._id}>
                            <div className='title'>
                                <button className='delete-button' onClick={ () => deleteCategory(category) }>&times;</button>
                                <h1>{category.name}</h1>
                            </div>
                            <TasksList category={category} searchQuery={searchQuery} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='grid-container vertical'>
                <div className='grid-item' style={{borderRight: '1px solid rgba(0, 0, 0, 0.8)'}}>
                    {quadrant2.map((category) => (
                        <div className='category' key={category._id}>
                            <div className='title'>
                                <button className='delete-button' onClick={ () => deleteCategory(category) }>&times;</button>
                                <h1>{category.name}</h1>
                            </div>
                            <TasksList  category={category} searchQuery={searchQuery} />
                        </div>
                    ))}
                </div>
                <div className='grid-item'>
                    {quadrant4.map((category) => (
                        <div className='category' key={category._id}>
                            <div className='title'>
                                <button className='delete-button' onClick={ () => deleteCategory(category) }>&times;</button>
                                <h1>{category.name}</h1>
                            </div>
                            <TasksList category={category} searchQuery={searchQuery} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}