<template>
    <Header/>
    <div class="container">
        <Carousel :slides="carouselItems" />
        <div class="concept-container">
            <p>和モダンの調和</p>
            <p>和風の美学と現代のデザインを融合した空間で、静かなひとときを提供する</p>
            <p>伝統とモダンが調和した雰囲気をあなたに</p>
        </div>
        <div class="product-container">
            <h1>PRODUCT</h1>
            <img src="../assets/images/product4.jpg" alt="">
            <p>コーヒーの本場イタリアのコーヒー豆を使用したオリジナルブレンド</p>
            <img src="../assets/images/product6.jpg" alt="">
            <img src="../assets/images/product7.jpg" alt="">
            <p>定番と季節素材を取り入れた3~4種類のケーキやタルトを販売しています</p>
        </div>
        <div class="shop-container">
            <h1>SHOP</h1>
        </div>
    </div>
    <Footer/>
</template>

<script>
import { defineComponent } from 'vue'
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Carousel from "../components/Carousel.vue"

export default defineComponent({
    name:"Top",
    components:{
        Header,
        Footer,
        Carousel,
    },
    data() {
        return {
            carouselItems: [
                { image: 'product1' },
                { image: 'product2' },
                { image: 'product3' },
            ],
    };
}
})
</script>

<style scoped>
.img-text{
    position: absolute;
    text-align: left;
    top: 120px;
    left: 30px;
    color: #333333;
    font-size: 64px;
    z-index: 2;
}
.product-container{
    margin-top: 100px;
}
.product-container img{
    width: 45%;
    height:45%;
    overflow: hidden;
    margin: 10px 30px;
}
.concept-container{
    font-weight: bold;
}
</style>