<script>
export default {
  name: "xianTowerCards",
  data() {
    return {
      carouselItems: [
        {
          image: require("../assets/img/tower1.jpg"),
          title: "永宁门",
          description:
            "永宁门俗称南门，是西安城门中资格最老、沿用时间最长的一座，建于隋初。是皇城南面三座门中偏东的一座，称安上门，唐末韩建缩建新城时留作南门，明代改名永宁门。永宁门箭楼在西安保卫战（也称二虎守长安）中被毁，于2013年在原址上重建。永宁门规格为6+1式门洞。"
        },
        {
          image: require("../assets/img/tower2.jpg"),
          title: "朱雀门",
          description:
            "朱雀门原本是唐长安皇城的正南门，门下是城市中央的朱雀大街。隋唐时，皇帝常在这里举行庆典活动。开皇九年（589年），隋帝国统一天下，隋文帝在朱雀门城楼检阅凯旋大军。唐末韩建缩建新城时，朱雀门被封闭。1985年修复西安城墙时，发掘出包裹在明城墙内的朱雀门遗址。如隋唐文人描写的那样宏伟华丽，城门柱础用大理石制成，青石制作的门坎上刻有线条优美神采飞扬的蔓草花纹，磨砖对缝的门洞隔墙厚实端正。1986年开通的朱雀门位于遗址西侧。朱雀门规格为4门洞。"
        },
        {
          image: require("../assets/img/tower3.jpg"),
          title: "勿幕门",
          description:
            "勿幕门俗称小南门，开通于民国二十八年（1939年），民国三十六年（1947年）更名为勿幕门，以此纪念辛亥革命中陕西的革命先烈井勿幕先生。井勿幕是同盟会最早一批会员，民主革命时期有重大影响的革命家，在护法运动中壮烈牺牲，被孙中山、黄兴称为“西北革命巨柱”。陕西军民为怀念先烈，于民国三十五年（1946年）将井勿幕在西安居住过的四府街更名为“井上将街”，并将该街南端城门命名为“井上将门”。民国三十六年（1947年）又分别更名为“勿幕街”和“勿幕门”。勿幕门规格为单门洞。"
        },
        {
          image: require("../assets/img/tower4.jpg"),
          title: "含光门",
          description:
            "含光门是南城墙最西一门，是唐长安皇城南面的偏西门。唐末韩建缩建新城时，封闭了中门洞和西门洞，保留了东门洞，北宋以后全部封闭。1984年整修西安城墙时，发掘出含光门遗址，发现花岗石制作的柱础、刻花的门槛门道。现已把新建券洞城门置于遗址东西两侧，对遗址作框架结构保护，外包城砖，使外观与城墙一致，内部设置人工采光和空调系统，供游客参观。唐皇城墙含光门遗址博物馆可以从城墙上进入。含光门规格为4门洞。"
        },
        {
          image: require("../assets/img/tower5.jpg"),
          title: "建国门",
          description:
            "建国门位于南城墙东端，其命名源于纪念新中国成立。此门见证了历史变迁，民国时期西安事变的张学良公馆便坐落于此。建国门现为3门洞结构，是连接城内外的重要通道。"
        },
        {
          image: require("../assets/img/tower6.jpg"),
          title: "和平门",
          description:
            "和平门开通于1953年，位于城市南北轴线之上，象征着对和平的向往。门内的青石板路通向下马陵，这里曾是汉武帝对名臣董仲舒的敬仰之地。和平门设有4门洞，是古城的重要通道。"
        },
        {
          image: require("../assets/img/tower7.jpg"),
          title: "文昌门",
          description:
            "文昌门靠近碑林博物馆，1986年开通。城门上的魁星楼是文运的象征，与古代学宫、孔庙相伴。文昌门有4门洞，其下是青石铺就的顺城巷，承载着丰富的文化底蕴。"
        },
        {
          image: require("../assets/img/tower8.jpg"),
          title: "安定门",
          description:
            "安定门，又称西门，是西城墙最南端的城门。明代扩建时，其位置略有南移，寓意边疆安定。安定门拥有6+1式门洞，是古城的重要门户，其箭楼更是保存完好的历史遗迹。"
        },
        {
          image: require("../assets/img/tower9.jpg"),
          title: "玉祥门",
          description:
            "玉祥门位于西城墙北端，为纪念冯玉祥将军而命名。1928年，在城墙豁口上修建此门，成为西城墙最北的城门。玉祥门有5门洞，是西安城墙的重要部分。"
        },
        {
          image: require("../assets/img/tower10.jpg"),
          title: "尚武门",
          description:
            "尚武门位于北城墙西端，是建国后新开的城门。它连接着西北三路和工农路，拥有4门洞，体现了古城的军事文化。"
        },
        {
          image: require("../assets/img/tower11.jpg"),
          title: "安远门",
          description:
            "安远门，俗称北门，是明代城墙的北部门户。其名寓意着对边疆民族的安抚。辛亥革命期间，这里发生了激烈的战斗。安远门现为4+1式门洞，是西安的重要历史地标。"
        },
        {
          image: require("../assets/img/tower12.jpg"),
          title: "尚德门",
          description:
            "尚德门位于北城墙，东侧紧邻安远门。建国后开辟，以“四维、八德”中的“德”命名，体现了对传统美德的崇尚。尚德门有3门洞，是连接城内外的重要通道。"
        },
        {
          image: require("../assets/img/tower13.jpg"),
          title: "解放门",
          description:
            "解放门原称尚仁门，后更名中正门，1950年改为现名。1952年因扩建火车站广场拆除，2005年重新连接，形成大跨度的桥拱式城门，规格为大跨度桥拱式3门洞。"
        },
        {
          image: require("../assets/img/tower14.jpg"),
          title: "尚俭门",
          description:
            "尚俭门位于北城墙解放门与尚勤门之间，建国后开辟。城门内为尚俭路，外接火车站东盘道，有3门洞，是古城的交通要道。"
        },
        {
          image: require("../assets/img/tower15.jpg"),
          title: "尚勤门",
          description:
            "尚勤门位于北城墙最东端，建国后开辟。城门内为尚勤路，外与环城北路相接，有3门洞，是连接城内外的重要交通节点。"
        },
        {
          image: require("../assets/img/tower16.jpg"),
          title: "朝阳门",
          description:
            "朝阳门位于东城墙最北端，建国后开辟。因每日最先迎接阳光而得名，城门内为东五路，门外为长乐路，有5门洞，是古城的重要门户。"
        },
        {
          image: require("../assets/img/tower17.jpg"),
          title: "中山门",
          description:
            "中山门俗称小东门，1927年为纪念孙中山先生而开辟。城门并列两个门洞，分别命名为“东征门”和“凯旋门”，规格为双门洞，具有重要的历史意义。"
        },
        {
          image: require("../assets/img/tower18.jpg"),
          title: "长乐门",
          description:
            "长乐门俗称东门，是东城墙的正门，也是最南端的城门。明末李自成由此攻入西安，后清代重建。长乐门有6+1式门洞，是西安事变的重要纪念地。"
        }
      ]
    };
  }
};
</script>

<template>
  <el-carousel height="400px" direction="vertical" type="card" :autoplay="false">
    <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
      <div class="carousel-content">
        <img :src="item.image" alt="Image" class="carousel-image" />
        <div class="carousel-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  margin: 0;
  text-align: center;
}

.el-carousel__item p {
  color: #475669;
  opacity: 0.75;
}

.carousel-content {
  display: flex;
  align-items: center;
  height: 100%;
}

.carousel-image {
  width: 50%; /* 图片宽度占轮播项的一半 */
  height: auto; /* 高度自适应 */
  padding: 10px; /* 图片内边距 */
}

.carousel-text {
  width: 50%; /* 文字说明宽度占轮播项的一半 */
  padding: 10px; /* 文字说明内边距 */
  text-align: left; /* 文字左对齐 */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>