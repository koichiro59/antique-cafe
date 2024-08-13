<template>
    <Header/>
        <h1>Reserve Pageです</h1>
    <Footer/>
</template>

<script>
import { defineComponent } from 'vue'
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default defineComponent({
    name:"Product",
    components:{
        Header,
        Footer,
    }
})
</script>

<style scoped>

</style>