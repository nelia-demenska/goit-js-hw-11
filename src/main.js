import { fetchImages }  from './js/pixabay-api'; 
import { renderImages }  from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const loader = document.getElementById('loader');
const galleryElement = document.getElementById('gallery'); 
let gallery = new SimpleLightbox('.gallery-item');

form.addEventListener('submit', async (e) => {
e.preventDefault();

const query = e.target.elements.searchQuery.value.trim();

galleryElement.innerHTML = '';

if (!query) {
    iziToast.warning({ message: 'Sorry, there are no images matching your search query. Please try again!' });
    return;
}

try {
loader.classList.remove('hidden');
const data = await fetchImages(query);

if (data.hits.length === 0) {
    iziToast.error({ message: 'Sorry, there are no images matching your search query. Please try again!' });
        return;
    }

    renderImages(data.hits);
    gallery.refresh();
    } catch (error) {
        iziToast.error({ message: error.message });
    } finally {
        loader.classList.add('hidden');
    }
});