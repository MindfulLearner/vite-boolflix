<script>
    import {store} from '../store.js';
    export default {
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="contenitore-form">
        <input v-model="store.searchMovie" class="input" type="text" name="input" placeholder="Inserisci testo">
        <button @click="store.cerca()" class="pulsante" type="submit">send</button>
        <button @click="store.test()" class="pulsante" type="submit">send</button>
    </div>
</template>

<style scoped>
    .contenitore-form {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        max-width: 300px;
        gap: 20px;
        margin: 0 auto;
    }

    .campo-input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 4px;
        font-size: 16px;
    }

    .pulsante {
        padding: 10px 20px;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
