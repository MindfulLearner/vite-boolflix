import { reactive } from 'vue';
import axios from 'axios'; 

export const store = reactive({
    movies: [],
    moviesLength: 0,


    // contiamo quanto vale voto in base a quant ovale stampiamo numero di stelle, dato che devono essere 10 stampiamo poi quelle rimanenti

    searchMovie: '', 
    selectedLanguage: '', 

    linguaBandiera: {
        'en': 'https://media.istockphoto.com/id/1315619443/it/vettoriale/illustrazione-vettoriale-della-bandiera-britannica.jpg?s=612x612&w=0&k=20&c=NssEhN4RwTuFCrXNFRa_AAqKYbfCmuT6aZyvSaOJIH8=',
        'it': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_the_Repubblica_Cisalpina.svg/220px-Flag_of_the_Repubblica_Cisalpina.svg.png',
        'fr': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg',
        'ja' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/280px-Flag_of_Japan.svg.png',
        'es': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
        'de': 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
        'ru': 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
        'pt': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
        'br': 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
        'kr': 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
        'in': 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
        'cn': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Flag_of_China.svg',
        'mx': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
        'ca': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg'
    },

    updateMoviesLength(newMovies) {
        this.movies = newMovies;
        this.moviesLength = newMovies.length;
    },


    test() {
        console.log(import.meta.env.VITE_CHIAVE_API);
        console.table(this.movies);
    },

    async cerca() {
        const chiamataApi = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_CHIAVE_API}`
            },
            params: {
                query: this.searchMovie,
                include_adult: false,
                language: 'en-US',
                page:1 
            }
        };

        try {
            const response = await axios.request(chiamataApi);
            console.log(response.data);
            if (response.data.results) {
                this.movies = response.data.results.map(movie => ({
                    title: movie.title,
                    overview: movie.overview,
                    original_language: movie.original_language,
                    poster: movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : null,
                    bandiera: this.linguaBandiera[movie.original_language],
                    valutazione: movie.vote_average
                }));
            } else {
                console.error('non ha trovato nulla');
            }
        } catch (error) {
            console.error('non e riuscito a raggiungere la chaive');
        }
    }
});

