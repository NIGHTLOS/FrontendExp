<script>
export default {
  name: 'shanhaiPassHistory',
  data() {
    return {
      tableData: [
        {
          date: '民国十一年（1922年）',
          history: '直、奉军阀大战于石河西岸'
        },
        {
          date: '民国十三年（1924年）',
          history: '再战于关家坟、威远城、姜女庙一带'
        },
        {
          date: '民国二十二年（1933年）',
          history: '日寇占领山海关'
        },
        {
          date: '民国三十四年（1945年）',
          history: '八路军冀热辽军区部队在苏联红军配合下攻占并解放了山海关城'
        },
        {
          date: '民国三十五年（1946年）',
          history: '中国人民解放军进行了山海关保卫战'
        }
      ],
      tableData0: [
        {
          date: '1958年',
          history: '在万里长城-山海关南门西260米的南城墙上，开21米宽的城墙豁口作为通道。'
        },
        {
          date: '1961年',
          history: '万里长城-山海关被列为第一批全国重点文物保护单位。'
        },
        {
          date: '20世纪60年代末、70年代初',
          history: '在万里长城-山海关墙体内修建互相连通防空洞，墙体现有砖砌洞口。'
        },
        {
          date: '1956年-1994年',
          history: '先后修复了镇东楼至威远堂和镇东楼至靖边楼的城墙，修复了靖边楼、牧营楼和临闾楼，城墙主要修复内容为：修复了靖边楼和镇东楼之间青砖内墙及镇东楼和威远堂之间的毛石内墙，修复了垛口墙和宇墙，修复了靖边楼和临闾楼之间外墙体，补墁靖边楼到镇东楼之间的城面。'
        },
        {
          date: '1980年',
          history: '为便于前往天下第一关，在南门东正对一关路开35米的城墙豁口一处。'
        },
        {
          date: '1987年',
          history: '为协调古城风貌，在豁口处修建券门洞四座，中间二座相同，洞高6.8米、宽6米、长16米；两边二座相同，洞高5.9米、宽5米、长16米。'
        },
        {
          date: '1987年',
          history: '包括万里长城-山海关在内的中国长城被列入世界文化遗产名录。'
        },
        {
          date: '1985年',
          history: '万里长城－山海关被列为“全国十大风景名胜”之首。'
        },
        {
          date: '2000年',
          history: '万里长城－山海关被中央文明办、国家旅游局授予“全国文明风景旅游区示范点”称号。'
        },
        {
          date: '2007年',
          history: '万里长城－山海关被全国旅游景区质量等级评定委员会审核批准评为首批国家5A级旅游景区。'
        },
        {
          date: '2015年10月09日',
          history: '山海关景区被国家旅游局通报批评，取消5A级资质。'
        },
        {
          date: '2016年“十一”黄金周期间',
          history: '山海关景区荣登国家旅游局“红榜”，被评为“旅游市场秩序最佳景区”。'
        },
        {
          date: '2018年',
          history: '山海关景区荣膺“河北名片”。'
        },
        {
          date: '2018年11月21日',
          history: '山海关景区成功复牌为5A级景区。'
        }
      ],
      ancientHistory: [
        { timestamp: '隋', description: '开皇三年（583年），筑渝关关城。' },
        { timestamp: '唐', description: '贞观十九年（645年），唐太宗征高句丽，自临渝还。' },
        { timestamp: '五代', description: '后梁乾化年间，渝关为契丹所取，薛居正指出：“渝关三面皆海，北连陆。自渝关北至进牛口，旧置八防御兵，募士兵守之，契丹不敢轻入。及晋王李存勖取幽州，使周德威为节度使，德威恃勇，不修边备，遂失渝关之险。契丹刍牧于营、平二州间，大为边患。”后唐清泰末年，赵德钧镇守卢龙，石敬瑭在太原叛乱，并求援于契丹，耶律德光许之，其母述律后曰：“若卢龙军北向渝关，亟须引还，太原不可救也。”' },
        { timestamp: '宋', description: '宣和末年，渝关为女真所得。' },
        { timestamp: '明', description: '洪武十四年（1381年），中山王徐达奉命修永平、界岭等关，带兵到此地，以古渝关非控扼之要，于古渝关东六十里移建山海关，因其北倚燕山，南连渤海，故得名山海关。山海关长城历经洪武、成化、嘉靖、万历、天启、崇祯六朝修筑，耗用大量人力、物力和财力，前后用二百六十三年时间，建成了七城连环，万里长城一线穿的军事城防系统。明末女将军秦良玉镇守过山海关。李自成与吴三桂在此激战。' },
        { timestamp: '清', description: '光绪二十六年（1900年）八国联军侵入山海关。' },
      ]
    }
  }
}
</script>


<template>
  <h2 class="section-title">山海关古代史</h2>
  <el-timeline class="timeline-container">
    <el-timeline-item v-for="(event, index) in ancientHistory" :key="index" :timestamp="event.timestamp" placement="top">
      <el-card>
        <p>{{ event.description }}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>

  <h2 class="section-title">山海关近代史</h2>
  <el-table class="table-container" :data="tableData" stripe>
    <el-table-column prop="date" label="年份" width="200" />
    <el-table-column prop="history" label="详细" />
  </el-table>

  <h2 class="section-title">中华人民共和国时期</h2>
  <el-table class="table-container" :data="tableData0" stripe>
    <el-table-column prop="date" label="年份" width="200" />
    <el-table-column prop="history" label="详细" />
  </el-table>
</template>


<style scoped>
.timeline-container {
  max-width: 800px;
  margin: 0 auto;
}

.table-container {
  width: 80%;
  margin: 0 auto;
}

.section-title {
  margin-top: 40px;
}

.timeline-container, .table-container {
  max-width: 76%;
  margin: 0 auto;
}

.table-container {
  width: 100%; /* 使用100%宽度，使其更容易控制对齐 */
  margin: 20px auto; /* 添加一些顶部外边距 */
}

.section-title {
  text-align: left; /* 确保标题左对齐 */
  margin-top: 40px;
  margin-bottom: 20px; /* 添加一些底部外边距，以便与内容分隔 */
  padding-left: 20px; /* 添加左边距，使标题与内容对齐 */
}

.el-timeline, .el-table {
  padding-left: 20px; /* 与标题的左边距匹配 */
}

h2 {
  margin-left: 13%;
}
</style>