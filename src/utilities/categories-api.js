import sendRequest from "./send-request";
const BASE_URL = "/api/categories";

export async function createCategory(categoryText) {
    return sendRequest(BASE_URL, "POST", categoryText);
}

export async function getCategories() {
    return sendRequest(BASE_URL);
}