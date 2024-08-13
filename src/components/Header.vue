<template>
    <header>
        <div class="logo-container">
            <span class="logo">antique cafe</span>
        </div>
        <div class="reserve-container">
            <button class="reserve-btn">予約</button>
        </div>
        <div class="nav-container">
            <div class="hamburger-menu"><span></span><span></span><span></span></div>
        </div>
    </header>
    <div class="blank"></div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
    name:"Header"
})

</script>

<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    z-index: 2;
}
.logo-container{
    flex-grow: 1;
    padding: 30px;
    text-align: left;
}
.logo{
    font-size: 20px;
}
.reserve-container{
    position: fixed;
    flex-grow: 20;
    padding: 20px;
    text-align: right;
    top: 0;
    right: 100px;
}
.reserve-btn{
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-size: 15px;
    border-radius: 50%;
    background: #fff;
    width: 50px;
    height: 50px;
    border: 1.5px solid #333;
    color: #333;
}
.nav-container{
    position: fixed;
    flex-grow: 1;
    padding: 20px;
    text-align: right;
    top: 0;
    right: 30px;
}
.hamburger-menu{
    position: relative;
    background: #333;
    cursor: pointer;
    width: 50px;
    height:50px;
    border-radius: 5px;
}
.hamburger-menu span{
    display: inline-block;
    transition: all .4s;
    position: absolute;
    left: 14px;
    height: 3px;
    border-radius: 2px;
    background: #fff;
    width: 45%;
}
.hamburger-menu span:nth-of-type(1) {
  top:15px; 
}
.hamburger-menu span:nth-of-type(2) {
  top:23px;
}
.hamburger-menu span:nth-of-type(3) {
  top:31px;
}
.hamburger-menu.active span:nth-of-type(1) {
    top: 18px;
    left: 18px;
    transform: translateY(6px) rotate(-45deg);
    width: 30%;
}
.hamburger-menu.active span:nth-of-type(2) {
  opacity: 0;
}
.hamburger-menu.active span:nth-of-type(3){
    top: 30px;
    left: 18px;
    transform: translateY(-6px) rotate(45deg);
    width: 30%;
}
.blank{
    height: 100px;
}
</style>