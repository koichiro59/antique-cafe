<template>
    <footer>
        <nav class="nav-container">
            <span class="logo">antique cafe</span>
            <router-link to="./" class="nav-item">TOP</router-link>
            <router-link to="./product" class="nav-item">PRODUCT</router-link>
            <router-link to="./shop" class="nav-item">SHOP</router-link>
        </nav>
        <div class="copyright-container">
            <span>© 2024 antique cafe. All rights reserved.</span>
        </div>
    </footer>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
    name:"Footer"
})
</script>

<style scoped>
footer{
    background: #eaeaea;
}
.logo{
    position: absolute;
    left: 400px;
}
.nav-container{
    display: flex;
    justify-content: center; 
    padding: 10px;
    gap: 20px;
}
.nav-item{
    display: inline;
        text-decoration: none;
}
.copyright-container{
    text-align: center;
    padding: 10px;
}
</style>