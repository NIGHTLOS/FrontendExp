<template>
  <el-container class="background-container">
    <el-header class="header">
      <el-row justify="space-between" align="middle">
        <el-col :span="6">
          <h2 class="header-title">{{ $t("headerTitle") }}</h2>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-dropdown>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="switchLanguage('zh')"
                  >中文</el-dropdown-item
                >
                <el-dropdown-item @click="switchLanguage('en')"
                  >English</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
            <span class="el-dropdown-link">
              {{ $t("language") }} <i class="el-icon-arrow-down"></i>
            </span>
          </el-dropdown>
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
        class="carousel"
      >
        <el-carousel-item v-for="(item, index) in carouselImages" :key="index">
          <img :src="item" alt="汉武帝茂陵景点" class="carousel-img" />
        </el-carousel-item>
      </el-carousel>

      <el-row :gutter="20" style="margin-top: 20px">
        <el-col :span="12">
          <el-card shadow="hover" class="content-card">
            <img class="mausoleum-img" :src="mausoleumImage" alt="汉武帝茂陵" />
            <p>{{ $t("mausoleum.intro1") }}</p>
            <p>{{ $t("mausoleum.intro2") }}</p>
          </el-card>
        </el-col>
        <el-col :span="12">
          <timeline />
        </el-col>
      </el-row>

      <el-card shadow="always" class="map-card">
        <h3>{{ $t("location.title") }}</h3>
        <p class="map-description">{{ $t("location.description") }}</p>
        <div id="map-container" class="map-container"></div>
      </el-card>

      <el-row :gutter="20" class="feature-row">
        <el-col v-for="feature in features" :key="feature.title" :span="8">
          <el-card shadow="hover" class="feature-card">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </el-card>
        </el-col>
      </el-row>

      <el-card shadow="always" class="routes-card">
        <h3>{{ $t("routes.title") }}</h3>
        <el-divider></el-divider>
        <div v-for="route in routes" :key="route.name" class="route-item">
          <p>
            <strong>{{ route.name }}：</strong> {{ route.details }}
          </p>
        </div>
      </el-card>

      <el-card shadow="always" class="comments-card">
        <h3>{{ $t("comments.title") }}</h3>
        <el-input
          v-model="newComment"
          type="textarea"
          placeholder="请输入评论内容"
          rows="3"
          maxlength="200"
        ></el-input>
        <el-button
          type="primary"
          class="submit-button"
          style="margin-top: 10px"
          @click="addComment"
        >
          {{ $t("comments.submit") }}
        </el-button>
        <el-divider></el-divider>
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <p>
            <strong>{{ comment.user }}</strong
            >:{{ comment.content }}
          </p>
          <span class="comment-time">{{ comment.time }}</span>
        </div>
      </el-card>
    </el-main>

    <el-footer class="footer">
      <p class="footer-text">
        &copy; 2024 {{ $t("footer.copy") }} | {{ $t("footer.rights") }}
      </p>
      <el-button type="primary" class="return-button" @click="$router.go(-1)">
        {{ $t("footer.return") }}
      </el-button>
    </el-footer>
  </el-container>
</template>

<script>
import { ref, onMounted } from "vue";
import Timeline from "./Timeline.vue";
import i18n from "../i18n";
import work1 from "../assets/han/mao2.webp";
import work2 from "../assets/han/mao3.webp";
import work3 from "../assets/han/mao4.jpg";
import work4 from "../assets/han/mao1.webp";

export default {
  name: "HanWuDiMaoLing",
  components: { Timeline },
  setup() {
    const carouselImages = ref([work1, work2, work3]);
    const mausoleumImage = ref(work4);

    const features = ref([
      {
        title: i18n.global.t("features.title1"),
        description: i18n.global.t("features.desc1"),
      },
      {
        title: i18n.global.t("features.title2"),
        description: i18n.global.t("features.desc2"),
      },
      {
        title: i18n.global.t("features.title3"),
        description: i18n.global.t("features.desc3"),
      },
    ]);

    const routes = ref([
      {
        name: i18n.global.t("routes.classic"),
        details: i18n.global.t("routes.classic_details"),
      },
      {
        name: i18n.global.t("routes.history"),
        details: i18n.global.t("routes.history_details"),
      },
      {
        name: i18n.global.t("routes.family"),
        details: i18n.global.t("routes.family_details"),
      },
    ]);

    const comments = ref([
      {
        id: 1,
        user: "游客A",
        content: "茂陵真是壮观！",
        time: "2024-11-22 10:00",
      },
      {
        id: 2,
        user: "游客B",
        content: "很喜欢这里的文化氛围。",
        time: "2024-11-22 11:00",
      },
    ]);

    const newComment = ref("");

    const addComment = () => {
      if (!newComment.value.trim()) {
        return alert(i18n.global.t("comments.empty")); // 防止空评论
      }
      const now = new Date();
      const formattedTime = `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(
        now.getHours()
      ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      comments.value.push({
        id: comments.value.length + 1,
        user: i18n.global.t("comments.defaultUser"),
        content: newComment.value,
        time: formattedTime,
      });
      newComment.value = "";
    };

    const switchLanguage = (lang) => {
      i18n.global.locale = lang;
    };

    const initMap = () => {
      const map = new window.BMap.Map("map-container");
      const point = new window.BMap.Point(108.609434, 34.394572);
      map.centerAndZoom(point, 14);
      map.enableScrollWheelZoom(true);
      const marker = new window.BMap.Marker(point);
      map.addOverlay(marker);
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
      mausoleumImage,
      features,
      routes,
      comments,
      newComment,
      addComment,
      switchLanguage,
    };
  },
};
</script>

<style scoped>
.background-container {
  background: linear-gradient(to bottom, #fffbe6, #f4e3c1);
  padding: 20px;
  min-height: 100vh;
}

.header {
  /* background-color: #fff4e0; */
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.header-title {
  font-size: 28px;
  /* color: #b3541e; */
  font-weight: bold;
}

.carousel {
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.carousel-img {
  display: block; 
  margin: auto; 
  border-radius: 12px;
  max-height: 100%; 
  max-width: 100%; 
  object-fit: contain; 
  object-position: center;
}


.content-card,
.map-card,
.routes-card,
.comments-card {
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
}
.feature-card {
  border-radius: 12px;
  background-color: #fef7e3;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.map-container {
  height: 400px;
  border-radius: 12px;
  margin-top: 10px;
}

.comment-item {
  margin-bottom: 15px;
  background: #fafafa;
  padding: 10px;
  border-radius: 8px;
}
.comment-time {
  font-size: 12px;
  color: #888;
}
.submit-button {
  float: right;
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
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #b3541e;
  border: none;
}
</style>
