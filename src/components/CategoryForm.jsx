import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as categoriesServices from "../utilities/categories-service";

const CategoryForm = ({ categories, setCategories, times, priorities}) => {
    const [newCategory, setNewCategory] = useState({
        name: '',
        time: '',
        priority: '',
    });
    const navigate = useNavigate();

    async function addCategory(category) {
        const newCategory = await categoriesServices.createCategory(category);
        setCategories([...categories, newCategory]);
    }

    const _handleChange = (e) => {
        setNewCategory({
            ...newCategory,
            [e.target.name]: e.target.value,
        });
    }

    function _handleSubmit(e) {
        e.preventDefault();
        addCategory(newCategory);
        console.log(newCategory);
        setNewCategory({name: '', time: '', priority: ''});
        navigate('/')
    }

    return (
        <div>
            <h1>Add Category</h1>
            <form onSubmit={_handleSubmit}>
                <input type="text" name="name" value={newCategory.name}  onChange={_handleChange} required />
                <select name="time" onChange={_handleChange }>
                    {times.map((time, index) => (
                        <option key={index} value={time} defaultValue={time}>{time}</option>
                    ))}
                </select>
                <select name="priority" onChange={_handleChange }>
                    {priorities.map((priority, index) => (
                        <option key={index} value={priority}>{priority}</option>
                    ))}
                </select>
                <button>Add Category</button>
            </form>
        </div>
    )
}

export default CategoryForm;