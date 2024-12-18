<template>
  <Home_title />
  <div class="site-list-container">
    <div class="site-list">
      <router-link :to="{ name: 'Detail', params: { id: slide.id } }" v-for="slide in slides" :key="slide.id"
        class="palace-show-right-link">
        <PalaceShowRight :image="slide.image" :item="slide">
          <template #title>
            <h1>{{ slide.title }}</h1>
          </template>
          <template #description>
            <p>{{ slide.description }}</p>
          </template>
        </PalaceShowRight>
      </router-link>
    </div>
    <Button />
    <HomeButtom />
  </div>

</template>

<script setup>
import PalaceShowRight from '../components/PalaceShowRight.vue';
import Home_title from '../components/HomeTitle.vue';
import HomeButtom from '../components/HomeButtom.vue';
import Button from '../components/BackButton.vue'

const slides = [
  {
    id: 1,
    image: '/public/images/gugong.jpg',
    title: '故宫',
    description: '故宫是中国明清两代的皇家宫殿，位于北京市中心。'
  },
  {
    id: 2,
    image: '/public/images/yiheyuan.jpg',
    title: '颐和园',
    description: '颐和园是中国保存最完整的皇家园林，位于北京西郊。'
  },
  {
    id: 3,
    image: '/public/images/tiantan.jpg',
    title: '天坛',
    description: '天坛是明清两代皇帝祭天祈谷的场所，位于北京东城区。'
  },
  {
    id: 4,
    image: '/public/images/wanxiangshengong.jpg',
    title: '万象神宫',
    description: '万象神宫即武则天明堂，于垂拱四年(688年)十二月二十七日建成，号“万象神宫”，高300尺（今90余米）。'
  },
  {
    id: 5,
    image: '/public/images/epanggong.jpg',
    title: '阿房宫',
    description: '覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，勾心斗角。'
  },
  {
    id: 6,
    image: '/public/images/hanweiyanggong.jpg',
    title: '汉未央宫',
    description: '汉未央宫在长安城的西南部（今天的西安市西北5公里），是汉朝君臣朝会的地方'
  }
];
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.site-list-container {
  background: url('/public/images/zhutibeijing.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 20px 0;
}

.site-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
}

.palace-show-right-link {
  text-decoration: none;
  color: inherit;
  display: block;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.palace-show-right-link:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.site-content {
  position: relative;
  color: white;
  z-index: 10;
  max-width: 800px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 20px;
}

.site-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  margin-bottom: 10px;
  font-size: 36px;
}

p {
  font-size: 18px;
  line-height: 1.5;
}
</style>