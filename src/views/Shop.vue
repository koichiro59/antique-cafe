<template>
    <div class="carousel">
        <!-- タブ -->
        <input type="radio" id="tab1" name="carousel" checked>
        <input type="radio" id="tab2" name="carousel">
        <input type="radio" id="tab3" name="carousel">

        <!-- スライド -->
        <div class="slides">
            <div class="slide" id="slide1">
                <img src="../assets/images/inner1.jpg" alt="Image 1">
            </div>
            <div class="slide" id="slide2">
                <img src="../assets/images/inner2.jpg" alt="Image 2">
            </div>
            <div class="slide" id="slide3">
                <img src="../assets/images/inner3.jpg" alt="Image 3">
            </div>
        </div>

        <div class="tabs">
            <label for="tab1">1</label>
            <label for="tab2">2</label>
            <label for="tab3">3</label>
        </div>
    </div>

    <div class="carousel">
    <!-- ラジオボタン -->
    <input v-for="(slide, index) in data.items" 
           :key="index" 
           type="radio" 
           :id="'slide' + (index + 1)" 
           name="carousel" 
           :checked="index === 0">
    <!-- スライド -->
    <div class="slides">
      <div v-for="(slide, index) in data.items" 
           :key="index" 
           class="slide" 
           :id="'item' + (index + 1)">
        <img :src="require(`../assets/images/${slide.image}.jpg`)" :alt="'Image ' + (index + 1)">
      </div>
    </div>
    <!-- ナビゲーションボタン -->
    <div class="tabs">
      <label v-for="(slide, index) in data.items"
             :key="'prev-' + index"
             :for="'slide' + ((index + slides.length - 1) % slides.length + 1)"
             :class="'prev' + (index === 1 ? '2' : index === 2 ? '3' : '')">{{index+1}}</label>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name:"Shop",
})
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.carousel {
    width: 600px;
    position: relative;
}

input[type="radio"] {
    display: none;
}

.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.tabs label {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #ddd;
    margin: 0 5px;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.tabs label:hover {
    background-color: #bbb;
}

.slides {
    position: relative;
    width: 100%;
    height: 300px;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

/* チェックされたタブに対応するスライドを表示 */
#tab1:checked ~ .slides #slide1,
#tab2:checked ~ .slides #slide2,
#tab3:checked ~ .slides #slide3 {
    opacity: 1;
    position: relative;
}

#tab1:checked ~ .tabs label[for="tab1"],
#tab2:checked ~ .tabs label[for="tab2"],
#tab3:checked ~ .tabs label[for="tab3"] {
    background-color: #888;
    color: white;
}
</style>