<template>
  <div class="container">
    <div v-for="(garden, index) in gardens" :key="index" class="garden-section" :class="{ visible: isSectionVisible[index] }">
      <h1 class="garden-name">{{ garden.name }}</h1>
      <p class="garden-description">{{ garden.description }}</p>
      <div class="garden-images">
        <div class="image-scroll-container">
          <!-- Duplicate the image list to create a seamless loop -->
          <div v-for="(image, imageIndex) in extendedImages(garden.images)" :key="imageIndex" class="image-container">
            <img :src="image" alt="Garden Image" class="garden-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const gardens = ref([
  {
    name: '颐和园',
    description: '颐和园位于北京市西北郊，是中国古代皇家园林的杰出代表之一，始建于清朝乾隆年间，原为皇帝的夏宫，经过多次扩建与修缮，至今仍保存完好。颐和园占地约290公顷，分为前景区、后宫区和昆明湖三个主要部分，景区内山水相依，布局精美。其中，昆明湖是园区的核心，湖面开阔，绿树成荫，湖中央有一座长廊，全长728米，是中国最长的画廊，堪称园林建筑艺术的瑰宝。颐和园的另一大亮点是佛香阁，位于万寿山顶，是园区的标志性建筑之一，站在阁上可俯瞰整个园区的美景。园中还有许多历史遗迹和精致的园林小品，如石舫、十七孔桥等，这些均展现了中国古代园林的独特风格。颐和园的文化底蕴深厚，集中了中国古代建筑、园林、雕刻、绘画等艺术形式，体现了清代皇家对自然美与人文精神的完美融合。作为世界文化遗产，颐和园不仅是中国古代园林艺术的典范，也是世界各地游客了解中国传统文化的重要窗口。',
    images: [
      '/images/summer-palace-1.jpg',
      '/images/summer-palace-2.jpg',
      '/images/summer-palace-3.jpg',
      '/images/summer-palace-4.jpg',
      '/images/summer-palace-5.jpg',
      '/images/summer-palace-6.jpg',
    ],
  },
  {
    name: '拙政园',
    description: '拙政园位于江苏省苏州市，是中国四大名园之一，被誉为中国古典园林的巅峰之作。始建于明代正德年间，由御史王献臣在辞官后修建，园名取意《离骚》中“筑室兮水中，葺之兮荷盖”句，表达追求隐逸生活的情怀。拙政园占地约78亩，是苏州园林中面积最大的。全园以水为主，水面约占三分之一，布局自然清新，呈现出典型的江南水乡风格。园区分为东园、中园和西园三部分，各具特色。中园是全园的核心区域，亭台楼阁、长廊回廊交错，碧波荡漾，荷香浮动。最著名的景点包括远香堂、小飞虹和荷风四面亭，每一处都融自然与人文于一体，令人流连忘返。拙政园的设计讲究移步换景，无论从哪个角度观赏，都能看到巧妙的布局和丰富的层次感，体现了中国古典园林“虽由人作，宛自天开”的美学思想。作为世界文化遗产，拙政园不仅是苏州园林艺术的杰出代表，更是了解江南文化、体验传统中国园林魅力的重要胜地，吸引着无数海内外游客。',
    images: [
      '/images/humble-administer-garden-1.jpg',
      '/images/humble-administer-garden-2.jpg',
      '/images/humble-administer-garden-3.jpg',
      '/images/humble-administer-garden-4.jpg',
      '/images/humble-administer-garden-5.jpg',
      '/images/humble-administer-garden-6.jpg',
    ],
  },
  {
    name: '避暑山庄',
    description: '避暑山庄位于河北省承德市，是中国现存最大的皇家园林，始建于清康熙四十二年（1703年），历经康熙、雍正、乾隆三代修建而成，耗时近90年。避暑山庄因其凉爽宜人的气候和优美的自然环境，成为清朝皇帝夏季避暑和处理政务的重要场所。山庄占地564万平方米，由宫殿区和苑景区两部分组成。宫殿区位于山庄南部，建筑风格朴素典雅，是皇帝办公和居住的地方；苑景区则分为湖泊、平原、山峦三大景观区域，集中展现了中国北方园林的特色。湖区以“烟雨楼”“如意洲”为代表，碧波荡漾、楼台亭阁点缀其间；平原区草木葱茏，放养着鹿、鹤等动物，呈现一派草原风光；山峦区山石叠嶂，松柏苍翠，与江南园林截然不同。避暑山庄不仅融合了南北方园林的精髓，还借鉴了藏、蒙、满等民族风格，形成了独特的皇家园林艺术，是清代统治者政治文化的象征。作为世界文化遗产，避暑山庄体现了人与自然和谐共生的理念，是中外游客了解清代文化的重要胜地。',
    images: [
      '/images/mountain-resort-1.jpg',
      '/images/mountain-resort-2.jpg',
      '/images/mountain-resort-3.jpg',
      '/images/mountain-resort-4.jpg',
      '/images/mountain-resort-5.jpg',
      '/images/mountain-resort-6.jpg',
    ],
  },
]);

const isSectionVisible = ref(gardens.value.map(() => false));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = entry.target.dataset.index;
      isSectionVisible.value[index] = true;
    }
  });
}, { threshold: 0.5 });

onMounted(() => {
  document.querySelectorAll('.garden-section').forEach((section, index) => {
    section.dataset.index = index;
    observer.observe(section);
  });
});

onUnmounted(() => {
  observer.disconnect();
});

function extendedImages(images) {
  // Duplicate the image list to create a seamless loop
  return images.concat(images);
}
</script>

<style scoped>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  margin: 0;
  padding: 0;
  transition: background 0.3s;
}

body:hover {
  background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
}

.garden-section {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeInUp 0.6s forwards;
  transform: translateY(20px);
}

.garden-name {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
  transition: color 0.3s;
}

.garden-name:hover {
  color: #0056b3;
}

.garden-description {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeIn 0.6s forwards;
  animation-delay: 0.2s;
}

.garden-images {
  position: relative;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 200px; /* Adjust the height as needed */
}

.image-scroll-container {
  display: flex;
  animation: scrollImages 30s linear infinite;
}

.image-container {
  flex: 0 0 auto;
  margin-right: 10px;
  width: 200px; /* Fixed width for images */
  height: 150px; /* Fixed height for images */
  overflow: hidden; /* Ensures the image does not overflow the container */
  position: relative;
}

.garden-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container without distorting */
  border-radius: 6px;
  display: block; /* Remove bottom margin from inline images */
  transition: transform 0.3s;
}

.garden-image:hover {
  transform: scale(1.05);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes scrollImages {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .garden-images {
    margin-bottom: 10px;
  }
}
</style>