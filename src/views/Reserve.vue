<template>
    <Header/>
    <div class="container">
        <div class="reserve-container">
            <h2 class="title">ご予約条件</h2>
            <div class="sub-container">
                <h3 class="sub-title">ご予約店舗</h3>
                <select name="" id="" class="pulldown">
                    <option value="東京都港区店">東京都港区店</option>
                </select>
                <h3 class="sub-title">ご予約日時</h3>
                <input type="datetime-local">
                <h3 class="sub-title">ご予約人数</h3>
                <input type="number">
            </div>

        </div>
        <div class="customer-container">
            <h2 class="title">お客様情報</h2>
            <div class="sub-container">
                <h3 class="sub-title">名前</h3>
                <input type="text" class="input-text">
                <h3 class="sub-title">電話番号</h3>
                <input type="text" class="input-text">
                <h3 class="sub-title">メールアドレス</h3>
                <input type="text" class="input-text">
            </div>
        </div>
        <button class="confirm-btn">予約内容を確認する</button>
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
.reserve-container{
    text-align: left;
}
.customer-container{
    text-align: left;
}
.title{
    text-align: left;
    background-color: #232531;
    color: #fff;
}
.sub-title{
    text-align: left;
}
.sub-container{
    margin: 0 30px;
}
.pulldown{
    width: 80%;
    padding: 10px;
}
.input-text{
    width: 80%;
    padding: 10px;
}
.confirm-btn{
    padding: 10px;
    margin: 50px 10px;
}
</style>