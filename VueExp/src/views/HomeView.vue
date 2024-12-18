<script>
import ImgCards from "@/components/imgCards.vue";
import IndexBody from "@/components/IndexBody.vue";

export default {
  name: "HomeView",
  components: {
    ImgCards,
    IndexBody
  }
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        页头~~~
        <el-row type="flex" justify="end">
          <el-button type="warning" plain class="home-button">
            <router-link to="/">返回首页</router-link>
          </el-button>
        </el-row>
      </el-header>
      <el-divider style="border-top: 3px solid black; margin: 0"></el-divider>
      <el-container class="main">
        <el-main class="imgcards">
          <el-divider style="border-top: 3px solid black; margin: 0"></el-divider>
          <h1>中国古代城墙和防御建筑</h1>
          <el-divider style="border-top: 3px solid black; margin: 0"></el-divider>
          <img-cards />
        </el-main>
        <el-main class="body">
          <index-body />
        </el-main>
        <el-divider style="border-top: 3px solid black; margin: 0"></el-divider>
        <el-footer>页脚~~~</el-footer>
      </el-container>
    </el-container>
  </div>
</template>



<style scoped>
h1 {
  font-size: 30px;
  color: #000000; /* 文字颜色设置为白色 */
  padding-left: 85px; /* 增加左侧内边距，使文字向右移动 */
  background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
  position: relative; /* 为伪元素定位提供参照 */
  z-index: 1; /* 确保标题在背景之上 */
}

h1::before {
  content: ""; /* 伪元素内容 */
  display: block; /* 将伪元素设置为块级元素 */
  width: 1.73em; /* 伪元素的宽度 */
  height: 3em; /* 伪元素的高度 */
  position: absolute; /* 伪元素绝对定位 */
  background: linear-gradient(
    -60deg,
    #577b98 50%,
    transparent 0
  ); /* 伪元素的背景渐变 */
  left: -5px; /* 伪元素距离左侧的距离 */
  top: 0; /* 伪元素距离顶部的距离 */
  border-bottom-left-radius: inherit; /* 继承父元素的左下角圆角 */
  transform: translateY(-0.5em) rotate(30deg); /* 位移和旋转伪元素 */
  transform-origin: bottom right; /* 变换原点设置在右下角 */
  box-shadow: 0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15); /* 伪元素的阴影效果 */
}

.el-header,
.el-footer {
  background-image: url("../assets/img/background01.jpg");
  background-size: cover;
}
.main {
  background-image: url("../assets/img/background.jpg");
  background-size: cover; /* 覆盖整个元素 */
  background-position: center; /* 居中背景图片 */
  background-repeat: no-repeat; /* 不重复背景图片 */
}

.el-main {
  position: relative;
  min-height: 700px;
  background-color: rgba(255, 255, 255, 0.5);
}

.body {
  padding: 50px 150px;
}

.el-footer {
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
}

.home-button {
  background-color: #ff8c00; /* 设置按钮背景为橙色 */
  border: none; /* 移除边框 */
  text-decoration: none; /* 移除下划线 */
}

.home-button:hover {
  background-color: #1aa113; /* 鼠标悬停时的背景颜色 */
}

.home-button a {
  color: white; /* 文字颜色 */
  text-decoration: none; /* 移除下划线 */
  display: block; /* 使链接填充整个按钮 */
  padding: 10px 20px; /* 按钮的内边距 */
}
</style>