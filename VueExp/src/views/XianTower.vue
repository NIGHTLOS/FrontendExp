<script>
import XianTowerIntroduce from "@/components/xianIntroduce.vue";
import XianTowerCards from "@/components/xianImgCards.vue";
export default {
  name: "xianTower",
  components: {
    XianTowerIntroduce,
    XianTowerCards
  }
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <h1>神奇西北100景之一———西安城墙</h1>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <video controls>
          <source src="../assets/videos/xianTower.mp4" type="video/mp4" />西安城墙
        </video>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <h2>西安城墙名片</h2>
        <XianTowerIntroduce />
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <a href="https://baike.baidu.com/item/%E8%A5%BF%E5%AE%89%E5%9F%8E%E5%A2%99/1227840">
          <h2>西安城墙介绍</h2>
        </a>
        <div class="mian">
          <p>西安城墙，是中国现存规模最大、保存最完整的古代城垣之一，是第一批全国重点文物保护单位、国家AAAAA级旅游景区，也是第一批全国重点文物保护单位中唯一的城垣建筑。广义的西安城墙包括西安唐城墙和西安明城墙，但一般特指狭义上的西安明城墙。</p>
          <p>西安明城墙位于陕西省西安市中心区，墙高12米，顶宽12—14米，底宽15—18米，轮廓呈封闭的长方形，周长13.74千米。城墙内人们习惯称为古城区，面积11.32平方千米，著名的西安钟鼓楼就位于古城区中心。</p>
          <p>西安城墙主城门有四座：长乐门（东门），永宁门（南门），安定门（西门），安远门（北门），这四座城门也是古城墙的原有城门。从民国开始为方便出入古城区，先后新辟了多座城门，现西安城墙已有城门18座。</p>
          <p>1961年3月4日，西安城墙被国务院公布为第一批全国重点文物保护单位，成为名单中唯一的古代城垣建筑。2018中国西北旅游营销大会暨旅游装备展上，西安城墙入围“神奇西北100景”榜单。</p>
        </div>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <div class="down">
          <h1>西安城墙十八门</h1>
          <XianTowerCards />
          <div class="bady">
            <p>西安城墙现有城门18座，分别是：</p>
            <p>南城七门：永宁门（俗称南门）、朱雀门、勿幕门、含光门、建国门、和平门、文昌门。</p>
            <p>西城二门：安定门（俗称西门）、玉祥门。</p>
            <p>北城六门：尚武门、安远门（俗称北门）、尚德门、解放门、尚俭门、尚勤门。</p>
            <p>东城三门：朝阳门、中山门、长乐门（俗称东门）。</p>
          </div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-header,
.el-footer {
  background-image: url("../assets/img/background01.jpg");
  background-size: cover;
}

.el-main {
  background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);
  background-blend-mode: screen;
  background-size: cover;
}

h1 {
  color: #fff;
  background-color: #333; /* 深色背景 */
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); /* 更深的阴影效果 */
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5); /* 文字发光效果 */
}

h2 {
  color: #333;
  background-color: rgba(255, 255, 255, 0.8); /* 透明背景 */
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 轻微阴影 */
  margin-bottom: 15px;
}

/* 修改分隔线样式 */
.el-divider {
  background-color: #333; /* 更深的分隔线 */
  border-top: 3px solid #333;
  margin: 20px 0;
}

video {
  width: 80%; /* 视频宽度 */
  height: auto; /* 视频高度自适应 */
  margin-top: 20px; /* 视频与标题之间的间隔 */
  display: block; /* 将视频设置为块级元素，使其下方有间隔 */
  margin-left: auto; /* 自动外边距，将视频向右推 */
  margin-right: auto; /* 自动外边距，将视频向左推 */
}

.mian {
  font-family: "Arial", sans-serif; /* 设置字体 */
  font-size: 26px; /* 设置字体大小 */
  line-height: 1.6; /* 设置行高 */
  text-align: justify; /* 设置文本对齐 */
  max-width: 80%; /* 设置最大宽度 */
  margin: 20px auto; /* 设置外边距 */
  padding: 15px; /* 设置内边距 */
  border: 1px solid #ddd; /* 设置边框 */
  border-radius: 8px; /* 设置边框圆角 */
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
} 

.mian p {
  margin-bottom: 1em; /* 设置段落间距 */
}

.down {
  background-image: url("../assets/img/xianBackground.jpg");
  background-size: cover;
}

.bady {
  font-family: "Arial", sans-serif; /* 设置字体 */
  border: 1px solid #dddddd; /* 设置边框 */
  max-width: 80%; /* 设置最大宽度 */
  margin: 20px auto; /* 设置外边距 */
  border-radius: 8px; /* 设置边框圆角 */
  padding: 20px;
  line-height: 1.2; /* 设置行高 */
  text-align: justify; /* 设置文本对齐 */
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
</style>