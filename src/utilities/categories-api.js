import sendRequest from "./send-request";
const BASE_URL = "/api/categories";

// Create
export async function createCategory(categoryText) {
    return sendRequest(BASE_URL, "POST", categoryText);
}

// Index
export async function getCategories() {
    return sendRequest(BASE_URL);
}

// Show
export async function getCategory(categoryId) {
    return sendRequest(`${BASE_URL}/${categoryId}`);
}