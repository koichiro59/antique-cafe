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
                <label><input type="datetime-local"></label>
                <h3 class="sub-title">ご予約人数</h3>
                <input type="number"  class="input-number" placeholder="人数を入力してください">
            </div>

        </div>
        <div class="customer-container">
            <h2 class="title">お客様情報</h2>
            <div class="sub-container">
                <h3 class="sub-title">名前</h3>
                <input type="text" class="input-text" placeholder="例）佐藤博">
                <h3 class="sub-title" >電話番号</h3>
                <input type="text" class="input-text" placeholder="例）03-1234-5678">
                <h3 class="sub-title">メールアドレス</h3>
                <input type="text" class="input-text" placeholder="例）info@fitlifeplus.com">
            </div>
        </div>
        <button class="confirm-btn"><router-link to="./" class="nav-item">予約する</router-link></button>
        <div class="blank"></div>
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
    background-color: #eaeaea;
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
    width: 30%;
    padding: 10px;
}
.input-text{
    width: 80%;
    padding: 10px;
}
.input-number{
    width: 20%;
    padding: 10px;
}
.confirm-btn{
    padding: 20px;
    font-size: 16px;
    margin: 50px 10px;
    background-color: #D4432D;
    color: #fff;
    border: none;
    border-radius: 5px;
}
.nav-item{
    text-decoration: none;
    color: #fff;
}
.blank{
    height: 60px;
    background-color: #fff;
}
label {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 36px;
  border: 1px solid #333333;
  background: #fff;
}
input[type="datetime-local"] {
  position: relative;
  padding: 0 10px;
  width: 200px;
  height: 36px;
  border: 0;
  background: transparent;
  box-sizing: border-box;
  font-size: 14px;
}
@media(max-width: 768px){
    .container{
        margin: 20px;
    }
    .pulldown{
        width: 50%;
        padding: 10px;
    }
    .input-number{
        width: 50%;
        padding: 10px;
    }
}
</style>