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
            <div class="V2-carousel">
                <!-- タブ -->
                <input type="radio" id="V2-tab1" name="V2-carousel" checked>
                <input type="radio" id="V2-tab2" name="V2-carousel">
                <input type="radio" id="V2-tab3" name="V2-carousel">

                <!-- スライド -->
                <div class="V2-slides">
                    <div class="V2-slide" id="V2-slide1">
                        <img src="../assets/images/inner1.jpg" alt="Image 1">
                    </div>
                    <div class="V2-slide" id="V2-slide2">
                        <img src="../assets/images/inner2.jpg" alt="Image 2">
                    </div>
                    <div class="V2-slide" id="V2-slide3">
                        <img src="../assets/images/inner3.jpg" alt="Image 3">
                    </div>
                </div>

                <!-- ナビゲーション -->
                <div class="V2-tabs">
                    <div class="nav-image1"><label for="V2-tab1"><img src="../assets/images/inner1.jpg" alt="Thumbnail 1"></label></div>
                    <div class="nav-image2"><label for="V2-tab2"><img src="../assets/images/inner2.jpg" alt="Thumbnail 2"></label></div>
                    <div class="nav-image3"><label for="V2-tab3"><img src="../assets/images/inner3.jpg" alt="Thumbnail 3"></label></div>
                </div>
            </div>
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
.shop-container{
    text-align: center;
}


.V2-carousel {
    width: 100%;
    height: 70%;
    position: relative;
    justify-content: center;
    overflow: hidden;
}

input[type="radio"] {
    display: none;
}

.V2-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.V2-tabs label {
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 5px;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}
.V2-slides {
    position: relative;
    width: 100%;
    height: 70%;
}

.V2-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.V2-slide img {
    width: 50%;
    height: 20%;
    object-fit: cover;
}

/* チェックされたタブに対応するスライドを表示 */
#V2-tab1:checked ~ .V2-slides #V2-slide1,
#V2-tab2:checked ~ .V2-slides #V2-slide2,
#V2-tab3:checked ~ .V2-slides #V2-slide3 {
    opacity: 1;
    position: relative;
}

#V2-tab1:checked ~ .V2-tabs label[for="V2-tab1"],
#V2-tab2:checked ~ .V2-tabs label[for="V2-tab2"],
#V2-tab3:checked ~ .V2-tabs label[for="V2-tab3"] {
    color: white;
}
.V2-tabs img {
    width: 50px; /* 縮小画像のサイズを指定 */
    height: auto;
    border: 2px solid transparent; /* 枠線を透明に */
    transition: border-color 0.3s;
}
.V2-tabs .nav-image1, 
.V2-tabs .nav-image2, 
.V2-tabs .nav-image3 {
    margin: 0 5px;
}
.V2-tabs input:checked + .nav-image1 label img,
.V2-tabs input:checked + .nav-image2 label img,
.V2-tabs input:checked + .nav-image3 label img {
    border-color: #000; /* 選択されたタブに枠線を表示 */
}
</style>