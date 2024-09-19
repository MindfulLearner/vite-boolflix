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
            voto: {
                type: Number,
            },
            poster: {
                type: String,
            }
        },
        computed: {
            riempiStelle() {
                const votoContato = this.voto / 2;
                // arrontondamento
                return Math.round(votoContato);
            },
            vuotoStelle() {
                return 5 - this.riempiStelle;
            }
        }
    }
</script>

<template>
    <div class="movie-container">
        <div class="movie-container-img">
            <img :src="poster" alt="" />
        </div>
        <div>
            <h3>titolo: {{ title }}</h3>
            <p>trama: {{ overview }}</p>
            <p>lingua: {{ original_language }}</p>
            <div class="bandierina-container">
                <img :src="bandiera" alt="">
            </div>
            <font-awesome-icon icon="star" v-for='numero in riempiStelle' class="riempito" />
            <font-awesome-icon icon="star" v-for='numero in vuotoStelle' class="nonRiempito" />
            <p>voto: {{ voto / 2}} </p>
        </div>
    </div>
</template>

<style scoped>
    button {
        height: 20px;
        width: 20px;
    }


    .riempito {
        color: yellow;
    }

    .nonRiempito {
        color: red;
    }

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
