<template>
  <el-container class="background-container">
    <el-header>
      <el-row justify="space-between" align="middle">
        <el-col :span="6">
          <h2 class="header-title">清西陵</h2>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <el-card shadow="always" class="map-card">
        <h3>地图展示</h3>
        <div id="map-container" class="map-container"></div>
        <p v-if="mapError" class="error-text">地图加载失败，请稍后再试。</p>
      </el-card>

      <el-card shadow="always" class="introduction-card">
        <h3>清西陵简介</h3>
        <p>
          清西陵是清朝四位皇帝的长眠之地，位于河北省保定市易县，是清代皇家陵寝的重要组成部分。清西陵始建于1730年，是清世宗雍正皇帝的陵寝所在地，同时安葬了嘉庆帝、道光帝、光绪帝及其后妃、宗室，总计包含14座皇陵及众多附属建筑。
        </p>
        <p>
          清西陵整体布局和建筑风格独具特色，充分体现了清代皇家建筑的恢宏气势与精湛工艺。陵区依山而建，风水格局讲究，是古代建筑和文化的瑰宝，具有极高的历史和艺术价值。
        </p>
        <p>
          2000年，清西陵与清东陵一同被联合国教科文组织列为世界文化遗产，为后人留下了珍贵的历史文化遗产，吸引了世界各地游客慕名而来。
        </p>
        <el-image
          :src="wailian"
          alt="清西陵全景"
          style="width: 100%; height: auto; margin-top: 15px"
        />
      </el-card>

      <el-card shadow="always" class="carousel-card">
        <h3>清西陵风光</h3>
        <el-carousel indicator-position="outside">
          <el-carousel-item
            v-for="(item, index) in carouselImages"
            :key="index"
          >
            <img :src="item" alt="清西陵风光" class="carousel-image" />
          </el-carousel-item>
        </el-carousel>
      </el-card>

      <el-card shadow="always" class="tourist-info-card">
        <h3>旅游信息</h3>
        <ul>
          <li><strong>开放时间：</strong>每日8:00 - 18:00（节假日可能延长）</li>
          <li>
            <strong>门票价格：</strong>成人票 50元，学生票
            25元（凭有效证件享受优惠）
          </li>
          <li>
            <strong>交通方式：</strong>
            1.
            公共交通：从北京市区乘坐长途客车至易县，再换乘当地公交或出租车至景区。
            2.
            自驾：从北京出发，沿京昆高速行驶至易县出口下，按指示牌前往景区，车程约2小时。
          </li>
          <li>
            <strong>推荐景点：</strong>
            泰陵——雍正皇帝陵墓，建筑雄伟庄重；昌西陵——道光皇帝陵墓，园区景色秀美；崇陵——光绪皇帝陵墓，以陵寝风格简朴而著称。
          </li>
          <li>
            <strong>最佳旅游季节：</strong
            >春季与秋季，气候宜人，适合漫步欣赏自然风光与文化遗迹。
          </li>
          <li>
            <strong>特别提示：</strong
            >建议佩戴舒适的步行鞋，带上防晒用品，并遵守景区规则，保护文化遗产。
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
import work1 from "../assets/qing/qing1.webp";
import work2 from "../assets/qing/qing2.webp";
import work3 from "../assets/qing/qing3.png";
import work4 from "../assets/qing/qing4.webp"

export default {
  name: "QingXiLing",
  setup() {
    const initMap = () => {
      const map = new window.BMap.Map("map-container");
      const point = new window.BMap.Point(115.482917, 39.351631);
      map.centerAndZoom(point, 14);
      map.enableScrollWheelZoom(true);
      const marker = new window.BMap.Marker(point);
      map.addOverlay(marker);
    };
    const goBack = () => {
      window.history.back();
    };

    onMounted(() => {
      loadBaiduMap(initMap);
    });

    const wailian=work4;
    const carouselImages = ref([work1, work2, work3]);
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

    return {
      wailian,
      carouselImages,
      rating,
      feedback,
      feedbackList,
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
