<template>
  <div class="tomb" @wheel="handleScroll">
    <div class="timeline">
      <ul>
        <li
          v-for="(dynasty, index) in dynasties"
          :key="dynasty.name"
          :class="{ active: index === currentDynastyIndex }"
          @click="jumpToDynasty(index)"
        >
          {{ dynasty.time }}
        </li>
      </ul>
    </div>

    <div class="dynasty-info">
      <div class="text-background">
        <h1>{{ currentDynasty.name }}</h1>
        <p>{{ currentDynasty.description }}</p>
      </div>
    </div>

    <div class="dynasty-details">
      <div class="text-background">
        <div @click="showFeatureDetailModal" class="clickable">
          <h2>陵墓特点</h2>
        </div>
        <div
          @mouseover="showRepresentatives = true"
          @mouseleave="showRepresentatives = false"
        >
          <h2>代表陵墓</h2>
          <ul v-if="showRepresentatives">
            <li
              v-for="(tomb, index) in currentDynasty.representatives"
              :key="index"
              @mouseover="hoverTomb = tomb"
              @mouseleave="hoverTomb = ''"
              @click="navigateToTombDetails(tomb)"
              class="clickable"
            >
              {{ tomb }}
              <span v-if="hoverTomb === tomb">（详细）</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="selectedFeature" class="feature-modal">
      <div class="modal-content">
        <h2>陵墓特点详情</h2>
        <div
          v-for="(feature, index) in selectedFeature"
          :key="index"
          class="feature-item"
        >
          <p>{{ feature }}</p>
        </div>
        <button @click="closeFeatureDetail">关闭</button>
      </div>
    </div>

    <div
      class="dynasty-background"
      :style="{ backgroundImage: `url(${currentDynasty.image})` }"
    ></div>
    <button class="back-button" @click="goBackHome">返回首页</button>
  </div>
</template>

<script>
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.jpg";
import work6 from "../assets/work6.png";

export default {
  name: "TombView",
  data() {
    return {
      currentDynastyIndex: 0,
      selectedFeature: null,
      hoverTomb: "",
      showFeatures: false,
      showRepresentatives: false,
      dynasties: [
        {
          name: "秦朝",
          time: "公元前221年 - 公元前206年",
          description:
            "秦始皇陵是秦朝最著名的陵墓，建于公元前210年，兵马俑展示了当时的军队文化与工艺水平。",
          features: [
            "布局设计独特：秦始皇陵地宫的设计打破了常规，由多个宽敞的殿宇和长廊组成，内部共分为三层，至今仍未完全发掘，留下了许多谜团。地宫中还有许多复杂的廊道和交叉路口，增加了其神秘感。",
            "宝藏传说：秦始皇陵地宫被传为藏有无数宝藏，包括黄金、宝石、稀有器物等，但这些宝藏尚未得到证实。",
            "石雕壁画：地宫的墙壁上刻画了大量栩栩如生的石雕和壁画，内容丰富多样，包括神话传说、人物形象、动植物等，具有极高的艺术价值。",
            "“天圆地方”设计理念：秦始皇陵的整体结构体现了“天圆地方”的设计理念，主墓室位于中心，周围有陪葬坑和祭祀场所。",
            "机关重重：秦始皇陵内部机关重重，构造复杂，外部宏伟，体现了秦始皇对死后世界的精心设计。",
            "历史背景和文化内涵：秦始皇陵不仅是一座陵墓，更是中国古代建筑艺术和雕塑艺术的宝库，凝聚了无数劳动人民的智慧与汗水，展示了秦朝的辉煌与荣耀。",
          ],
          representatives: ["秦始皇陵"],
          image: work1,
        },
        {
          name: "汉朝",
          time: "公元前202年 - 公元220年",
          description:
            "汉代陵墓讲究方位与风水，典型如汉武帝的茂陵，展示了当时帝王对永恒权力的追求。",
          features: [
            "西汉帝陵多选在环境优美、土地肥沃的山脉或水流汇聚处，且需符合“青云白日”标准，布局精细，由墓道、墓室和墓穴等组成，反映皇权尊严。",
            "帝陵分为外城、中城和内城，规模宏大，装饰丰富多彩，包括石雕、壁画和陶俑等，体现当时工艺水平和审美观念。",
            "东汉帝陵规模较西汉缩小，设施简化，封土由覆斗形转变为圆丘形，且由奢华“厚葬”转变为“薄葬”，这与国力变化及防盗掘考虑有关。",
          ],
          representatives: ["汉武帝茂陵"],
          image: work2,
        },
        {
          name: "唐朝",
          time: "618年 - 907年",
          description:
            "唐代的乾陵以其巨大的规模和精美的雕刻闻名，是唐太宗与武则天的合葬陵墓。",
          features: [
            "唐朝帝王陵墓多依山为陵，如唐太宗昭陵、唐高宗乾陵等，分布在北山山脉之上。同时，也有积土为冢的形式，如高祖李渊献陵。墓穴多采用砖室，官僚墓室多为单室，高级官员则可能设有前室。",
            "陵园座北朝南，布局严谨，分为内、外城墙，南面设有多道门，石刻群置于门间。墓室位于陵园北部，是主体建筑。陪葬墓和祭祀建筑也有严格布局。",
            "唐朝陵墓中流行壁画和石刻艺术，内容和规格视墓主人身份而异，反映了唐代皇室墓葬制度和雕刻艺术的高超水平。同时，陵园气势宏伟，随葬品丰富，蕴涵极高的历史、科学价值。",
          ],
          representatives: ["唐高宗乾陵"],
          image: work3,
        },
        {
          name: "宋朝",
          time: "960年 - 1279年",
          description: "北宋皇陵遵循“五音利姓说”和“地形堪舆”的原则，布局独特。",
          features: [
            "宋朝陵墓多选在“山高水来”的吉祥之地，且受阴阳堪舆术影响，陵园布局一反常规，坐北面南且南高北低。",
            "宋陵占地面积广，墓葬数量多，包括皇帝陵、皇后陵以及宗室、勋臣名将等陪葬墓，形成了气势雄伟的皇家陵墓群。",
            "帝后同茔合葬，但各自单独起陵，后陵位于帝陵西北。陵园建筑布局对称、庄重，体现了儒学观念中的和谐、均衡思想。",
            "在陵园设计中融入了儒学和佛教信仰，如佛教壁画、佛像等。",
            "宋朝政府重视陵墓的保护和维修，制定了相关规定，并设有专门的奉陵邑和禅院来管理陵区事宜。",
          ],
          representatives: ["永定陵"],
          image: work6,
        },
        {
          name: "明朝",
          time: "1368年 - 1644年",
          description:
            "明十三陵是明朝皇陵建筑的代表，布局严谨，体现了封建礼制的庄重与权威。",
          features: [
            "明朝陵墓通常由主要陵区、配殿、神道和陵园等组成，布局规整，层次分明。",
            "主要陵区由坟墓和宫殿式建筑构成，坟墓多为土山或土丘形式，宫殿式建筑则展现出明代建筑特色，如屋顶重檐、斗拱和雕花等。",
            "注重细节雕刻和彩绘，常见装饰元素包括石雕、砖雕、木雕和彩绘壁画等，图案寓意皇权和吉祥。",
            "神道两旁设置石狮、石马和石人等石像，象征守护；配殿中常设有神龛，供奉祖先和神明神像，体现对神灵的崇拜和祭祀。",
          ],
          representatives: ["明十三陵"],
          image: work4,
        },
        {
          name: "清朝",
          time: "1644年 - 1912年",
          description:
            "清东陵和清西陵是清朝的皇家陵墓，融合了汉族和满族文化，体现了时代的多样性。",
          features: [
            "多采用“崇”字形，主体墓葬与侧葬墓室通过庭院相连，且讲究轴线对称。",
            "墓葬设计多采用四合院、三进院等方式，注重与自然环境的协调。",
            "皇帝陵墓规模尤为宏大，如清东陵和清西陵，体现了皇家的威严。",
            "老百姓的墓葬形状多样，包括土坡墓、圆墩墓、方形墓等；而皇帝陵墓则多采用宝城宝顶形式。",
            "陪葬品包括墓画、墓志、墓碑、陶俑等，反映了当时的生活情况和思想文化。",
          ],
          representatives: ["清西陵"],
          image: work5,
        },
      ],
    };
  },
  computed: {
    currentDynasty() {
      return this.dynasties[this.currentDynastyIndex];
    },
  },
  methods: {
    handleScroll(event) {
      if (event.deltaY > 0) {
        this.currentDynastyIndex =
          (this.currentDynastyIndex + 1) % this.dynasties.length;
      } else if (event.deltaY < 0) {
        this.currentDynastyIndex =
          (this.currentDynastyIndex - 1 + this.dynasties.length) %
          this.dynasties.length;
      }
    },
    jumpToDynasty(index) {
      this.currentDynastyIndex = index;
    },
    showFeatureDetail(feature) {
      this.selectedFeature = feature;
    },
    showFeatureDetailModal() {
      this.selectedFeature = this.currentDynasty.features;
    },
    closeFeatureDetail() {
      this.selectedFeature = null;
    },
    navigateToTombDetails(tomb) {
      this.$router.push(`/tomb/${tomb}`);
    },
    goBackHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.tomb {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  font-family: "Georgia", serif;
  color: #f4f4f4;
  position: relative;
  /* background: linear-gradient(to bottom, #3a1c1c, #1a0c0c); */
}

.timeline ul {
  list-style: none;
  display: flex;
  padding: 10px 20px;
  margin: 0;
  justify-content: center;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.timeline li {
  margin: 0 15px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  color: #f4f4f4;
  background: rgba(128, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.timeline li.active {
  background: #d4af37;
  color: #2c2c2c;
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(255, 223, 37, 0.5);
}

.timeline li:hover {
  background: rgba(212, 175, 55, 0.7);
  color: #333;
  transform: scale(1.1);
}

.dynasty-info .text-background,
.dynasty-details .text-background {
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  color: #eaeaea;
  text-shadow: 1px 1px 2px #000;
}

.dynasty-info .text-background h1 {
  font-size: 2.5em;
  color: #ffda44;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.dynasty-details h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #f4f4f4;
  text-shadow: 1px 1px 2px #000;
}

.dynasty-details ul li {
  font-size: 1.2em;
  margin: 10px 0;
  padding: 5px 10px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: all 0.3s;
}

.dynasty-details ul li:hover {
  color: #ffda44;
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.05);
}

.feature-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  padding: 30px;
  border-radius: 15px;
  color: #f4f4f4;
  z-index: 3;
  width: 60%;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
}

.feature-modal .modal-content h2 {
  font-size: 2em;
  margin-bottom: 15px;
  color: #ffda44;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.modal-content button {
  margin-top: 20px;
  background: linear-gradient(45deg, #d4af37, #ff8c00);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
}

.modal-content button:hover {
  background: linear-gradient(45deg, #ff8c00, #d4af37);
  box-shadow: 0 8px 20px rgba(255, 175, 55, 0.8);
}

.back-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(to right, #d4af37, #b8860b);
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.back-button:hover {
  background: linear-gradient(to right, #b8860b, #d4af37);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
}

.dynasty-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(0.5);
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.dynasty-background:hover {
  opacity: 1;
}
</style>
