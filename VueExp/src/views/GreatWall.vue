<script>
import GreatWallImgCards from '@/components/greatImgCards.vue';
import GreatWallIntroduce from '@/components/greatIntroduce.vue';

export default {
  name: 'greatWall',
  components: {
    GreatWallImgCards,
    GreatWallIntroduce
  }
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header~~~</el-header>
      <el-main>
        <h1>世界中古七大奇迹之一——万里长城</h1>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider> 
        <video controls>
          <source src="../assets/videos/greatWall.mp4" type="video/mp4">
          万里长城
        </video>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <h2>长城名片</h2>
        <GreatWallIntroduce/>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <a href="https://baike.baidu.com/item/%e9%95%bf%e5%9f%8e/14251#3"><h2>长城介绍</h2></a>
        <div class=mian>
          <p>长城（The Great Wall），又称万里长城，是中国古代的军事防御工事，是一道高大、坚固而且连绵不断的长垣，用以限隔敌骑的行动。长城不是一道单纯孤立的城墙，而是以城墙为主体，同大量的城、障、亭、标相结合的防御体系。依据长城形成了长城文化。是弘扬中华优秀传统文化的重要力量。</p>
          <p>长城修筑的历史可上溯到西周时期，发生在首都镐京（今陕西西安）的著名典故“烽火戏诸侯”就源于此。春秋战国时期，列国争霸，互相防守，长城修筑进入第一个高潮，但此时修筑的长度都比较短。秦灭六国统一天下后，秦始皇连接和修缮战国长城，始有万里长城之称。明朝是最后一个大修长城的朝代，人们所看到的长城多是此时修筑</p>
          <p>长城资源主要分布在河北、北京、天津、山西、陕西、甘肃、内蒙古、黑龙江、吉林、辽宁、山东、河南、青海、宁夏、新疆共15个省、自治区、直辖市。其中河北省境内长度2498.54千米，陕西省境内长度1838千米。根据文物和测绘部门的全国性长城资源调查结果，明长城总长度为8851.8千米，秦汉及早期长城超过1万千米，总长超过2.1万千米。现存长城文物本体包括长城墙体、壕堑、界壕、单体建筑、关堡、相关设施等各类遗存，总计4.3万余处（座/段）</p>
          <p>1987年12月，长城被列为世界文化遗产。2020年11月26日，国家文物局发布了第一批国家级长城重要点段名单</p>
        </div>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <h1>万里长城十三关</h1>
        <GreatWallImgCards/>
      </el-main>
      <el-footer>Footer~~~</el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-header,
.el-footer {
  background-image: url('../assets/img/background01.jpg');
  background-size: cover;
}

.el-main {
  background-image: url('../assets/img/greatWall02.jpg');
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
  font-family: 'Arial', sans-serif; /* 设置字体 */
  font-size: 26px; /* 设置字体大小 */
  line-height: 1.6; /* 设置行高 */
  text-align: justify; /* 设置文本对齐 */
  max-width: 80%; /* 设置最大宽度 */
  margin: 20px auto; /* 设置外边距 */
  padding: 15px; /* 设置内边距 */
  border: 1px solid #ddd; /* 设置边框 */
  border-radius: 8px; /* 设置边框圆角 */
  background-color: rgba(255, 255, 255, 0.4);
}

.mian p {
  margin-bottom: 1em; /* 设置段落间距 */
}
</style>