import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
  try {
    const response = await axios.get(`${API_URL}/users`);

    return response.data;
  } catch (error) {
    console.log("Failed to fetch users", error);
    throw error;
  }
}