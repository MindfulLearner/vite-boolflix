<script>
    export default {
        props: {
            title: {
                type: String,
            },
            overview: {
                type: String,
            },
            original_language: {
                type: String,
            },
            bandiera: {
                type: String,
            },
            poster: {
                type: String,
            }

        }
    }</script>

<template>
    <div class="movie-container">
        <div class="movie-container-img">
            <img :src="poster" alt="" />
        </div>
        <div>
            <h3>{{ title }}</h3>
            <p>{{ overview }}</p>
            <p>{{ original_language }}</p>
            <div class="bandierina-container">
                <img :src="bandiera" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .movie-container {
        width: 100%;
        height: 200px;
        display: flex;
    }

    .movie-container-img {
        width: 150px;
        height: 150px;
    }

    .bandierina-container {
        width: 50px;
        height: 50px;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>
