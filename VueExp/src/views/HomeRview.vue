<template>
    <div class="fullpage-container" @wheel="handleScroll">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="section"
        :style="{ backgroundImage: `url(${section.image})` }"
      >
        <div class="section-content" @click="goToDetail(index)">
          <h1>{{ section.title }}</h1>
          <p>{{ section.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const sections = ref([
    {
      image: 'https://th.bing.com/th/id/R.4083189da20ad7c3e87e8ec51dec0297?rik=99Ux5I86bObFwQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50053%2f7227.jpg_wh860.jpg&ehk=QsuEjFupd3Xev9VoWLhIcZbLPU5nyBqP0K9kQIaY1AA%3d&risl=&pid=ImgRaw&r=0',
      title: '汉传佛教',
      description: '是寺庙，是石窟，是中华建筑艺术的大成之作。',
    },
    {
      image: 'https://img.zcool.cn/community/01ba4d5e295427a8012165188f8345.jpg?imageMogr2/auto-orient/thumbnail/1280x%3e/sharpen/0.5/quality/100/format/webp',
      title: '道教',
      description: '茅山、华山、崂山，了解中国各地道教建筑的不同魅力。',
    },
    {
      image: require('../assets/img/religious/24.png'),
      title: '民间信仰',
      description: '妈祖庙、后土祠，以不同的方式表达对美好生活的向往。',
    },
  ]);
  
  const currentIndex = ref(0);
  const router = useRouter();
  
  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentIndex.value < sections.value.length - 1) {
      currentIndex.value++;
    } else if (event.deltaY < 0 && currentIndex.value > 0) {
      currentIndex.value--;
    }
  
    const target = document.querySelector(`.section:nth-child(${currentIndex.value + 1})`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const goToDetail = (index) => {
    if(index == 0) 
    window.open(router.resolve({ name: 'Detail0' }).href, '_blank');

    if(index == 1)
    window.open(router.resolve({ name: 'Detail1' }).href, '_blank');

    if(index == 2)
    window.open(router.resolve({ name: 'Detail2' }).href, '_blank');

  };
  </script>
  
  <style scoped>

  .fullpage-container {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  
  .section {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .section-content {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 80%;
    cursor: pointer;
  }
  
  .section-content h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .section-content p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  </style>
  