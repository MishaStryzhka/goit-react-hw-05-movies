import axios from "axios";

const KEYTMDB = "d3e87ea049b6b9a39016714042d8b78c"

const fetchTrendingMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEYTMDB}`);
    if (!response.data.results) {
        return Promise.reject(new Error("Sorry! There is no photo at your request."))
    }
    return response.data.results;
};

const fetchMovieById = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEYTMDB}&language=en-US`);
    // console.log(response)
    if (!response.data) {
        return Promise.reject(new Error("Sorry! There is no photo at your request."))
    }
    return response.data;
};

const fetchMovieQuery = async (value) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEYTMDB}&language=en-US&query=${value}&page=1&include_adult=false`);
    // console.log(response)
    if (!response.data) {
        return Promise.reject(new Error("Sorry! There is no photo at your request."))
    }
    return response.data;
};

const fetchCast = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEYTMDB}&language=en-US`);
    // console.log(response)
    if (!response.data) {
        return Promise.reject(new Error("Sorry! There is no photo at your request."))
    }
    return response.data;
};

const fetchReviews = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEYTMDB}&language=en-US`);
    // console.log(response)
    if (!response.data) {
        return Promise.reject(new Error("Sorry! There is no photo at your request."))
    }
    return response.data;
};

export const Api = { fetchTrendingMovies, fetchMovieById, fetchMovieQuery, fetchCast, fetchReviews };