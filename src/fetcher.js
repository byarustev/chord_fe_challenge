import axios from 'axios';

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

const api_key = 'a36dcc05195dfb5fc066ca4c53c27030';
const BASE_API_URL = 'https://api.themoviedb.org/3/';
const getPopularUrl = `${BASE_API_URL}movie/popular?api_key=${api_key}`;
const getGenresUrl = `${BASE_API_URL}genre/movie/list?api_key=${api_key}`;

export const getPopularMovies = async () =>{
    const results = await axios.get(getPopularUrl)
    return results?.data || {}
}

export const getGenres = async () =>{
    const results = await axios.get(getGenresUrl)
    return results?.data?.genres || []
}

export const searchMovies = async (searchKey, year) =>{
    const searchUrl = `${BASE_API_URL}search/movie?api_key=${api_key}&query=${searchKey}&year=${year}`;
    const searchResults = await axios.get(searchUrl)
    console.log(searchResults, 'search results')
    return searchResults?.data || []
}