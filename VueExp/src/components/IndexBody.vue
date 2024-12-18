<script>
export default {
  name: 'ImgCards',
  data() {
    return {
      imageItems: ['greatWall01', 'nanjingWall01', 'shanhaiPass01', 'smokeTower01', 'xianTower01'],
      descriptions: {
        'greatWall01': '长城（The Great Wall）\n\n中国古代的军事防御工程\n世界上最长的防御体系',
        'nanjingWall01': '南京城墙（Nanjing City Wall）\n\n规模宏大,结构坚固\n世界上保存最完整的古城墙之一',
        'shanhaiPass01': '山海关（Shanhai Pass）\n\n军事要塞\n“天下第一关”\n古代“丝绸之路”的重要通道',
        'smokeTower01': '烽火台（Beacon Tower）\n\n古代传递军情的重要设施\n交通要道上的情报传输站',
        'xianTower01': '西安城墙（Xian City Wall）\n\n中国现存规模最大、保存最完整的古代城垣\n'
      }
    };
  },
  computed: {
    imagePaths() {
      return this.imageItems.map(item => require(`../assets/img/${item}.jpg`));
    }
  },
  methods: {
    getDescription(path) {
      const imageName = path.split('/').pop().split('.')[0];
      return this.descriptions[imageName] || 'Description not available';
    },
    handleMouseOver(event) {
      event.target.style.transform = 'scale(1.2)';
      event.target.style.transition = 'transform 0.3s ease';
    },
    handleMouseOut(event) {
       event.target.style.transform = 'scale(1)';
      event.target.style.transition = 'transform 0.3s ease';
    }
  }
}
</script>

<template>
  <div class="image-container">
    <div class="image-row first-row">
      <router-link v-for="(path, index) in imagePaths.slice(1, 3)" :key="path" :to="`/wall/${imageItems[index + 1].replace(/01$/, '')}`" class="image-link">
        <div class="image-card" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
          <img :src="path" alt="" class="image">
          <div class="description">{{ getDescription(path) }}</div>
        </div>
      </router-link>
    </div>
    <div class="image-row middle-row">
      <router-link :to="`/wall/${imageItems[0].replace(/01$/, '')}`" class="image-link">
        <div class="image-card" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
          <img :src="imagePaths[0]" alt="" class="image">
          <div class="description">{{ getDescription(imagePaths[0]) }}</div>
        </div>
      </router-link>
    </div>
    <div class="image-row last-row">
      <router-link v-for="(path, index) in imagePaths.slice(3, 5)" :key="path" :to="`/wall/${imageItems[index + 3].replace(/01$/, '')}`" class="image-link">
        <div class="image-card" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
          <img :src="path" alt="" class="image">
          <div class="description">{{ getDescription(path) }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>



<style scoped>
.image-container {
  display: flex;
  flex-direction: column;
}

.image-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.first-row,
.last-row {
  justify-content: space-between;
}

.middle-row {
  justify-content: center;
}

.image-card {
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  flex: 0 1 45%;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.image {
  width: 40%;
  height: auto;
  display: block;
  margin-right: 60px; 
}

.description {
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  padding: 1.5em;
  white-space: pre-line; 
  word-wrap: break-word; 
  overflow: hidden;
  font-family: 'KaiTi', sans-serif;
}

.last-row {
  margin-bottom: 0;
}

.image-link {
  text-decoration: none; 
}
</style>