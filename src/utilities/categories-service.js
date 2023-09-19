import * as categoriesAPI from './categories-api';

// Create
export async function createCategory(categoryText) {
    const newCategory = await categoriesAPI.createCategory(categoryText);
    return newCategory;
}

// Index
export async function getCategories() {
    const categories = await categoriesAPI.getCategories();
    return categories;
}

// Show
export async function getCategory(categoryId) {
    const category = await categoriesAPI.getCategory(categoryId);
    return category;
}

