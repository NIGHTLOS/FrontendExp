<template>
  <div class="carousel-container">
    <button @click="prevSlide" class="carousel-control prev">❮</button>
    <button @click="nextSlide" class="carousel-control next">❯</button>
    <van-swipe :autoplay="3000" indicator-color="white" ref="swipe">
      <van-swipe-item v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <img :src="slide.image" :alt="slide.alt" class="carousel-image" />
          <div class="slide-details" v-if="slide.title || slide.description">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const swipe = ref(null);

const slides = ref([
  {
    id: 1,
    image: '/images/gugong.jpg',
    alt: '故宫',
    title: '故宫',
    description: '故宫是中国明清两代的皇家宫殿，位于北京市中心。'
  },
  {
    id: 2,
    image: '/images/yiheyuan.jpg',
    alt: '颐和园',
    title: '颐和园',
    description: '颐和园是中国保存最完整的皇家园林，位于北京西郊。'
  },
  {
    id: 3,
    image: '/images/tiantan.jpg',
    alt: '天坛',
    title: '天坛',
    description: '天坛是明清两代皇帝祭天祈谷的场所，位于北京东城区。'
  },
  {
    id: 4,
    image: '/images/wanxiangshengong.jpg',
    alt: '万象神宫',
    title: '万象神宫',
    description: '万象神宫即武则天明堂，于垂拱四年(688年)十二月二十七日建成，号“万象神宫”，高300尺（今90余米）。富丽堂皇，准许民众入内参观。'
  },
  {
    id: 5,
    image: '/images/epanggong.jpg',
    alt: '阿房宫',
    title: '阿房宫',
    description: '覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，勾心斗角。'
  },
  {
    id: 6,
    image: '/images/hanweiyanggong.jpg',
    alt: '汉未央宫',
    title: '汉未央宫',
    description: '汉未央宫在长安城的西南部（今天的西安市西北5公里），是汉朝君臣朝会的地方'
  }
]);

const prevSlide = () => {
  swipe.value.prev();
};

const nextSlide = () => {
  swipe.value.next();
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
}

.slide-content {
  position: relative;
}

.slide-details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s;
}

.slide-content:hover .slide-details {
  opacity: 1;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}
</style>