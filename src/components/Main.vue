<script>
    import Card from './Card.vue'
    import {store} from '../store.js'
    export default {
        data() {
            return {
                store
            }
        },
        components: {
            Card
        }
    }
</script>

<template>
    <div class="card-list-container">
        <Card v-for='(movie, index) in store.movies' :key='index' :title="movie.title" :overview="movie.overview"
            :poster="movie.poster" :original_language="movie.original_language" :bandiera="movie.bandiera"
            :voto="movie.valutazione" />
    </div>
</template>

<style scoped>
    .card-list-container {
        flex-wrap: wrap;
        gap: 20px;
    }
</style>
