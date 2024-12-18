<template>
  <div class="fullpage-container" @wheel="handleScroll">
    <div v-for="(section, index) in sections" :key="index" class="section">
      <el-carousel style="width: 100vw; height: 100vh; background-color: antiquewhite;" :autoplay="false">
        <el-carousel-item v-for="item in section.section" :key="item" class="photo" >
          <el-image style="width: 100%; height: 100%;position: absolute;z-index: 1;" :src="item.image" :fit="fit" />
          <div class="section-content" style="position: absolute;z-index: 2;">
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sections = ref([
  {
    section: [
     {
        image: require('../assets/img/religious/4.png'),
        title: '青羊宫',
        description: '  青羊宫位于四川省成都市一环路西二段，被誉为“川西第一道观”、“西南第一丛林”，也是全国著名的道教宫观之一。n\n  青羊宫始建于周朝，原名青羊肆。至明朝，唐朝所建殿宇毁于兵灾。现存建筑大多为清代康熙六至十年（公元1667年——公元1671年）陆续重建，占地面积约12万平方米。 \n\n  青羊宫主要建筑有山门、三清殿、唐王殿等。宫内混元殿高大雄伟，八卦亭是其中保存最完整、造型最华贵的建筑，供奉着老子骑着青牛的塑像。青羊宫内最宝贵的文物是一部《道藏辑要》，是世界上保存最完整的版本，成为研究道教的珍贵资料。',
      },
      {
        image: require('../assets/img/religious/5.png'),
        title: '三清殿',
        description: '  三清殿又名无极殿，是青羊宫的主殿，始建于唐朝，重建于清康熙八年（公元1669年）。三清殿基长四十米，为正方形，总面积1600平方米。外檐柱上雕刻着六合童儿、双狮戏球等艺术木雕，有一副贴金对联：“福地卧青牛石室烟霞万古，洞天翔白鹤蓬壶岁月千秋”（原中国道教协会会长黎遇航所题）。殿前左陈一钟，名曰“幽冥钟”，是明朝时铸造，重约三千多公斤。右配一应鼓，每逢初一、十五和吉庆大典便击鼓鸣钟。'
      },
      {
        image: require('../assets/img/religious/6.png'),
        title: '混元殿',
        description: '混元殿是青羊宫的第二重大殿，内供奉道教最高尊神——三清天尊之一的太清道德天尊即太上老君。混元殿重建于清光绪年间，占地面积616平方米。有石柱26根，木柱2根。柱上雕刻有镂空的鹿、凤凰望月。双狮戏球等图案，形象生动活泼。在宋真宗时，真宗崇奉道教，上奉太上老君为混元上帝。殿内正中供奉的就是“混元祖师”，老君面容慈祥，手持混元乾坤圈。将圈拉伸便是“一”字，故它展示着世界的本原还处于混沌状态，而老君开天辟地，使“道生一，一生二，二生三，三生万物”。后殿供奉的是“慈航真人”，佛教称“观音大士”。'  
      },
      {
        image: require('../assets/img/religious/7.png'),
        title: '斗姥殿',
        description: '斗姥殿也称元辰殿，长约十米，宽约九米，建于明代，为楼底式建筑。殿内供奉的斗姥，全称为摩利攴天大圣先天斗姆元君，是道教信奉的一大女神，也是六十甲子太岁本命星君的首领。道书中说她名紫光夫人，共生了九个儿子（即九皇），分别是：玉皇、紫微、贪狼、巨门、禄存、文曲、廉贞、武曲、破军。斗姥额有三目，肩有四首，左右各出四臂，为三目四首八臂的女神，神像慈容照人，《太上玄门日诵晚课仙经》中云“显灵踪于尘世，卫圣驾于阎浮，众生有难若称名，大士寻声来救苦”。所以，斗姥也是一位掌人间生死罪福的天神。'  
      }

    ]
  },
  {
    section: [
      {
        image: 'https://img1.qunarzz.com/travel/d7/1704/36/a2c3c8b2ee586eb5.jpg',
        title: '紫霄宫',
        description: '  紫霄宫，又名“太元紫霄宫”，明代宫观建筑，位于湖北省十堰市丹江口市境内的武当山。紫霄宫坐落在武当山的主峰——天柱峰东北的展旗峰下，占地面积约27.4万平方米。面对照壁、三台、五老、蜡烛、落帽、香炉诸峰，右为雷神洞，左为禹迹池、宝珠峰。周围山峦天然形成一把二龙戏珠的宝椅，明永乐皇帝封之为“紫霄福地”。\n\n  紫霄宫是武当山保存较完整的皇家庙观建筑群。同时也是武当山保留比较完整建筑群的重要组成部分。紫霄宫为武当山历史上的道教宫观之一，属全国道教重点开放宫观。\n\n  1932年，第二次革命战争时期红三军司令部所在地，贺龙元帅曾居此。 1982年02月24日，紫霄宫作为皇家庙观建筑群，被国务院公布为第二批全国重点文物保护单位。1984年，紫霄宫作为全国重点宗教活动场所开放。1994年12月，作为武当山古建筑群的一部分被联合国教科文组织列入《世界文化遗产名录》。'
      },
      {
        image: require('../assets/img/religious/1.png'),
        title: '紫霄殿',
        description: '  紫霄殿大殿面阔进深各五间，高18.3米，阔29.9米，深12米，面积358.8平方米。共有檐柱、金柱36根，排列有序。大殿为重檐歇山顶式大木结构，由三层崇台衬托，比例适度，外观协调。上下檐保持明初以前的做法。柱头和斗栱显示明代斗杠的特征。梁架结构用九檀，高宽比为5:2.5，保持宋辽以来的用材比例。殿内金柱斗栱，施井口天花，明间内槽有斗八藻井。明间后部建有刻工精致的石须弥座神龛，其中供玉皇大帝，左右肋侍神像，均出自明人之手。\n\n  紫霄殿殿内金柱斗栱，施井口天花，明间内槽有斗八藻井。明间后部建有刻工精致的神龛，其中供玉皇大帝，左右陪侍神像，均为明代物。紫霄殿为紫霄宫的正殿，建在三层石台基之上，台基前正中及左右侧均有踏道通向大殿的月台。紫霄殿是武当山保存下来的唯一的一座重檐歇山式木结构殿堂，这座在中国古建筑中屈指可数的抬梁式大木结构的道教建筑，其结构、布局科学合理，艺术风格协调统一，同自然环境融为一体，在武当山古建筑群中独具风貌。同时，在漫长的历史进程中，沉积有历代工匠的技术和智慧，集中体现了中国明清建筑的辉煌成就，具有重要的观赏和科研价值及历史和思想信仰等意义。',
      },
      {
        image: require('../assets/img/religious/2.png'),
        title: '龙虎殿',
        description: '  龙虎殿，殿内中间供奉的神仙是王灵官，为道教里的护法神，王灵官本名王善，相传他有三只眼睛，能分别善恶，惩恶扬善，性情刚直，办事公道，铁面无私。殿内两旁则是青龙白虎泥塑雕像，其怒目圆睁，龇牙咧嘴，身着胄甲，手持戈戟，形象生动传神，使人望而生畏。这两座神像是元代雕刻家刘元一的传世作品，是武当山的泥塑珍品。',
      },
      {
        image: require('../assets/img/religious/3.png'),
        title: '父母殿',
        description: '  父母殿俗称荷叶殿，此殿崇台高举，秀雅俏丽，供奉净乐国王明真大帝和善胜皇后琼真上仙。殿后即太子岩，系一天然洞穴略加人工开拓而成的石室。左神龛内供奉的是观音，右神龛内供奉的是三霄娘娘、送子娘娘等。称为百子堂。',
      },
    ]
  },
  {
    section: [
    {
        image: require('../assets/img/religious/8.png'),
        title: '重阳宫',
        description: ' 重阳宫，全真道祖庭，又称重阳万寿宫、祖庵，享有“天下祖庭”“全真圣地”之盛名 [1] [21]，位于陕西省西安市鄠邑区祖庵街道，距西安市中心40千米。各类建筑共占地1.08万平方米，建筑面积1229.2平方米，纪念塔建筑面积105.6平方米，附设建筑面积222.5平方米。\n\n  重阳宫是全真派的三大祖庭之首，是全真道祖师王重阳早年修道和遗蜕之所 。王重阳主张儒、释、道三教合一，以“三教圆通，识心见性，独全其真”为宗旨，故名其教为全真。其弟子丘处机受到元太祖的器重，全真教在北方愈益兴盛。重阳宫从而成为全真教祖庭。\n\n  西安重阳宫，是为全真教开山祖庭，北京白云观、山西永乐宫虽也号称“祖庭”，其实不过是王重阳弟子所建。'
    },
    {
        image: require('../assets/img/religious/9.png'),
        title: '灵官殿',
        description: ' 灵官殿修于清同治年间。供奉道教护法寺神灵宫。其像威武凶猛，火红脸膛，双目圆睁，额上还有一目，锯齿獠牙，虬须怒张，一手执金鞭，一手执金砖，身披金甲，足踏风火轮。\n\n  王灵官本名王善，历史上确有其人，他曾拜萨守坚为师学符法，是宋代著名道士林灵素的再传弟子。这位灵官是道教护法镇山神将。有的道书说他是武当山中五百灵官的统帅，叫华光元帅，又叫五显灵官。到了宋代，又出现了一位“火车王灵官”，镇守道观山门的灵官一般就指这位王灵官。\n\n  王灵官在道教中的地位和作用，与佛教中的韦驮很相似，是重要护法神，镇守山门。因他曾被封为“玉枢火府天将”，人们又把他看成火神，有的灵官像就完全是一副火神爷模样，故有的火神庙也供灵官。'
    },
    {
        image: require('../assets/img/religious/10.png'),
        title: '七真殿',
        description: ' 七真殿建于晚清，供奉道教全真教派七真。七真，是王重阳的七大弟子，分别为马丹阳、谭长真、刘长生、丘长春、王玉阳、郝太古、孙不二。\n\n  王重阳在陕西修道后赴山东宁海传道，收全真七子。马丹阳，家世业儒，为汉伏波将军马援之后，因兵乱东迁宁海。夫人孙不二，成道后称为清静散人。马丹阳是王重阳的大弟子，为全真教在中国北方传播作出了卓有成效的贡献。\n\n  “七真”成为全真教发扬光大的奠基人和播种者。因此可以说全真教的起足点在陕西关中祖庵街道，但其真正的根据地、开拓地在山东宁海。'
    },
    ]
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

.photo {
  height: 100vh;
  width: 100vw;
}

.section-content {
  background: rgba(0, 0, 0, 0.5);
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