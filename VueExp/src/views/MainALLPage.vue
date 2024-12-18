<template>
  <div class="main-page">
    <!-- 导航栏 -->
    <div class="nav-bar">
      <div class="nav-left">Web前端开发第五组课设展示</div>
      <div class="nav-right">
        <a
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.link"
          class="nav-item"
        >
          {{ item.name }}
        </a>
      </div>
    </div>

    <!-- 图片轮播 -->
    <div class="carousel-container">
      <el-carousel
        indicator-position="outside"
        height="65vh"
        :interval="2500"
        arrow="always"
        class="fade-in"
      >
        <el-carousel-item v-for="index in 10" :key="index">
          <div
            class="carousel-image"
            :style="{
              backgroundImage: `url(${require(`@/assets/img/min${index}.jpeg`)})`
            }"
          ></div>
        </el-carousel-item>
      </el-carousel>

      <div class="static-content">
        <h1 class="carousel-title fade-in">古筑知微</h1>
        <p class="carousel-description fade-in">
          来自绵绵历史长河，为了历史变迁的证明而存在。
        </p>
      </div>
    </div>

    <!-- 分界线 -->
    <hr class="divider fade-in" />

    <!-- 文本框 -->
    <div class="text-container fade-in">
      <div class="text-box">
        <p>
          中国古代建筑是中华文明的重要组成部分，其形式多样，风格独特。
          无论是宏伟壮丽的宫殿建筑，还是静谧庄严的宗教建筑，
          抑或是神秘深邃的陵墓建筑、清雅秀丽的园林建筑，以及坚固威严的城墙与防御工事，
          都展现了古人对功能与美学的卓越追求。
          这些建筑承载着历史、文化与智慧，是中华民族不朽的瑰宝。
        </p>
      </div>
    </div>

    <!-- 分界线 -->
    <hr class="divider fade-in" />

    <!-- 垂直图片展示 -->
    <div class="vertical-images">
      <div
        class="image-section observer-section"
        v-for="(item, index) in navItems"
        :key="index"
      >
        <img
          class="full-width-image"
          :src="require(`@/assets/img/min${11 + index}.jpeg`)"
          alt="section image"
        />
        <div class="text-overlay">
          <div class="text-content">
            <h2 class="image-title">{{ item.name }}</h2>
            <p class="image-description">
              {{ item.description }}
            </p>
          </div>
          <a :href="item.link" class="details-button">
            查看详情 <span class="arrow">>>></span>
          </a>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="footer fade-in">
      <p>© 2024 东北林业大学计算机与控制工程学院 | 仅课设展示</p>
      <p>
        <a href="#" class="footer-link">关于我们</a> |
        <a href="#" class="footer-link">隐私政策</a> |
        <a href="#" class="footer-link">联系我们</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainALLPage",
  data() {
    return {
      navItems: [
        { name: "宫殿建筑", link: "palace", description: "中国古代宫殿建筑是帝王权力的象征，讲究中轴对称、恢弘壮丽，布局严谨。主要以北京故宫为代表，采用大屋顶、斗拱等结构，体现皇权威严与礼制观念。宫殿建筑融合功能与美学，既是政治中心，也是历史文化的传承地。" },
        { name: "宗教建筑", link: "religion", description: "宗教建筑包括寺庙、道观和佛塔，庄严肃穆，体现对神灵的敬畏和崇拜。以洛阳白马寺、大昭寺为代表，融合汉族、藏族等不同文化风格，布局讲究空间秩序，装饰丰富，传递深厚的宗教情感。" },
        { name: "陵墓建筑", link: "tomb", description: "陵墓建筑是纪念逝者的重要建筑，体现古代人的生死观和等级制度。以秦始皇陵、明十三陵为代表，布局庞大，地上建筑与地下宫殿结合，富有神秘气息，彰显权贵与纪念意义。" },
        { name: "园林建筑", link: "garden", description: "园林建筑以自然与人文的结合著称，追求意境美与隐逸情怀。以苏州拙政园、承德避暑山庄为代表，通过亭台楼阁、小桥流水的布局，展现山水画般的空间艺术，是休闲与审美的结合。" },
        { name: "城墙和防御建筑", link: "wall", description: "城墙与防御建筑是中国古代城市和边疆防御体系的重要组成部分。以西安城墙、万里长城为代表，结构坚固，设计巧妙，不仅用于军事防御，也见证了中华民族的团结与智慧。" },
      ],
    };
  },
  mounted() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 当元素进入视口时，添加动画类
          entry.target.classList.add("fade-in");
        } else {
          // 当元素离开视口时，移除动画类
          entry.target.classList.remove("fade-in");
        }
      });
    },
    {
      threshold: 0.1, // 元素 10% 进入视口时触发
    }
  );

  // 对所有需要动画的部分添加观察器
  document.querySelectorAll(".observer-section").forEach((section) => {
    observer.observe(section);
  });
},

};
</script>

<style scoped>
/* 渐入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 为需要的区域添加渐入效果 */
.fade-in {
  animation: fadeIn 1.5s ease-in-out;
}
/* 全局样式 */
body,
html {
  margin: 0;
  padding: 0;
}

/* 主页面 */
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* 导航栏 */
.nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  box-sizing: border-box;
  z-index: 1000;
}

.nav-item {
  margin-left: 15px;
  color: white;
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 5px;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.2); /* 设置悬停背景颜色 */
  color: #ffd700; /* 设置悬停字体颜色 */
}

/* 图片轮播 */
.carousel-container {
  width: 100%;
}

.carousel-image {
  height: 65vh;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
}

.static-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
}

/* 静态标题 */
.carousel-title {
  font-size: 4rem; /* 增大字体 */
  font-weight: bold; /* 加粗 */
  letter-spacing: 3px; /* 增加字间距 */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* 添加阴影 */
}

.carousel-description {
  font-size: 1.5rem;
  margin-top: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* 添加阴影 */
}
/* 分界线 */
.divider {
  width: 80%;
  height: 4px;
  background-color: #ddd;
  margin: 20px auto;
  border: none;
}

/* 中间文本框的容器 */
.text-container {
  display: flex; /* 使用 Flexbox */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%; /* 确保宽度填满父容器 */
  height: 200px; /* 设置固定高度，方便居中调整 */
  padding: 20px;
  box-sizing: border-box; /* 包含内边距 */
  background-color: #f9f9f9; /* 添加背景色以区分 */
}

/* 文本框 */
.text-box {
  max-width: 1090px; /* 限制最大宽度 */
  text-align: justify; /* 文本对齐 */
  font-size: 1.2rem; /* 字体大小 */
  line-height: 1.8; /* 行高 */
  color: #333; /* 字体颜色 */
}


/* 垂直图片 */
.vertical-images {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .image-section {
    position: relative;
  }
  
  .full-width-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    filter: brightness(0.7);
  }
  
  .text-overlay {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  .text-content {
    color: white;
    max-width: 60%;
  }
  
  .image-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .image-description {
    font-size: 1.4rem;
    line-height: 1.5;
  }
  
  .details-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.6);
    color: black;
    text-decoration: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  
  .details-button:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  
  .arrow {
    margin-left: 5px;
    font-size: 1.2rem;
    color: black;
  }
  
  /* 页脚 */
  .footer {
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
  }
  
  .footer-link {
    color: #87cefa;
    text-decoration: none;
    margin: 0 10px;
  }
/* Observer 默认透明 */
.observer-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.observer-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
