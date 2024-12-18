<template>
  <main class="main">
    <section v-for="(section, index) in sections" :key="index" :id="`image-${index}`" :class="{ active: currentIndex === index }" class="list-item">
      <div class="item-image">
        <img :src="section.image">
      </div>
      <div class="item-text">
        <div class="text-title">{{ section.title }}</div>
        <div class="text-desc">{{ section.description }}</div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const sections = ref([
  {
    id: 1,
    image: '/images/gugong.jpg',
    title: '故宫',
    description: '故宫是中国明清两代的皇家宫殿，位于北京市中心。'
  },
  {
    id: 2,
    image: '/images/yiheyuan.jpg',
    title: '颐和园',
    description: '颐和园是中国保存最完整的皇家园林，位于北京西郊。'
  },
  {
    id: 3,
    image: '/images/tiantan.jpg',
    title: '天坛',
    description: '天坛是明清两代皇帝祭天祈谷的场所，位于北京东城区。'
  },
  {
    id: 4,
    image: '/images/wanxiangshengong.jpg',
    title: '万象神宫',
    description: '万象神宫即武则天明堂，于垂拱四年(688年)十二月二十七日建成，号“万象神宫”，高300尺（今90余米）。'
  },
  {
    id: 5,
    image: '/images/epanggong.jpg',
    title: '阿房宫',
    description: '覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，勾心斗角。'
  },
  {
    id: 6,
    image: '/images/hanweiyanggong.jpg',
    title: '汉未央宫',
    description: '汉未央宫在长安城的西南部（今天的西安市西北5公里），是汉朝君臣朝会的地方'
  }
]);

</script>

<style scoped>
* {
  box-sizing: border-box;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.list-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45vh;
  overflow: hidden;
}
.list-item:hover .item-image::before {
  background-color: rgba(0, 0, 0, 0.2);
}
.item-image {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: translateZ(-50px) scale(2);
}
.item-image::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}
.item-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item-text {
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
}
.text-title {
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 20px;
}
.text-desc {
  font-size: 1.2rem;
}
</style>