<template>
    <header>
        <div class="logo-container">
            <span class="logo">
                <router-link to="./" class="nav-item"><img src="../assets/images/logo1.svg" alt=""></router-link>
            </span>
        </div>
        <div class="reserve-container">
            <button class="reserve-btn">
                <router-link to="./reserve" class="nav-item">予約</router-link>
            </button>
        </div>
        <div class="nav-container">
            <div class="hamburger-menu" :class="{ active: isActive }" @click="toggleMenu"><span></span><span></span><span></span></div>
            <div class="menu" :class="{ open: isActive }">
            <ul>
                <li><div class="menu-trigger" @click="toggleMenu">✖</div></li>
                <li><router-link to="./" class="menu-item">TOP</router-link></li>
                <li><router-link to="./product" class="menu-item">PRODUCT</router-link></li>
                <li><router-link to="./shop" class="menu-item">SHOP</router-link></li>
            </ul>
    </div>
        </div>
    </header>
    <div class="blank"></div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
    name:"Header",
    data() {
        return {
        isActive: false
        };
    },
    methods: {
        toggleMenu() {
        this.isActive = !this.isActive;
        }
    }
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
    padding: 10px;
    margin-left: 20px;
    text-align: left;
}
.logo{
    font-size: 20px;
}
.logo img{
  position: relative;
  width: 15%;
  height: auto;
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
        z-index: 3;
}
.hamburger-menu {
  position: relative;
  background: #333;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 5px;
}

.hamburger-menu span {
  display: inline-block;
  transition: all 0.4s;
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background: #fff;
  width: 45%;
}

.hamburger-menu span:nth-of-type(1) {
  top: 15px;
}

.hamburger-menu span:nth-of-type(2) {
  top: 23px;
}

.hamburger-menu span:nth-of-type(3) {
  top: 31px;
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

.hamburger-menu.active span:nth-of-type(3) {
  top: 30px;
  left: 18px;
  transform: translateY(-6px) rotate(45deg);
  width: 30%;
}

.menu {
  position: fixed; /* Changed to fixed to make it appear from the side */
  top: 0;
  right: -300px;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: white;
  list-style: none;
  padding: 10px;
  transform: translateX(0);
  transition: right 0.3s ease; /* Adjusted the transition to move horizontally */
  pointer-events: none;
  text-align: left;
}
.menu.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  right: 0;

}

.menu ul {
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px 0;
  border-bottom: 1px solid #444;
  list-style: none;
}

.menu li:last-child {
  border-bottom: none;
}
.blank{
    height: 100px;
}
.nav-item{
    text-decoration: none;
    color: #333;
}
.menu-item{
    text-decoration: none;
    color: #fff;
    margin-left: 10px;
}
.menu-trigger{
    cursor: pointer;
    text-align: right;
    margin-right: 20px;
    font-size: 24px;
}
</style>