<template>
  <div class="parallax-section" :style="parallaxStyle">
    <div class="content" :class="{ 'animate__fadeIn': isContentVisible }">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps({
  speed: {
    type: Number,
    default: 0.5
  },
  backgroundImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const scrollTop = ref(0);
const isContentVisible = ref(false);

const parallaxStyle = computed(() => ({
  transform: `translateY(${scrollTop.value * props.speed}px)`,
  'background-image': `url(${props.backgroundImage})`
}));

const handleScroll = () => {
  scrollTop.value = window.pageYOffset || document.documentElement.scrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const target = ref(null);
useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isContentVisible.value = true;
    }
  },
  { threshold: 0.1 }
);
</script>

<style scoped>
.parallax-section {
  position: relative;
  width: 100%;
  height: 120vh; /* 增加高度 */
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 10; /* 确保内容在背景图之上 */
  max-width: 800px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景色 */
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
}

.animate__fadeIn {
  opacity: 1;
}

h1 {
  margin-bottom: 10px;
  font-size: 36px;
}

p {
  font-size: 18px;
  line-height: 1.5;
}
</style>