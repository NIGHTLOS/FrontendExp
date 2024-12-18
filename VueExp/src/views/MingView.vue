<template>
  <el-container class="background-container">
    <el-header class="header">
      <el-row justify="space-between" align="middle">
        <el-col :span="6">
          <h2 class="header-title">明十三陵</h2>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-card shadow="hover" class="map-card">
        <h3 class="card-title">地图展示</h3>
        <div id="map-container" class="map-container"></div>
      </el-card>

      <el-card shadow="hover" class="introduction-card">
        <h3 class="card-title">明十三陵简介</h3>
        <p>
          明十三陵是中国明代十三位皇帝的陵墓群，位于北京市昌平区天寿山南麓，是中国古代皇陵建筑的巅峰之作。陵区整体规划秉承“天人合一”的理念，建筑布局体现了极高的风水和建筑艺术水平。
        </p>
        <p>
          明十三陵始建于明永乐七年（1409年），历经230多年，修建了十三座帝陵及其附属建筑。十三陵中的长陵是明成祖朱棣的陵墓，是陵区内规模最大、保存最完好的皇陵；定陵则因其发掘出土的大量珍贵文物而闻名。
        </p>
        <p>
          2003年，明十三陵被列入《世界文化遗产名录》，其壮丽的建筑和丰富的历史文化内涵吸引了世界各地的游客。这里不仅是一座陵墓群，更是研究明代历史和文化的宝贵资源。
        </p>

        <el-image
          :src="wailian"
          alt="明十三陵全景"
          class="introduction-image"
        />
      </el-card>

      <el-card shadow="hover" class="carousel-card">
        <h3 class="card-title">明十三陵风光</h3>
        <el-carousel
          indicator-position="outside"
          autoplay="true"
          arrow="always"
        >
          <el-carousel-item
            v-for="(item, index) in carouselImages"
            :key="index"
          >
            <img :src="item" alt="明十三陵风光" class="carousel-image" />
          </el-carousel-item>
        </el-carousel>
      </el-card>

      <el-card shadow="hover" class="tourist-info-card">
        <h3 class="card-title">旅游信息</h3>
        <ul class="tourist-info-list">
          <li>
            <strong>开放时间：</strong>每日8:30 - 17:30（建议提前1小时入园）
          </li>
          <li>
            <strong>门票价格：</strong>成人票 60元，学生票
            30元（凭有效证件购买）
          </li>
          <li>
            <strong>交通方式：</strong
            >乘地铁昌平线至昌平东关站，换乘314路公交直达明十三陵；自驾游客可导航至“明十三陵游客服务中心”，景区内有充足的停车位。
          </li>
          <li>
            <strong>附近景点推荐：</strong>
            长陵——明成祖朱棣的陵墓，雄伟壮观；定陵——以地下宫殿和珍贵文物著称；昭陵——明显宗朱见深的陵墓，以建筑精美著称。
          </li>
          <li>
            <strong>最佳旅游季节：</strong
            >春秋两季，气候宜人，景区景色最为优美。
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
import work1 from "../assets/ming/ming1.webp";
import work2 from "../assets/ming/ming2.jpg";
import work3 from "../assets/ming/ming3.png";
import work4 from "../assets/ming/ming4.jpg";
export default {
  name: "MingShiSanLing",
  setup() {
    const initMap = () => {
      const map = new window.BMap.Map("map-container");
      const point = new window.BMap.Point(116.22024, 40.25385);
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

    const carouselImages = ref([work1, work2, work3]);
    const wailian = work4;
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
