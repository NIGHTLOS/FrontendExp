<template>
  <button @click="goToRoot" class="back-to-root-button">
    返回首页
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToRoot = () => {
  router.push('/');
};
</script>

<style scoped>
.back-to-root-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-to-root-button:hover {
  background-color: #0056b3;
}
</style>