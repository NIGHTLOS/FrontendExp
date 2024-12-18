<template>
  <div class="fullpage-container" @wheel="handleScroll">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="section"
      :style="{ backgroundImage: `url(${section.image})` }"
    >
      <div class="section-content-1">
        <h1>{{ section.title }}</h1>
        <p>{{ section.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sections = ref([
  {
    image: 'https://th.bing.com/th/id/R.23743b676e1e447598cf15afc3f20ccf?rik=Lva6Q2x7UfiWzQ&riu=http%3a%2f%2fpic.ntimg.cn%2f20090829%2f3145742_092029082230_2.jpg&ehk=cOXIsBVbXodORcSCMCrUjeaSO9z3tvriy4ZQ%2b7GkK8E%3d&risl=&pid=ImgRaw&r=0',
    title: '汉传佛教',
    description: '  汉传佛教，是以地理位置划分的佛教派别，流传于中国、日本、朝鲜半岛等地，以大乘佛教为主。\n\n  汉传佛教的影响力，伴随中国势力传播至朝鲜半岛、日本与越南等地，并且影响了后世的藏传佛教。实质上，汉传佛教可以说是形塑大乘佛教面貌的主要力量之一；但有别于藏传佛教之显密并重，汉传佛教的宗派以显宗为多。',
  },
  {
    image: require('../assets/img/religious/25.png'),
    title: '五台山',
    description: '五台山，地有五顶，气候清凉，佛教认为是文殊菩萨道场。文殊是释迦牟尼的首席菩萨，为显密诸宗所崇奉，于是五台山就形成了显密并行、诸宗竞秀、青庙和黄庙、子孙庙和十方庙共存的模式，故被誉为世界五大佛教圣地之一，世界佛教文殊信仰中心，中国佛教四大名山之首，名列中国佛教四大灵境前茅，是中国最早的“汉藏佛教圣地”，为“中国佛教的缩影”、“世界文殊信仰的中心”。五台山受到历代帝王的大力护持、中外僧俗的辛勤耕耘，遂使五台山保存下了鲜有的古建筑群（68座寺院，其中国保单位14座，宝塔150余座）、罕见的佛教造像群（佛像30000余尊）、独特的佛教音乐（乐器3045件），故被誉为“中国古建艺术的宝库”、“中国佛教造像艺术的展览馆”、“中国佛教音乐奇葩”、“国际佛教文化交流中心”。',
  },
  {
    image: require('../assets/img/religious/26.png'),
    title: '金山寺',
    description: '  金山寺始建于东晋时期。魏晋南朝天监四年（505年），梁武帝于寺内创中国佛教举行水陆法会之始。唐大中年间时，唐宣宗敕令寺院更名为“金山寺”。清康熙二十五年（1686年），康熙帝游至金山，将寺名改为“江天寺”，题赐“江天禅寺”匾额。民国三十七年（1948年），寺内发生火灾，大雄宝殿和藏经楼被烧毁。1949年后，金山寺几经整修，但在“文化大革命”期间香火断灭。1978年，慈舟法师重返金山寺。几番周折、多年经营，寺院终重新开放。历经世代修葺，金山寺内古迹甚多，主要建筑为天王殿、大雄宝殿、观音阁等。该寺整体处于坡地上，分层筑台，山与寺浑然一体，呈现出“金山寺裹山，见寺，见塔，不见山”之风貌。\n\n'
    +'  金山寺是临济宗的著名禅修道场，是人类建筑文化宝库中的遗产之一，同时也是一座历史文化名寺，“水漫金山寺”等故事流传甚广。1983年，金山寺被定为汉族地区全国重点寺院。2006年，金山寺水陆法会被批准列入江苏省非物质文化遗产名录。2011年，金山寺成为江苏省文物保护单位。2014年11月，金山寺水陆法会仪式音乐被批准列入第四批国家级非物质文化遗产代表性项目名录扩展项目名录。',
  },
  {
    image: 'https://th.bing.com/th/id/R.b11f38b6c7a5e3f01138ff173617a72b?rik=CG6bzygpT8g6kg&riu=http%3a%2f%2fyouimg1.c-ctrip.com%2ftarget%2ffd%2ftg%2fg6%2fM06%2f93%2f67%2fCggYslc5j3qATTa6ABZAwY50-Vk227.jpg&ehk=raGR6zZ9bKyblrkbiWzDu%2fkXTPEU5pmeAP0hg0AnAqE%3d&risl=&pid=ImgRaw&r=0',
    title: '少林寺',
    description:'  少林寺，是中国佛教禅宗祖庭和中国功夫的发源地，现为世界文化遗产、全国重点文物保护单位、国家5A级旅游景区，位于河南省郑州市登封市嵩山五乳峰下，因坐落于嵩山腹地少室山茂密丛林之中，故名“少林寺”。\n\n'+ 
    '  少林寺是世界著名的佛教寺院，是汉传佛教的禅宗祖庭，在中国佛教史上占有重要地位，被誉为“天下第一名刹”。因其历代少林武僧潜心研创和不断发展的少林功夫而名扬天下，素有“天下功夫出少林，少林功夫甲天下”之说。2010年8月，包括少林寺常住院、初祖庵、塔林在内的天地之中历史建筑群被联合国科教文组织列为世界文化遗产。'
  },
  {
    image: 'https://youimg1.c-ctrip.com/target/100j0x000000l25xcC577.jpg',
    title: '东林寺',
    description: '  东林寺位于庐山北麓香炉峰下的九江市庐山区赛阳镇，为中国佛教净土宗发源地。\n\n  东晋太元九年（384年）建成。东晋高僧慧远主持东林寺30年，“迹不入俗，影不出山，集沙门千人”，并邀学问僧及得意僧一百二十三人，结莲社，宣扬佛法阐发佛理，论赞佛经，创立“净土宗”派系。\n\n  唐太宗时敕赐增修，并号以“太平兴龙”寺，极具盛名，列为中国佛教八大道场之一。极盛时期有殿堂僧舍300余间，寺僧1000多人，藏经1万余册，四周皆为寺田，辖地约二平方公里。历史原因，此寺几经兴废，宋绍兴年间兵毁；明洪武元年复修；清顺治、康熙年又毁，清末复修。至建国前夕，仅剩破殿一栋。“文化大革命”中，寺内三名僧人被赶出山门，佛像、法器、经书全数被毁，殿宇成为赛阳公社农药厂。\n\n  中共十一届三中全会后，国家重视文物保护，拨款修复，面目一新。'
  }
]);

const currentIndex = ref(0);

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
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #333333;
}

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
  white-space: pre-wrap; /* 保留换行符 */
}

.section-content-1 {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  margin-left: -70%;
  /* margin-bottom: -15%; */
  border-radius: 8px;
  /* text-align: center; */
  width: 30%;
  height: 100%;
  /* cursor: pointer; */
}

.section-content-1 h1 {
  margin-left: 35%;
  font-size: 2.5rem;
  margin-top: 15%;
}

.section-content-1 p {
  font-size: 1.3rem;
  line-height: 1.5;
  margin: 0 5%;
}
</style>
