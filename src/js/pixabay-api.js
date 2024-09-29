const API_KEY = '46142789-99b5e0e53b7f0f17aff330ecb';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=16`);
if (!response.ok) throw new Error('Failed to fetch data');
return await response.json();
}