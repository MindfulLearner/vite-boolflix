<script>
    import Img from './Img.vue'
    import Search from './Search.vue'
    export default {
        data() {
            return {

            }
        },
        components: {
            Img,
            Search
        }
    }
</script>

<template>
    <div class="header-container">
        <Img />
        <Search />
    </div>
</template>

<style scoped>
    .header-container {
        height: 100px;
        display: flex;
    }
</style>
