import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b1c5726376c451f621f2d4b8c84b5c09';

export async function getTrending() {
  const response = await axios(
    BASE_URL + `trending/all/day?api_key=${API_KEY}`
  );
  return response.data.results;
}
export async function searchByKeyword(q) {
  const response = await axios(
    BASE_URL +
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${q}`
  );
  return response.data.results;
}

export async function getMovieDetails(id) {
  const response = await axios(
    BASE_URL + `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function getCredits(id) {
  const response = await axios(
    BASE_URL + `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
}

export async function getReviews(id) {
  const response = await axios(
    BASE_URL + `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
}
