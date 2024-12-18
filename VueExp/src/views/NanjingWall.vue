<script>
import NanjingWallIntroduce from "@/components/nanjingIntroduce.vue";

export default {
  name: "nanjingWall",
  components: {
    NanjingWallIntroduce
  }
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <h1>中国最大的京城城墙———南京城墙</h1>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <video controls>
          <source src="../assets/videos/nanjingWall.mp4" type="video/mp4" />西安城墙
        </video>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <h2>南京城墙名片</h2>
        <NanjingWallIntroduce />
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <a href="https://baike.baidu.com/item/%E5%8D%97%E4%BA%AC%E5%9F%8E%E5%A2%99/1577661">
          <h2>南京城墙介绍</h2>
        </a>
        <div class="mian">
          <p>南京城墙，位于江苏省南京市境内，始建于元至正二十六年（1366年），是明朝初年应天府都城的京城城墙，也是中国现存规模最大的京城城墙</p>
          <p>南京城墙全长35.267千米，其中地面遗存为25.091千米，遗址部分10.176千米，城墙现状基本完好类的总长度为22.425千米，城墙现状遗迹类总长度为2.666千米；城墙最高26米，城墙顶部最窄处为2.6米，最宽处19.75米。城墙现存护城河全长为31.159千米，城墙与护城河间距最宽处为334米，最窄处为9米。城墙上建垛口13616个，窝铺二百座。城墙开十三座城门，现存聚宝门（中华门）、神策门（和平门）、清凉门、石城门和重修的朝阳门（中山门）。城门上皆有敌楼，每门有木门和千斤闸各一道。南京城墙是中国城垣史上最大的一座砖城，也是世界现存最长、规模最大、真实性最好的砖石构造城市城墙之一，是14世纪东亚筑城技术的典范</p>
          <p>1956年10月18日，南京明城墙分段被江苏省人民委员会公布为江苏省第一批省级文物保护单位。1988年1月13日，南京城墙被中华人民共和国国务院公布为第三批全国重点文物保护单位</p>
        </div>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <div class="down">
          <h1>建筑格局</h1>
          <div class="bady">
            <div class="one">
              <h2>综述</h2>
              <p>明南京城是明朝初年的都城，又称应天府城。筑有外郭、京城、皇城、宫城四重城垣。现宫城与皇城仅存几座城门，外郭仅余数段遗址，唯有京城大部分尚存。南京城墙即指明朝初年都城的京城城墙。</p>
              <img src="@/assets/img/nanjing01.jpg" alt="南京城墙地图" />
              <p>南京城墙及城门分布位置示意图</p>
            </div>
            <div class="two">
              <h2>城墙</h2>
              <p>南京城墙全长35.267千米，其中地面遗存为25.091千米，遗址部分10.176千米；城墙现状基本完好类的总长度为22.425千米，城墙现状遗迹类总长度为2.666千米；城墙最高26米，城墙顶部最窄处为2.6米，最宽处19.75米。城墙上建垛口13616个，窝铺二百座</p>
              <img src="@/assets/img/nanjing02.jpg" alt="">
              <img src="@/assets/img/nanjing03.jpg" alt="">
            </div>
            <div class="three">
              <h2>城门</h2>
              <p>南京城墙设十三座城门，每座城门都建有规模大小不一的城楼，设有瓮城的城门还建有闸楼，形成前后两座楼。每座城门均设木质包铁的双扉城门和上下启闭的闸门（俗称千斤闸）各一道。所有城门位置不求对称，皆据城防和城市整体布局需要而设置：城东设朝阳门（中山门）；城南设正阳门（光华门）、通济门、聚宝门（中华门）；城西设三山门（水西门）、石城门、清凉门、定淮门、仪凤门（兴中门）；城北设钟阜门、金川门、神策门（和平门）、太平门。</p>
              <p>除三山门（水西门）、石城门、聚宝门（中华门）分别沿袭了南唐都城的龙光西门、水西门和南门旧址外，其余10座城门均为明朝时期新建。现仅存聚宝门（中华门）、神策门（和平门）、清凉门、石城门和重修的朝阳门（中山门）。</p>
              <p>清朝时期增开城门三座：草场门、小北门、丰润门（玄武门）。现仅存丰润门（玄武门）。民国时期增开城门八座：海陵门（挹江门）、雨花门、中华东门、中华西门、新民门、武定门、汉中门、中央门。现仅存海陵门（挹江门）、新民门、武定门。</p>
              <p>中华人民共和国成立后增开城门两座：解放门、集庆门。</p>
              <img src="@/assets/img/nanjing04.jpg" alt="">
              <img src="@/assets/img/nanjing05.jpg" alt="">
            </div>
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
  background-image: linear-gradient(
    to top,
    #3f51b1 0%,
    #5a55ae 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c978 100%
  );
  background-blend-mode: screen;
  background-size: cover;
}

/* 增加全局字体样式 */
body {
  font-family: '华文楷体', sans-serif;
  color: #333;
}

/* 修改标题样式 */
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

/* 修改主要内容的样式 */
.mian {
  background-color: rgba(255, 255, 255, 0.9); /* 更亮的背景 */
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 更柔和的阴影 */
  padding: 25px;
  margin-bottom: 30px;
}

.mian p {
  margin-bottom: 1em;
  text-indent: 2em; /* 首行缩进 */
  line-height: 1.8; /* 更高的行间距 */
}

/* 修改下方内容的样式 */
.down {
  background-image: url("../assets/img/nanjingWall03.jpg");
  background-size: cover;
  background-attachment: fixed; /* 背景固定 */
  padding: 50px 0;
}

.bady {
  background-color: rgba(255, 255, 255, 0.85); /* 透明背景 */
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 添加阴影 */
}

/* 修改图片样式 */
.bady img {
  max-width: 45%; /* 设置最大宽度，以便两个图片能并排 */
  height: auto;
  margin: 10px auto; /* 添加上下边距，并保持图片居中 */
  display: inline-block; /* 设置为行内块元素，以便图片能并排显示 */
  vertical-align: middle; /* 垂直对齐图片 */
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 图片阴影 */
}

/* 两个图片并排显示 */
.bady .two img,
.bady .three img {
  width: 45%; /* 设置宽度，以便两个图片能并排 */
  margin: 10px; /* 添加边距 */
  display: inline-block; /* 设置为行内块元素 */
}

/* 确保图片在容器中居中显示 */
.bady .one img,
.bady .two img,
.bady .three img {
  display: block; /* 设置为块级元素 */
  margin: 0 auto; /* 居中图片 */
}

/* 清除浮动的影响 */
.bady .two {
  overflow: hidden;
}

/* 添加过渡效果 */
.el-collapse-item__header,
.el-collapse-item__wrap,
.bady img {
  transition: all 0.3s ease-in-out; /* 平滑过渡 */
}

.el-collapse-item__header:hover {
  background-color: #f5f5f5; /* 鼠标悬停时改变背景颜色 */
}

/* 修改视频样式 */
video {
  width: 80%; /* 视频宽度 */
  height: auto; /* 视频高度自适应 */
  margin-top: 20px; /* 视频与标题之间的间隔 */
  display: block; /* 将视频设置为块级元素，使其下方有间隔 */
  margin-left: auto; /* 自动外边距，将视频向右推 */
  margin-right: auto; /* 自动外边距，将视频向左推 */
}

</style>