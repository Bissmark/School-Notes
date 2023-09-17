import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as categoriesServices from "../utilities/categories-service";

const CategoryForm = ({ tasks, categories, setCategories}) => {
    const [newCategory, setNewCategory] = useState({
        name: '',
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
        setNewCategory({name: ''});
        navigate('/tasks')
    }

    return (
        <div>
            <h1>Add Category</h1>
            <form onSubmit={_handleSubmit}>
                <input type="text" name="name" value={newCategory.name}  onChange={_handleChange} required />
                <button>Add Category</button>
            </form>
        </div>
    )
}

export default CategoryForm;