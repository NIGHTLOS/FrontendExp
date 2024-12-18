<script>
import ShanhaiIntroduce from '@/components/shanhaiIntroduce.vue'
import ShanhaiHistory from '@/components/shanhaiHistory.vue'
export default {
  name: 'shanhaiPass',
  components: {
    ShanhaiIntroduce,
    ShanhaiHistory
  }
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <h1>天下第一关——山海关</h1>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider> 
        <video controls>
          <source src="../assets/videos/shanhaiPass.mp4" type="video/mp4">
          万里长城
        </video>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <h2>长城名片</h2>
        <ShanhaiIntroduce/>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <a href="https://baike.baidu.com/item/%E4%B8%87%E9%87%8C%E9%95%BF%E5%9F%8E%EF%BC%8D%E5%B1%B1%E6%B5%B7%E5%85%B3/57079419"><h2>山海关介绍</h2></a>
        <div class=mian>
          <p>万里长城－山海关，又称榆关、渝关、临闾关，位于河北省秦皇岛市山海关区东大街1号，是明长城的东北关隘之一，在1990年以前被认为是明长城东端起点，素有中国长城“三大奇观之一”（东有山海关、中有镇北台、西有嘉峪关）、“天下第一关”、“边郡之咽喉，京师之保障”之称，与万里之外的嘉峪关遥相呼应，闻名天下。</p>
          <p>明洪武十四年（1381年），明太祖朱元璋下令在此筑城建关，遂成为扼东北、华北咽喉要塞的军事重镇，因其依山襟海，故得名山海关。山海关有“天下第一关”的美誉，牌匾为明代著名书法家萧显所书。山海关城周长约4千米，与长城相连，以城为关，城高14米，厚7米，有四座主要城门，多种防御建筑。包括“天下第一关”箭楼、靖边楼、牧营楼、临闾楼、瓮城以及1350延长米的明代平原长城等景观。</p>
          <p>1961年3月4日，万里长城－山海关被国务院公布为第一批全国重点文物保护单位。</p>
          <p>1987年12月，包括万里长城-山海关在内的长城被联合国教科文组织公布为世界文化遗产。</p>
        </div>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <h1>山海关历史</h1>
        <ShanhaiHistory/>
      </el-main>
      <el-footer>Footer</el-footer>
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
  background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
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