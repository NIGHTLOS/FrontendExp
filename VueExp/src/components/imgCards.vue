<script>
export default {
  name: 'ImgCards',
  data() {
    return {
      imageItems: ['greatWall', 'nanjingWall', 'shanhaiPass', 'smokeTower', 'xianTower']
    };
  },
  computed: {
    imagePaths() {
      return this.imageItems.map(item => require(`../assets/img/${item}.jpg`));
    },
    // 新增一个计算属性来获取路由路径
    routes() {
      return this.imageItems.map(item => `/wall/${item}`);
    }
  }
}
</script>

<template>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="(item, index) in imageItems" :key="index">
      <!-- 使用v-bind绑定to属性，并使用计算属性routes -->
      <router-link :to="routes[index]">
        <img :src="imagePaths[index]" :alt="item">
      </router-link>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>

.el-carousel__item:nth-child(2n),
.el-carousel__item:nth-child(2n + 1) {
  background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);
}
</style>