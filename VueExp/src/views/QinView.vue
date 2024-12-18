<template>
  <el-container class="background-container">
    <el-header>
      <el-row justify="space-between" align="middle">
        <el-col :span="6">
          <h2 class="header-title">秦始皇陵</h2>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-button type="primary" @click="$router.go(-1)">返回</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-carousel
        height="500px"
        :interval="4000"
        arrow="always"
        indicator-position="outside"
        :autoplay="true"
        class="carousel-container"
      >
        <el-carousel-item v-for="(item, index) in carouselImages" :key="index">
          <div class="carousel-img-container">
            <img :src="item" alt="秦始皇陵景点" class="carousel-img" />
          </div>
        </el-carousel-item>
      </el-carousel>

      <el-card shadow="always" class="introduction-card">
        <h3>秦始皇陵简介</h3>
        <p>
          秦始皇陵是中国历史上规模最大、设计最复杂的帝王陵墓之一，被誉为中华文明的瑰宝。
          它是中国历史上第一位皇帝——秦始皇的陵寝，始建于公元前247年，在其统治的数十年间不断修建。
          秦始皇陵整体呈“回”字形，面积约56平方公里，相当于78个故宫的大小，结构复杂，内涵深远。
        </p>
        <p>
          陵墓地宫根据《史记》记载，模仿了当时的秦国疆域，内部设计包括用水银模拟的江河湖海，以及宝石镶嵌的日月星辰，展现出令人惊叹的匠心。
          此外，陵墓中布满防盗机关和设计巧妙的防御系统，使得地宫至今未被完整发掘。
        </p>
      </el-card>


      <el-card shadow="always" class="map-card">
        <h3>地理位置</h3>
        <p>
          秦始皇陵位于陕西省西安市临潼区骊山北麓，东接骊山，南依渭水，地理位置优越。
          这一地区被认为是风水宝地，山水环绕，既体现了秦始皇对自然的敬畏，也展示了其统治理念与宇宙观的结合。
        </p>
        <div id="map-container" class="map-container"></div>
      </el-card>

      <el-row :gutter="20" class="feature-row">
        <el-col :span="8">
          <el-card shadow="hover">
            <h3>兵马俑</h3>
            <p>
              兵马俑是秦始皇陵最具代表性的陪葬坑之一，被誉为“世界第八大奇迹”。
              这些陶俑以写实风格精雕细琢，每一件都展现出独特的表情和姿态，生动再现了秦军的英勇和气势。
              目前已发现的兵马俑坑包括一号坑、二号坑和三号坑，每个坑内的布局和内容都各具特色。
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <h3>陵墓布局</h3>
            <p>
              秦始皇陵的整体布局以骊山为背景，呈现出天圆地方的结构理念，象征天地的完美结合。
              陵墓的建筑群包括主陵、地宫、内外城墙以及上千个大小陪葬坑，体现了秦代工程技术的巅峰。
              地宫被誉为地下的“咸阳城”，展示了秦始皇希望“事死如事生”的信念。
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <h3>地下宫殿</h3>
            <p>
              地宫是秦始皇陵的核心部分，被认为是秦代帝国疆域的缩影。
              它包含了数不胜数的珍宝和象征性建筑，如模拟江河湖海的水银池、再现日月星辰的穹顶，以及代表秦始皇绝对权威的巨大棺椁。
              地宫至今未被完全打开，成为中外学术界持续探索的对象。
            </p>
          </el-card>
        </el-col>
      </el-row>

      <el-card shadow="always" class="recommended-routes">
        <h3>推荐参观线路</h3>
        <el-divider></el-divider>
        <p>
          <strong>经典线路：</strong> 主陵墓入口 - 兵马俑一号坑 - 地下宫殿 - 秦始皇兵马俑博物馆
        </p>
        <p>
          <strong>深度考古之旅：</strong> 兵马俑一号坑 - 二号坑 - 三号坑 - 陵墓考古实验室 - 地宫遗址
        </p>
        <p>
          <strong>家庭亲子线路：</strong> 互动展示区 - 兵马俑模型制作体验 - 儿童文化学习区 - 秦文化艺术中心
        </p>
      </el-card>
    </el-main>

    <el-footer>
      <p class="footer-text">&copy; 2024 秦始皇陵 | 版权所有</p>
    </el-footer>
  </el-container>
</template>

<script>
import { ref, onMounted } from "vue";
import work1 from "../assets/qin/qinshihuang1.png";
import work2 from "../assets/qin/qinshihuang2.png";
import work3 from "../assets/qin/qinshihuang3.png";

export default {
  name: "QinShiHuangMausoleum",
  setup() {
    const carouselImages = ref([work1, work2, work3]);

    const initMap = () => {
      if (typeof window.BMap !== "undefined") {
        const map = new window.BMap.Map("map-container");
        const point = new window.BMap.Point(109.274246, 34.383556);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
        const marker = new window.BMap.Marker(point);
        map.addOverlay(marker);
      } else {
        console.error("Baidu Map API加载失败");
      }
    };

    onMounted(() => {
      const script = document.createElement("script");
      script.src =
        "https://api.map.baidu.com/getscript?v=3.0&ak=BJo5L2ted9g1VE7ydE8etCxaB1CxBgwH";
      script.onload = initMap;
      document.body.appendChild(script);
    });

    return {
      carouselImages,
    };
  },
};
</script>

<style scoped>
.background-container {
  background-color: #eae1d0;
  padding: 20px;
  min-height: 100vh;
}

.header-title {
  font-size: 28px;
  font-weight: bold;
  color: #8b4513;
}

.carousel-container {
  margin: 20px auto;
  width: 80%;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.carousel-img-container {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
}

.carousel-img {
  max-width: 100%;
  max-height: 100%;
}

.introduction-card,
.map-card,
.recommended-routes {
  background-color: #fffbea;
  border: 1px solid #d4b483;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
}

.feature-row {
  margin: 20px 0;
}

.footer-text {
  text-align: center;
  font-size: 14px;
  color: #555;
  margin-top: 20px;
}
</style>
