<template>
  <div class="main-container" :class="{ 'slide-in': containerShow }" ref="mainContainer">
    <div class="text-container" :class="{ 'slide-in-left': textShow }">
      <slot name="title"></slot>
      <slot name="description"></slot>
    </div>
    <div class="image-container" ref="testref" :class="{ 'slide-in-right': imageShow }">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';



const textShow = ref(false);
const imageShow = ref(false);
const containerShow = ref(false);
const mainContainer = ref(null);
const testref = ref(null);

let lastScrollPosition = 0;

// 处理滚动事件
const handleScroll = () => {
  const currentScroll = window.pageYOffset; // 获取当前滚动位置
  const containerRect = mainContainer.value.getBoundingClientRect();
  
  // 判断容器是否进入视口
  if (containerRect.top <= window.innerHeight && containerRect.bottom >= 0) {
    if (currentScroll > lastScrollPosition) {
      // 向下滚动
      if (containerRect.top <= window.innerHeight / 2) {
        // 容器到达视窗中间时完全显示
        containerShow.value = true;
        setTimeout(() => {
          textShow.value = true;
        }, 100); // 修改了延迟时间
        setTimeout(() => {
          imageShow.value = true;
        }, 200); // 修改了延迟时间
      } else {
        // 容器未到达视窗中间时开始动画
        containerShow.value = false;
        textShow.value = false;
        imageShow.value = false;
      }
    } else {
      // 向上滚动
      if (containerRect.top <= window.innerHeight / 2) {
        // 容器到达视窗中间时完全显示
        containerShow.value = true;
        setTimeout(() => {
          textShow.value = true;
        }, 100); // 修改了延迟时间
        setTimeout(() => {
          imageShow.value = true;
        }, 200); // 修改了延迟时间
      } else {
        // 容器未到达视窗中间时动画回退
        containerShow.value = false;
        textShow.value = false;
        imageShow.value = false;
      }
    }
  } else {
    // 容器不在视口中时动画回退
    containerShow.value = false;
    textShow.value = false;
    imageShow.value = false;
  }

  lastScrollPosition = currentScroll;
};

// 在页面加载时添加滚动监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// 在组件销毁时清理事件监听
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  opacity: 0; /* 初始状态不可见 */
  transform: translateY(50px); /* 初始位置：在视窗下方 */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* 减少动画时间 */
}

/* 当 containerShow 为 true 时，main-container 会从下方滑入 */
.slide-in {
  opacity: 1;
  transform: translateY(0); /* 动画结束后回到原位 */
}

.text-container {
  text-align: left;
  max-width: 600px; /* 限制文字区域的最大宽度 */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0; /* 初始状态不可见 */
  transform: translateX(-50px); /* 初始位置：在视窗左侧 */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* 减少动画时间 */
}

/* 当 textShow 为 true 时，文字会从左边滑入 */
.slide-in-left {
  opacity: 1;
  transform: translateX(0); /* 动画结束后回到原位 */
}

.image-container {
  position: relative;
  max-width: 600px; /* 限制图片区域的最大宽度 */
  opacity: 0; /* 初始状态不可见 */
  transform: translateX(50px); /* 初始位置：在视窗右侧 */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* 减少动画时间 */
}

/* 当 imageShow 为 true 时，图片会从右边滑入 */
.slide-in-right {
  opacity: 1;
  transform: translateX(0); /* 动画结束后回到原位 */
}

.animated-image {
  width: 100%;
  height: auto;
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #333;
}

p {
  font-size: 18px;
  line-height: 1.5;
  color: #555;
}
</style>