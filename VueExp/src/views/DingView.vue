<template>
  <el-container class="background-container">
    <el-header>
      <el-row justify="space-between" align="middle">
        <el-col :span="6">
          <h2 class="header-title">永定陵</h2>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-card shadow="always" class="map-card">
        <h3>地图展示</h3>
        <div id="map-container" class="map-container"></div>
      </el-card>
      <el-card shadow="always" class="introduction-card">
        <h3>永定陵简介</h3>
        <p>
          永定陵是明代第十位皇帝朱祐樘的陵墓，位于北京昌平明十三陵之一，以其独特的建筑风格和历史价值被列为国家重点文物保护单位。
        </p>
        <p>
          朱祐樘作为明代一位励精图治的皇帝，在位期间崇尚节俭、注重民生，其陵墓的设计也秉承了这一风格。永定陵周边还埋藏着许多与朱祐樘相关的历史遗迹。
        </p>
        <el-image
          :src="wailian"
          alt="永定陵全景"
          style="width: 100%; height: auto; margin-top: 15px"
        />
      </el-card>
      <el-card shadow="always" class="carousel-card">
        <h3>永定陵风光</h3>
        <el-carousel indicator-position="outside">
          <el-carousel-item
            v-for="(item, index) in carouselImages"
            :key="index"
          >
            <img :src="item" alt="永定陵风光" class="carousel-image" />
          </el-carousel-item>
        </el-carousel>
      </el-card>
      <el-card shadow="always" class="tourist-info-card">
        <h3>旅游信息</h3>
        <ul class="tourist-info-list">
          <li><strong>开放时间：</strong>每日8:00 - 17:30</li>
          <li><strong>门票价格：</strong>成人票 60元，学生票 30元</li>
          <li><strong>最佳旅游季节：</strong>秋季，凉爽宜人</li>
          <li>
            <strong>交通方式：</strong
            >乘坐公交或地铁至昌平明十三陵站，再换乘景区接驳车
          </li>
        </ul>
      </el-card>
      <el-card shadow="always" class="feedback-card">
        <h3>游客评价</h3>
        <el-rate v-model="rating" show-text />
        <el-input
          type="textarea"
          placeholder="请留下您的评价"
          v-model="feedback"
          rows="3"
          class="feedback-input"
        />
        <el-button type="primary" @click="submitFeedback">提交评价</el-button>
        <ul class="feedback-list">
          <li v-for="(item, index) in feedbackList" :key="index">
            <strong>评分：</strong>{{ item.rating }}星 - {{ item.content }}
          </li>
        </ul>
      </el-card>
    </el-main>
    <el-footer class="footer">
      <el-button type="primary" class="return-button" @click="goBack">
        返回
      </el-button>
      <p class="footer-text">&copy; 2024 版权所有 | 保留所有权利</p>
    </el-footer>
  </el-container>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { loadBaiduMap } from "../composables/map";
import work1 from "../assets/song/song1.webp";
import work2 from "../assets/song/song2.png";
import work3 from "../assets/song/song3.webp";
import work4 from "../assets/song/song4.jpg"

export default {
  name: "YongDingLing",
  setup() {
    const initMap = () => {
      const map = new window.BMap.Map("map-container");
      const point = new window.BMap.Point(112.58, 34.44);
      map.centerAndZoom(point, 14);
      map.enableScrollWheelZoom(true);
      const marker = new window.BMap.Marker(point);
      map.addOverlay(marker);
    };

    const carouselImages = ref([work1, work2, work3]);
    const wailian=work4;
    const rating = ref(0);
    const feedback = ref("");
    const feedbackList = reactive([]);

    const submitFeedback = () => {
      if (feedback.value.trim()) {
        feedbackList.push({
          rating: rating.value,
          content: feedback.value.trim(),
        });
        feedback.value = "";
        rating.value = 0;
      }
    };
    const goBack = () => {
      window.history.back();
    };
    onMounted(() => {
      loadBaiduMap(initMap);
    });

    return {
      carouselImages,
      rating,
      feedback,
      feedbackList,
      wailian,
      goBack,
      submitFeedback,
    };
  },
};
</script>

<style scoped>
.background-container {
  background: linear-gradient(to bottom, #fff8e1, #ffe4c4);
  min-height: 100vh;
  padding: 20px;
}

.header {
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.header-title {
  font-size: 28px;
  font-weight: bold;
  color: #4a4a4a;
  text-align: center;
}

.card-title {
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
}

.map-card,
.introduction-card,
.carousel-card,
.tourist-info-card {
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 10px;
}
.carousel-image,
.introduction-image {
  width: 100%;
  height: 400px; 
  object-fit: contain;
  border-radius: 8px;
}
.tourist-info-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.tourist-info-list li {
  font-size: 16px;
  margin-bottom: 10px;
}
.feedback-input {
  margin: 10px 0;
}

.feedback-list {
  list-style: none;
  padding-left: 0;
  margin-top: 15px;
}
.footer {
  text-align: center;
  margin-top: 30px;
}

.footer-text {
  font-size: 14px;
  color: #666;
}

.return-button {
  background-color: #ffa726;
  color: #fff;
  border: none;
  margin-top: 10px;
}
</style>
