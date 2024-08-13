<template>
  <div class="carousel">
    <!-- ラジオボタン -->
    <input v-for="(slide, index) in slides" 
           :key="index" 
           type="radio" 
           :id="'slide' + (index + 1)" 
           name="carousel" 
           :checked="index === 0">

    <!-- スライド -->
    <div class="slides">
      <div v-for="(slide, index) in slides" 
           :key="index" 
           class="slide" 
           :id="'item' + (index + 1)">
        <img :src="require(`../assets/images/${slide.image}.jpg`)" :alt="'Image ' + (index + 1)">
      </div>
    </div>

    <!-- ナビゲーションボタン -->
    <div class="navigation">
      <label v-for="(slide, index) in slides"
             :key="'prev-' + index"
             :for="'slide' + ((index + slides.length - 1) % slides.length + 1)"
             :class="'prev' + (index === 1 ? '2' : index === 2 ? '3' : '')">&#10094;</label>

      <label v-for="(slide, index) in slides"
             :key="'next-' + index"
             :for="'slide' + ((index + 1) % slides.length + 1)"
             :class="'next' + (index === 0 ? '' : index === 1 ? '2' : '3')">&#10095;</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.carousel {
    width: 100%;
    height: 70%;
    position: relative;
    justify-content: center;
    overflow: hidden;
}

input[type="radio"] {
    display: none;
}

.slides {
    position: relative;
    width: 100%;
    height: 70%;
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
}

/* チェックされたスライドを表示 */
#slide1:checked ~ .slides #item1,
#slide2:checked ~ .slides #item2,
#slide3:checked ~ .slides #item3 {
    opacity: 1;
    position: relative;
}

/* ナビゲーションボタンのスタイル */
.navigation label {
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: background-color 0.3s ease;
}

.navigation label:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* 左矢印の位置 */
.prev {
    left: 10px;
}

.prev2 {
    left: 10px;
    display: none;
}

.prev3 {
    left: 10px;
    display: none;
}

/* 右矢印の位置 */
.next {
    right: 10px;
}

.next2 {
    right: 10px;
    display: none;
}

.next3 {
    right: 10px;
    display: none;
}

/* スライド1が表示されているときのボタン制御 */
#slide1:checked ~ .navigation .next {
    display: block;
}

#slide1:checked ~ .navigation .prev {
    display: none;
}

#slide1:checked ~ .navigation .next2 {
    display: none;
}

#slide1:checked ~ .navigation .prev2 {
    display: none;
}

/* スライド2が表示されているときのボタン制御 */
#slide2:checked ~ .navigation .next2 {
    display: block;
}

#slide2:checked ~ .navigation .prev2 {
    display: block;
}

#slide2:checked ~ .navigation .next {
    display: none;
}

#slide2:checked ~ .navigation .prev {
    display: none;
}

/* スライド3が表示されているときのボタン制御 */
#slide3:checked ~ .navigation .prev3 {
    display: block;
}

#slide3:checked ~ .navigation .next3 {
    display: block;
}

#slide3:checked ~ .navigation .next {
    display: none;
}

#slide3:checked ~ .navigation .prev {
    display: none;
}
</style>