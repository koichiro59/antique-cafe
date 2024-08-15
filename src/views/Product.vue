<template>
    <Header/>
        <div class="container">
            <h1 class="title">PRODUCT</h1>
            <h2 class="sub-title">コーヒー</h2>
            <div class="coffee-container">
                <div class="product-detail">
                    <img src="../assets/images/product1.jpg" alt="">
                    <p><b>アイスコーヒー</b></p>
                    <p>コーヒーの本場イタリアのコーヒー豆を使用したオリジナルブレンド</p>
                </div>
                <div class="product-detail">
                    <img src="../assets/images/product8.jpg" alt="">
                    <p><b>アイスカフェオレ</b></p>
                    <p>たっぷりミルクを加えたマイルドな味わい</p>
                </div>
            </div>
            <h2 class="sub-title">ケーキ</h2>
            <div class="cake-container">
                 <div class="product-detail">
                    <img src="../assets/images/product5.jpg" alt="">
                    <p><b>ストロベリーケーキ</b></p>
                    <p>甘酸っぱい苺の香りと滑らかな口当たりが楽しめる、フレッシュなデザート</p>
                </div>
                <div class="product-detail">
                    <img src="../assets/images/product6.jpg" alt="">
                    <p><b>チョコケーキ</b></p>
                    <p>濃厚なチョコレートの深い味わいが魅力の、リッチなケーキ。</p>
                </div>
            </div>
            <h2 class="sub-title">タルト</h2>
            <div class="tart-container">
                <div class="product-detail">
                    <img src="../assets/images/product9.jpg" alt="">
                    <p><b>モンブランタルト</b></p>
                    <p>栗の甘さが際立つクリーミーなモンブランとタルトの贅沢な組み合わせ。</p>
                </div>
                <div class="product-detail">
                    <img src="../assets/images/product7.jpg" alt="">
                    <p><b>いちごタルト</b></p>
                    <p>濃厚なチョコレートの深い味わいが魅力の、リッチなケーキ。</p>
                </div>
            </div>
        </div>
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
.container{
    margin: 0 100px;
}
.title{
    text-align: center;
}
.sub-title{
    text-align: left;
    margin-top:50px;
    margin-left: 30px;
    border-left: #a4cabc 6px solid;
    padding: 10px;
}
.product-detail{
    text-align: left;
    width: 33%;
    height: auto;
    margin: 0 20px 50px 30px;
}
.coffee-container{
    display: flex;
}
.coffee-container img{
    width: 70%;
    height: auto;
}
.cake-container{
    display: flex;
}
.cake-container img{
    width: 70%;
    height: auto;
}
.tart-container{
    display: flex;
    margin-bottom:100px;
}
.tart-container img{
    width: 70%;
    height: auto;
}
@media(max-width: 768px){
    .container{
        margin: 20px;
    }
    .product-detail img{
        width: 100%;
        height: auto;
    }
}
</style>