// services/sw-api.js
const API_BASE_URL = "https://swapi.dev/api/";

export async function getAllStarships(page = 1) {
  const response = await fetch(`${API_BASE_URL}starships/?page=${page}`);
  const data = await response.json();
  return data;
}
