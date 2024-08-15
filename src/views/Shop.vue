<template>
    <Header/>
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
            <div class="text-container">
                <div>
                    <div class="text-detail">
                        <span>antique cafe 東京都港区店</span>
                    </div>
                    <div class="text-detail">
                        <span>〒106-0032</span>
                    </div>
                    <div class="text-detail">
                        <span>東京都港区六本木７丁目12-4</span>
                    </div>
                    <div class="text-detail">
                        <span>OPEN：09:00 CLOSE：21:00</span>
                    </div>
                </div>
            </div>
            <p>お電話によるご予約を承っておりません。ホームページ内のご予約サイトからお問い合わせお願い致します。</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6483.042557061923!2d139.72283713911426!3d35.664164557028734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7973f29357%3A0x842b73df6eb54d22!2z44CSMTA2LTAwMzIg5p2x5Lqs6YO95riv5Yy65YWt5pys5pyo77yX5LiB55uu!5e0!3m2!1sja!2sjp!4v1723631623633!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    <Footer/>
</template>

<script>
import { defineComponent } from "vue";
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default defineComponent({
    name:"Shop",
    components:{
        Header,
        Footer,
    }
})
</script>

<style scoped>
.text-detail{
    padding: 10px;
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
.text-container{
    text-align: center;
    margin: 50px 0;
    display: inline-block;
    padding: 0 20px;
    border-left: #a4cabc 6px solid;
}
</style>