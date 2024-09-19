import { reactive } from 'vue';
import axios from 'axios'; 

export const store = reactive({
    movies: [],
    moviesLength: 0,

    searchMovie: '', 
    selectedLanguage: '', 

    updateMoviesLength(newMovies) {
        this.movies = newMovies;
        this.moviesLength = newMovies.length;
    },

    test() {
        console.log(import.meta.env.VITE_VUE_APP_KEYS);
        console.table(this.movies);
    },

    async cerca() {
        const chiamataApi = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            headers: {
                accept: 'application/json',
                 Authorization: `Bearer ${import.meta.env.CHIAVE_API}`
            },
            params: {
                query: this.searchMovie.trim(),
                include_adult: false,
                language: 'en-US',
                page: 1
            }
        };

        try {
            const response = await axios.request(chiamataApi);
            console.log(response.data);
            if (response.data.results) {
                this.movies = response.data.results.map(movie => ({
                    title: movie.title,
                    overview: movie.overview,
                    poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null
                }));
            } else {
                console.error('non ha trovato nulla');
            }
        } catch (error) {
            console.error('non e riuscito a raggiungere la chaive');
        }
    }
});

