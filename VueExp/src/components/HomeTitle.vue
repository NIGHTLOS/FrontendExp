<template>
  <div class="container">
    <div class="content">
      <h1 class="fade-in">宫殿建筑</h1>
      <p class="fade-in delay-1">探索古代中国的皇家建筑艺术。</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 设置整个容器的样式 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 视窗高度 */
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('/public/images/wuyan.jpg'); /* 背景图片叠加渐变层 */
  background-size: cover; /* 图片铺满整个容器 */
  background-position: center; /* 图片居中 */
  text-align: center;
  padding: 20px;
}

/* 内容容器 */
.content {
  max-width: 600px; /* 限制最大宽度 */
  background-color: rgba(255, 255, 255, 0.9); /* 半透明背景颜色 */
  padding: 40px;
  border-radius: 10px; /* 圆角边框 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  transform: translateY(20px); /* 初始位置向下偏移 */
  animation: fadeInUp 2s ease-in-out forwards; /* 上方淡入动画 */
}

/* 淡入动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 从下方淡入并向上移动的动画 */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  opacity: 0; /* 初始状态为完全透明 */
  animation: fadeIn 2s ease-in-out forwards; /* 淡入动画 */
}

.delay-1 {
  animation-delay: 1s; /* 延迟1秒执行动画 */
}

/* 标题样式 */
h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

/* 描述文本样式 */
p {
  font-size: 18px;
  line-height: 1.5;
  color: #666;
}
</style>