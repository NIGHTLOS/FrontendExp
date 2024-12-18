<template>
  <div class="page" :style="backgroundStyle">
    <div class="detail">
      <img :src="slide.image" :alt="slide.title" class="detail__image" />
      <h1 class="detail__title">{{ slide.title }}</h1>
      <p v-for="(paragraph, index) in formattedDescription" :key="index" class="detail__paragraph">{{ paragraph }}</p>
      <button @click="goHome" class="return-button">返回首页</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const slides = [
  {
    id: 1,
    image: '/images/gugong.jpg',
    title: '故宫',
    description: `
    故宫，又称紫禁城，位于中国北京市中心，是明、清两代的皇家宫殿，也是世界上现存规模最大、保存最为完整的木质结构古建筑群之一。故宫始建于明朝永乐年间（1406年），历时14年建成，于1420年完工，成为明清两代皇帝的居所和政治中心，一直使用到1912年清朝最后一个皇帝溥仪退位为止。

    故宫占地面积72万平方米，建筑面积约15万平方米，拥有大小宫殿七十多座，房屋九千余间。整个建筑群以南北为轴线，左右对称，主要分为外朝和内廷两大部分。外朝是皇帝举行大典和接见群臣的地方，主要包括太和殿、中和殿、保和殿三大殿；内廷则是皇帝及其家眷的生活居住区，包括乾清宫、交泰殿、坤宁宫等。

    故宫不仅是中国古代宫廷建筑的典范，而且收藏了大量的文物艺术品，其中包括绘画、书法、瓷器、玉器等多种类型的艺术珍品，具有极高的历史、文化和艺术价值。1987年，故宫被联合国教科文组织列为世界文化遗产，成为中国乃至全世界的文化瑰宝。

    今天，故宫博物院每年吸引数百万国内外游客前来参观，成为了了解中国悠久历史文化的重要窗口。
    `
  },
  {
    id: 2,
    image: '/images/yiheyuan.jpg',
    title: '颐和园',
    description: `
        颐和园，位于中国北京市海淀区，是一座大型的皇家园林，也是中国保存最完整的一座皇家园林。颐和园以昆明湖、万寿山为基础，集自然风光与人文景观于一体，被誉为“皇家园林博物馆”。

        颐和园的历史可以追溯到金朝，当时的名称为“金山行宫”。到了清朝乾隆年间（1750年），乾隆皇帝为了庆祝母亲六十岁寿辰，下令大规模扩建，并改名为“清漪园”。1860年，第二次鸦片战争期间，清漪园遭到英法联军的严重破坏。光绪年间（1888-1908年），慈禧太后动用海军经费进行重建，并改名为“颐和园”。

        颐和园占地面积约290公顷，其中水域面积约占四分之三。整个园林的设计巧妙地融合了江南园林的特色与北方园林的雄伟，形成了一种独特的风格。主要景点包括长廊、佛香阁、十七孔桥、石舫等。其中，长廊全长728米，是世界上最长的走廊，墙上绘有精美的彩画，展现了丰富的历史故事和神话传说。佛香阁是颐和园的标志性建筑，位于万寿山顶，可以俯瞰整个昆明湖及周边景色。

        颐和园不仅是中国古典园林艺术的杰出代表，也是研究清代皇家园林建筑和园林艺术的重要场所。1998年，颐和园被联合国教科文组织列入《世界遗产名录》，成为全人类共同的文化遗产。每年，颐和园都会吸引大量国内外游客前来游览，体验其独特的魅力。
            `
  },
  {
    id: 3,
    image: '/images/tiantan.jpg',
    title: '天坛',
    description: `
    天坛，位于中国北京市东城区南部，是明清两代皇帝祭天、祈谷的场所，是中国古代建筑艺术的杰出代表之一，也是世界上现存最大的祭天建筑群。天坛始建于明永乐十八年（1420年），初名“天地坛”，后来在嘉靖九年（1530年）进行了改建，将天地合祭改为分祭，形成了现在的天坛格局。

    天坛占地约273万平方米，主体建筑群分布在一条南北向的中轴线上，主要由祈年殿、圜丘坛、皇穹宇等组成。其中，祈年殿是天坛最著名的建筑，原名大享殿，建于明永乐十八年，是一座圆形三重檐攒尖顶的木构建筑，内部空间开阔，外观雄伟壮观。祈年殿用于举行祈谷大典，即祈求五谷丰登的仪式。圜丘坛则是皇帝祭天的场所，位于天坛南端，是一个三层圆形坛台，每层的直径和台阶数量都采用了象征天体运行规律的数字。

    天坛的建筑设计和布局体现了中国古代宇宙观和哲学思想，特别是“天人合一”的理念。整个天坛的建筑风格简洁庄重，色彩淡雅，与周围的自然环境和谐统一，给人以宁静肃穆的感觉。

    1998年，天坛被联合国教科文组织列为世界文化遗产，成为中国传统文化的重要象征。现在，天坛不仅是北京市民休闲的好去处，也是国内外游客了解中国传统文化、欣赏古代建筑艺术的重要旅游景点。每年，这里都会举办各种文化活动，如春节庙会等，吸引了大量游客参与。`
  },
  {
    id: 4,
    image: '/images/wanxiangshengong.jpg',
    title: '万象神宫',
    description: `
      万象神宫位于星斗大森林的最深处，是一片被古老力量守护的神圣之地。这里远离尘世的喧嚣，四周环绕着茂密的森林和险峻的山脉，只有最勇敢和最强大的魂师才能找到通往神宫的道路。据传，万象神宫是由远古时代的神灵所建造，目的是为了培养和考验未来的英雄。

建筑与环境
    万象神宫的建筑风格独特，融合了多种古老文明的元素。宫殿的主体建筑高耸入云，由巨大的白色石柱支撑，屋顶覆盖着金色的琉璃瓦，熠熠生辉。宫殿内部装饰精美，墙壁上雕刻着各种神秘的符文和图案，每个角落都散发着浓郁的古老气息。

    神宫周围分布着多个小岛和湖泊，湖水清澈见底，湖面上漂浮着各种奇异的植物。天空中不时有彩色的光芒闪烁，仿佛是神灵的祝福。整个神宫被一层淡淡的光芒笼罩，给人一种庄严而神秘的感觉。

    功能与特点
    修炼之地：
    魂环获取：万象神宫内部栖息着各种强大的魂兽，魂师们可以通过战胜这些魂兽获得珍贵的魂环，从而提升自己的实力。
    秘法学习：神宫中藏有无数古老的秘法和功法，只有通过严格的考验才能学到这些强大的技能。
    试炼场所：
    九重天试炼：神宫内部设有一条通往九重天的试炼之路，每过一重天都会遇到更强大的对手和更艰难的考验。只有通过全部九重天试炼的人，才能获得神宫的最终认可。
    灵魂净化：在神宫的某些特殊区域，魂师可以通过灵魂净化仪式，清除内心的杂质，使自己的魂力更加纯净和强大。
    神秘力量：
    神灵之力：万象神宫中蕴藏着强大的神灵之力，这种力量可以帮助魂师突破自身的极限，甚至达到神级的境界。
    时空隧道：神宫内部隐藏着连接不同时间和空间的隧道，通过这些隧道，魂师可以前往不同的世界，体验不同的冒险。
    `
  },
  {
    id: 5,
    image: '/images/epanggong.jpg',
    title: '阿房宫',
    description: `
        阿房宫是中国历史上秦朝时期的一座著名宫殿，位于今陕西省西安市西郊，是秦始皇为了展示帝国的强盛和自己的权威而建造的宏伟宫殿。阿房宫的名字来源于秦始皇的母亲赵姬的封号“阿房”，意为“阿母之房”。

    历史背景
    阿房宫的建设始于公元前212年，由秦始皇下令修建。据《史记》记载，阿房宫的规模极为宏大，占地面积广阔，宫殿建筑群错落有致，气势磅礴。然而，秦始皇在公元前210年去世后，阿房宫的建设并未完全完成。秦二世胡亥继位后，继续进行阿房宫的建设，但由于秦朝很快灭亡，阿房宫最终未能全面竣工。

    宫殿结构
    根据历史文献的描述，阿房宫的建筑规模和布局都非常宏大。主要建筑包括前殿、后宫、园林等多个部分：

    前殿：是阿房宫的主体建筑，主要用于皇帝处理政务和举行重要仪式。前殿高大宏伟，据说可以容纳万人同时聚集。
    后宫：是皇帝及其妃嫔居住的地方，建筑精美，装饰豪华。
    园林：阿房宫周围有广阔的园林，种植了各种花草树木，建有亭台楼阁，是皇帝和皇族成员休闲娱乐的场所。
    考古发现
    尽管阿房宫在历史上曾被描述得极其宏伟，但随着时间的流逝，阿房宫逐渐被历史的尘埃所掩埋。现代考古学家在西安西郊发现了阿房宫的部分遗址，通过考古发掘，人们得以一窥这座宫殿的昔日辉煌。考古发现表明，阿房宫的建筑基础非常庞大，地基深厚，显示出其规模之大。

    历史意义
    阿房宫不仅是中国古代建筑的杰作，也是秦朝强盛的象征。虽然阿房宫的建设并未完全完成，但它在历史上留下了深刻的印象，成为后世文人墨客吟咏的对象。唐代诗人杜牧的《阿房宫赋》就是一首描写阿房宫壮丽景象的著名诗篇，流传至今。

    文化影响
    阿房宫不仅在历史上具有重要意义，也对中国文化产生了深远的影响。许多文学作品、诗词歌赋都提到了阿房宫，将其描绘为一个象征权力和奢华的场所。阿房宫的故事和形象也经常出现在影视作品中，成为人们了解和感受中国古代文化的窗口。

    总之，阿房宫是中国古代建筑和文化的瑰宝，虽然它已不复存在，但其历史和文化价值仍然值得我们深入研究和传承。
    `
  },
  {
    id: 6,
    image: '/images/hanweiyanggong.jpg',
    title: '汉未央宫',
    description: `
      未央宫是中国历史上西汉时期的皇宫之一，位于今陕西省西安市西北郊的龙首原上。未央宫始建于公元前202年，由汉高祖刘邦命令丞相萧何主持修建，作为新建立的汉朝的政治中心。未央宫不仅是西汉时期皇帝处理政务、举行典礼的主要场所，也是当时世界上最大的宫殿之一。

      未央宫占地面积约5平方公里，其规模宏大，建筑布局严谨，主要分为前殿区、后宫区、园林区等几个部分。前殿区是皇帝接见群臣、处理国家大事的地方；后宫区则是皇室成员居住的区域；园林区则分布着各种亭台楼阁和池塘，是皇帝及其家人休闲娱乐的场所。

      在未央宫中，最著名的建筑当属“前殿”，即正殿，是整个未央宫的核心建筑，用于举行重大的国家典礼和仪式。此外，还有许多其他重要的殿堂和建筑，如承明殿、宣室殿等，都是当时重要的政治活动场所。

      未央宫的存在时间长达近四百年，直到东汉末年，随着汉朝的衰落，未央宫也逐渐废弃。历经千年风雨，如今的未央宫遗址已经大部分被埋没或毁坏，但通过考古发掘，人们仍能从中窥见当年汉代皇宫的辉煌与壮丽。今天，未央宫遗址公园成为了研究中国古代历史和文化的重要场所之一。
    `
  }
];

const slide = ref({});
const formattedDescription = computed(() => {
  if (slide.value && slide.value.description) {
    return slide.value.description.split('\n');
  }
  return [];
});

const backgroundStyle = computed(() => ({
  'background-image': `url(${slide.value.image})`,
  'background-size': 'cover',
  'background-position': 'center',
  'background-repeat': 'no-repeat',
  'background-attachment': 'fixed'
}));

onMounted(() => {
  const id = parseInt(route.params.id);
  slide.value = slides.find(slide => slide.id === id) || {};
});

const goHome = () => {
  router.push('/palace');
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff; /* 默认背景色 */
  transition: background-image 0.3s ease;
}

.detail {
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.8); /* 半透明背景 */
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 40px auto;
  position: relative;
  transition: transform 0.3s ease;
}

.detail:hover {
  transform: translateY(-10px);
}

.detail__image {
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.detail__image:hover {
  transform: scale(1.05);
}

.detail__title {
  font-size: 44px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #333;
  margin-bottom: 25px;
  font-weight: 700;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
}

.detail__paragraph {
  font-size: 20px;
  line-height: 1.8;
  color: #333;
  font-family: 'Roboto', Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto 30px;
  text-align: justify;
  opacity: 0;
  animation: fadeIn 1s forwards;
  text-indent: 2em;
}

.detail__paragraph:nth-child(odd) {
  animation-delay: 0.2s;
}

.detail__paragraph:nth-child(even) {
  animation-delay: 0.4s;
}

.return-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
  outline: none;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.return-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>