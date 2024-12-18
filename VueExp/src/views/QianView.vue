<template>
  <el-container class="background-container">
    <el-header class="header">
      <el-row justify="space-between" align="middle">
        <el-col :span="6">
          <h2 class="header-title">乾陵</h2>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-card shadow="hover" class="map-card">
        <h3 class="card-title">地图展示</h3>
        <div id="map-container" class="map-container"></div>
      </el-card>

      <el-card shadow="hover" class="introduction-card">
        <h3 class="card-title">乾陵简介</h3>
        <p>
          乾陵是中国唐代高宗李治与武则天的合葬陵墓，位于陕西省咸阳市乾县梁山上。
          它是中国古代帝王陵寝的杰出代表，也是世界上独一无二的一座皇帝与皇后合葬的陵墓。
          全陵以梁山为主体，依山而建，规模宏伟，呈中轴对称布局。
        </p>
        <p>
          陵园周围分布着大小陪葬墓17座，其中保存完整的石刻群、历经千年的封土堆和珍贵的陪葬文物，
          构成了一幅集文化、艺术和历史于一体的壮丽画卷，是研究唐代历史的重要遗址。
        </p>
        <el-image
          :src="wailian"
          alt="乾陵全景"
          class="introduction-image"
        />
      </el-card>

      <el-card shadow="hover" class="carousel-card">
        <h3 class="card-title">乾陵风光</h3>
        <el-carousel
          indicator-position="outside"
          autoplay="true"
          arrow="always"
        >
          <el-carousel-item
            v-for="(item, index) in carouselImages"
            :key="index"
          >
            <img :src="item" alt="乾陵风光" class="carousel-image" />
          </el-carousel-item>
        </el-carousel>
      </el-card>

      <el-card shadow="hover" class="tourist-info-card">
        <h3 class="card-title">旅游信息</h3>
        <ul class="tourist-info-list">
          <li>
            <strong>开放时间：</strong> 每日8:00 - 18:00（旺季延长至18:30）
          </li>
          <li>
            <strong>门票价格：</strong> 成人票80元，学生票40元。60岁以上老人免费
          </li>
          <li><strong>最佳旅游季节：</strong> 春秋两季，气候宜人，景色优美</li>
          <li>
            <strong>交通方式：</strong> 从西安市乘坐长途汽车或自驾，约1小时
          </li>
          <li><strong>特别提示：</strong> 建议穿舒适运动鞋，携带饮用水</li>
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
import work1 from "../assets/tang/tang1.webp";
import work2 from "../assets/tang/tang2.webp";
import work3 from "../assets/tang/tang3.jpg";
import work4 from "../assets/tang/tang4.webp"

export default {
  name: "TangGaoZongQianLing",
  setup() {
    const initMap = () => {
      const map = new window.BMap.Map("map-container");
      const point = new window.BMap.Point(108.224856, 34.55352);
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
       carouselImages,
      rating,
      feedback,
      feedbackList,
      goBack,
      submitFeedback,
      wailian,
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
