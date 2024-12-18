<template>
  <div class="fullpage-container" @wheel="handleScroll">
    <!-- Section 1 -->
    <div class="section">
      <div class="carousel-wrapper">
        <!-- 轮播图 -->
        <el-carousel
          class="carousel"
          :interval="5000"
          indicator-position="outside"
          @change="handleChange"
          :autoplay="false"
          type="card"
        >
          <el-carousel-item
            v-for="(item, index) in items"
            :key="index"
            class="carousel-item"
          >
            <el-card class="carousel-card">
              <img :src="item.image" alt="carousel image" class="card-image" />
            </el-card>
          </el-carousel-item>
        </el-carousel>

        <!-- 动态文字展示 -->
        <div class="description-container">
          <h2>{{ currentItem.title }}</h2>
          <p>{{ currentItem.description }}</p>
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div
      class="section"
      style="display: flex; align-items: center; justify-content: center"
    >
      <el-carousel
        style="width: 100vw; height: 100vh; background-color: antiquewhite"
        :autoplay="false"
      >
        <el-carousel-item
          v-for="item in currentItem.info"
          :key="item"
          class="photo"
        >
        <div class="section-content">
            <h1>{{ item.title }}</h1>
            <p>{{ item.txt }}</p>
          </div>
        <el-image
            style="width: 100%; height: 100%; "
            :src="item.img"
            fit="content"
          />

        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  {
    image: require('../assets/img/religious/13.png'),
    title: "常平关帝庙",
    description:
      "常平关帝庙，位于山西省运城市盐湖区常平乡常平村，始建于隋朝，占地面积13937平方米。",
    info: [
      {
        img: require('../assets/img/religious/16.png'),
        title:'建筑格局',
        txt: "  常平关帝庙坐北朝南，占地面积13937平方米。在建筑布局上沿袭“前朝后寝”之制，主体建筑依轴线顺次布列，中轴线依次排列有山门、仪门、献殿、崇宁殿、娘娘殿、圣祖殿，东西两侧配以钟楼、鼓楼、木牌坊、廊房、官厅、官库、太子殿。庙前为“灵钟盐海”、“秀毓条山”木坊两座，钟楼、鼓楼相对两旁，石雕牌坊位于钟鼓楼之中央，正面雕“关王故里”，为明嘉靖三年（1524年）立。通过牌坊为山门、午门和献殿，三座建筑均面阔三间，进深四椽，悬山顶。献殿前后檐敞朗，梁枋简洁，皆饰彩绘。祖塔在山门与午门之间，八角七层砖建，实心塔，无基座，七重叠涩出檐。塔身嵌铭五块，记载了金大定乙西年（1165年）建塔及明嘉靖、清嘉庆年间重修情况。献殿之后为崇宁殿，面阔五间，进深四间，重檐歇山顶。殿内木雕龛内神关羽端坐，四位侍者神情谦恭。一组四合院建筑内正面为娘娘殿，面阔、进深各五间，平面近方形。前檐设廊，重檐歇山顶。殿内关夫人、侍女像为清塑中之佳品。面阔三间，进深四椽，悬山顶。",
      },
      {
        img:  require('../assets/img/religious/17.png'),
        title:'历史文化',
        txt: "  关羽出生地常平关帝庙位于解州镇东南九公里处的常平村，又称关帝家庙。这里依山傍水，环境幽雅。该庙始建年代与解州关帝庙相同，建筑面积达15000余平方米。殿宇巍峨，结构精巧，布局严谨，与祖庙解州关帝庙有异曲同工之妙。特殊的是这里保存有全国其他武庙不具备的纪念关羽父母殉身的“井塔”；古代泥塑艺术“极品”关羽祖上三代、关夫人等彩塑。",
      },
    ],
  },
  {
    image: require('../assets/img/religious/14.png'),
    title: "湄洲妈祖祖庙",
    description:
      "湄洲妈祖祖庙，位于福建省莆田市湄洲岛，始建于北宋雍熙四年（987年），是妈祖文化的起源地。",
      info: [
      {
        img: require('../assets/img/religious/18.png'),
        title:'简要介绍',
        txt: "  妈祖庙，即“湄洲妈祖祖庙”，位于福建省莆田市湄洲岛，始建于北宋雍熙四年（987年），是妈祖文化的起源地。 \n\n  湄洲妈祖祖庙是世界上第一座妈祖庙，现存建筑多为清代结构，妈祖庙建筑群以前殿为中轴线布局，依山势而建，形成了纵深300米、高差40余米的主庙道，从山门、仪门到正殿由323级台阶连缀两旁的各组建筑。在祖庙山顶，还建有14米高的巨型妈祖石雕像。 湄洲妈祖祖庙建筑群主要由正殿、 寝殿、 圣父母祠等组成， 经历数次重修扩建才有了如今的格局。 \n\n  2006年5月25日，妈祖庙被中华人民共和国国务院公布为第六批全国重点文物保护单位。 2018年，妈祖庙入选“海上丝绸之路·中国史迹”储备遗产点名单。",
      },
      {
        img:  require('../assets/img/religious/19.png'),
        title:'建筑格局',
        txt: "  湄洲妈祖祖庙包括西轴线和南轴线两大建筑群，西轴线有牌坊、长廊、山门、圣旨门、钟鼓楼、正殿、寝殿、朝天阁、升天楼、佛殿、观音殿、五帝庙、中军殿以及爱乡亭、龙凤亭、香客山庄、思乡山庄等大小建筑36处。南轴线建筑群有寝殿、敕封天后宫殿、庑房、献殿、钟鼓楼、山门、牌坊、天后广场、天后戏台等大型建筑。整个祖庙群殿阁纵横。",
      },
      {
        img:  require('../assets/img/religious/20.png'),
        title:'寝殿',
        txt: "  寝殿，占地面积238平方米，建于宋雍熙四年(987年)。明洪武七年(1374年)泉州卫指挥周坐重建，永乐初和宣德六年(1431年)郑和重修，康熙二十二年(1683年)姚启圣和康熙二十三年(1684年)施琅均以重修，民国年间再度在旧址重修。单檐歇山顶，面阔三间、进深二间，前额保存民国初重修时的墨书，沿用部分明、清石柱和柱础。",
      },
      {
        img:  require('../assets/img/religious/21.png'),
        title:'正殿',
        txt: "  正殿，明永乐初(1403年)郑和奉旨遣官建造，原为朝天阁，清康熙二十二年(1683年)闽浙总督姚启圣获妈祖保佑建功而扩建祖庙时，把朝天阁重修并改为正殿，为重檐歇山顶、面阔三间、进深三间的抬梁结构建筑。",
      }
    ],
  },
  {
    image: require('../assets/img/religious/15.png'),
    title: "后土祠",
    description:
      "后土祠是中国民间广泛信仰的神祗，总司土地之神。后土祠位于山西省万荣县西南40公里处黄河岸边庙前村北，是中华神州大地上最古老的祭祀后土（地母）的祠庙",
      info: [
      {
        img: require('../assets/img/religious/22.png'),
        title:'简要介绍',
        txt: "  后土祠是中国民间广泛信仰的神祗，总司土地之神。后土祠位于山西省万荣县西南40公里处黄河岸边庙前村北，是中华神州大地上最古老的祭祀后土（地母）的祠庙。\n\n  1996年，国务院确定万荣后土祠为全国重点文物保护单位。\n\n  现存后土祠，虽不及唐宋时之壮观，但其布局严谨完整，仍为国内最具规模的后土祠庙之冠。\n\n  国内各界人士，港、澳、台胞及海外华侨，寻根问祖，慕名而来，祭祀后土，络绎不绝。祈祷后土圣母所辖九州，五谷丰登、国泰民安、世道升平、物阜民丰；保佑全家健康平安，兴旺发达，万事如意。尤其在后土圣母诞辰之日（农历三月十八）和十月初五庙会期间，善男信女，商旅游客，摩肩接踵热闹非凡。",
      },
      {
        img:  require('../assets/img/religious/23.png'),
        title:'秋风楼',
        txt: "  秋风楼在后土庙内。汉武帝刘彻曾5次巡幸河东。元鼎四年（公元前113年）刘彻巡视河东祭祀后土庙时，正值晚秋，武帝在汾河舟中欢宴群臣，慷慨高歌，写下了“秋风辞”。\n\n  秋风楼是为保存《秋风辞》兴建的。创建年代不详，现存形制结构为明代所建。秋风楼建于汾阴脽上，靠近黄河，因黄河淹没，曾于清代康熙、同治年间重修。现今的秋风楼，系清代同治9年（公元1870年）重建。秋风楼，楼身高达32.6米，楼身为曲尺形，主体为三层檐，2、3层上建有回廊，全楼斗拱密布，造型美观、大方，引人观瞻。其两侧下方都有精雕的吊柱，共有28根，传说代表汉武帝的云台28将；上层是十字歇山顶，共有36个挑角，说是象征隋末瓦岗寨36兄弟；每个玻璃挑角上都装有彩色琉璃武将形象，共108个，据说象征梁山一百单八将。楼内上层，现有“秋风辞”石碑两块，它既象征着秋风楼的古老，又为秋风楼增加了艺术色彩。\n\n  秋风楼，位于祠的最后，凭河而立，崇峻壮丽。楼身分三层，砖木结构，十字歇山顶，高32.6米，下部筑以高大的台阶，东西贯通，其上各雕横额一方，东曰“瞻鲁”，西曰“望秦”。正面门额嵌有“汉武帝得鼎”和“宋真宗祈祠”石刻图。线条流畅、形象逼真，全楼结构玲巧，形制劲秀，因三层藏有元至元八年（公元1271年）镌刻汉武帝《秋风辞》碑而得名。",
      }
    ],
  },
]);

const currentIndex = ref(0);
const currentItem = ref(items.value[0]);

// 切换轮播图时更新文字内容
const handleChange = (index) => {
  currentIndex.value = index;
  currentItem.value = items.value[index];
};

// 当前可滚动的页面索引
let sectionIndex = ref(0);

// 页面切换逻辑
const handleScroll = (event) => {
  const sections = document.querySelectorAll(".section");

  // 判断滚动方向
  if (event.deltaY > 0 && sectionIndex.value < sections.length - 1) {
    // 向下滚动
    sectionIndex.value++;
  } else if (event.deltaY < 0 && sectionIndex.value > 0) {
    // 向上滚动
    sectionIndex.value--;
  }

  // 滚动到目标 section
  sections[sectionIndex.value].scrollIntoView({
    behavior: "smooth",
  });
};
</script>
<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #000000;
}

.fullpage-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.section {
  height: 100vh;
  width: 100vw;
  white-space: pre-wrap; /* 保留换行符 */
}

.carousel-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
  /* 水平居中 */
}

.carousel {
  width: 80%;
  /* 调整宽度 */
}

.carousel-item {
  height: 50vh;
  /* 高度占屏幕 50% */
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-card {
  height: 100%;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.description-container {
  margin-top: 20px;
  text-align: center;
}

.description-container h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.description-container p {
  font-size: 16px;
  color: #000000;
}
.photo {
  height: 100vh;
  width: 100vw;

  display: flex; /* 使子元素水平排列 */
  justify-content: space-between; /* 控制两子元素之间的间距 */
  align-items: center; /* 垂直方向居中对齐 */
}
.section-content {
  background: rgba(0, 0, 0, 0.651);
  color: white;
  margin-left: 0%;
  width: 30%;
  height: 100%;
}

.section-content h1 {
  margin-left: 35%;
  font-size: 2.5rem;
  margin-top: 15%;
}

.section-content p {
  font-size: 1.3rem;
  line-height: 1.5;
  margin: 0 5%;
}
</style>
