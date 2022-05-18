import axios from 'axios';

const URL = 'https://pixabay.com/api/?q=';
const API_KEY = '25766392-01b12b6ed5ab34bc2910d9c3e';

export class ImgApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImage() {
    const response = await axios.get(
      `${URL}${this.searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.incrementPage();
    return response.data.hits;
  }

  incrementPage() {
    this.page += 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
