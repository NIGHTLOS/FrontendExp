<script>
import SmokeTowerIntroduce from "@/components/smokeIntroduce.vue";

export default {
  name: "smokeTower",
  components: {
    SmokeTowerIntroduce
  }
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <h1>行之有效的古老通信方式———烽火台</h1>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <video controls>
          <source src="../assets/videos/smokeTower.mp4" type="video/mp4" />西安城墙
        </video>
        <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
        <div class="down">
          <h2>烽火台名片</h2>
          <SmokeTowerIntroduce />
          <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
          <a href="https://baike.baidu.com/item/%E7%83%BD%E7%81%AB%E5%8F%B0/2768326">
            <h2>烽火台介绍</h2>
          </a>
          <div class="mian">
            <p>烽火台，又称烽燧，俗称烽堠、烟墩、墩台。古时用于点燃烟火传递重要消息的高台，是古代重要军事防御设施，是为防止敌人入侵而建的，遇有敌情发生，则白天施烟，夜间点火，台台相连，传递消息。是最古老但行之有效的消息传递方式。</p>
          </div>
          <el-divider style="border-top: 3px solid black; margin: 10"></el-divider>
          <h1>细读烽火台</h1>
          <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="名称由来" name="1">
                <div>“烽火”，古代边防报警的两种信号，白天放烟叫“燧”，夜间举火叫“烽”。烽火台在汉代称作烽堠（烽候）、亭燧，唐宋称作烽台，并把“烽燧”一词也引申为烽火台，明代则一般称作烟墩或墩台（西北明代墩台，大的还有御敌之功能，小的则只有望而无点烽火之功能）。</div>
              </el-collapse-item>
              <el-collapse-item title="主要功能" name="2">
                <div>烽火台其作用主要是便于侦查，同时有敌入侵时，可以燃烧稻草等可燃物，这样可以用烟火通报敌情，以让下一个岗提高警惕。最重要的是传递军情，它需要与敌台、墙台等长城建筑密切配合。</div>
                <div>烽火台是白天点狼粪，晚上燃柴草，白天烧狼粪用烟比较明显，晚上烧柴草靠火光报警。</div>
              </el-collapse-item>
              <el-collapse-item title="警戒方式" name="3">
                <div>警戒信号大致有六种，即：蓬（蓬草，有学者认为是草编或木框架上蒙覆布帛的笼形物）、表（树梢，有学者认为是布帛旗帜）、鼓、烟、苣火（用苇杆扎成的火炬）、积薪（高架木柴草垛），白天举蓬、表、烟，夜间举火，积薪和鼓昼夜兼用；举烽火以犯塞匈奴千人为界限，凡不满一千人只燔一积薪；超过一千人燔二积薪；若一千人以上攻亭障时，则燔三积薪。积薪之外，还附有举蓬、举表、举苣火的不同规定；并因敌人犯塞方位不同和白天夜间的不同又有各自不同但很具体的规定。</div>
                <div>《塞上蓬火品约》还规定，如果发现所报的信号有误，则应立即“下蓬灭火”，取消所发的信号，并写成书面报告，迅速传报都尉府。若天气恶劣，或亭燧相隔过远，在“昼不见烟，夜不见火”的情况下，应立即将情况写成书面报告，用加急的传递方式报送上级。</div>
                <div>有的汉简还记录了某烽燧的守备器物和生活用品，其中有报警物布蓬、布表、苣、积薪、鼓；建筑器物椎、瞄准器械“深目”，防御武器弩、枪、羊头石等。并表明当时的烽燧是由候官（候长）管理的。候官统候史，候史管燧长，负有保管装备，修葺建筑物、管理“天田”，巡视检查与及时汇报的职责，候官则向都尉负责。为了保证烽火制度的严格执行，汉代有一整套严密的制度。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-header,
.el-footer {
  background-image: url("../assets/img/background01.jpg");
  background-size: cover;
}

.el-main {
  background-image: linear-gradient(
    to top,
    #3f51b1 0%,
    #5a55ae 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c978 100%
  );
  background-blend-mode: screen;
  background-size: cover;
}

h1 {
  color: #fff;
  background-color: #333; /* 深色背景 */
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); /* 更深的阴影效果 */
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5); /* 文字发光效果 */
}

h2 {
  color: #333;
  background-color: rgba(255, 255, 255, 0.8); /* 透明背景 */
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 轻微阴影 */
  margin-bottom: 15px;
}

/* 修改分隔线样式 */
.el-divider {
  background-color: #333; /* 更深的分隔线 */
  border-top: 3px solid #333;
  margin: 20px 0;
}

video {
  width: 80%; /* 视频宽度 */
  height: auto; /* 视频高度自适应 */
  margin-top: 20px; /* 视频与标题之间的间隔 */
  display: block; /* 将视频设置为块级元素，使其下方有间隔 */
  margin-left: auto; /* 自动外边距，将视频向右推 */
  margin-right: auto; /* 自动外边距，将视频向左推 */
}

.mian {
  font-family: "Arial", sans-serif; /* 设置字体 */
  font-size: 26px; /* 设置字体大小 */
  line-height: 1.6; /* 设置行高 */
  text-align: justify; /* 设置文本对齐 */
  max-width: 80%; /* 设置最大宽度 */
  margin: 20px auto; /* 设置外边距 */
  padding: 15px; /* 设置内边距 */
  border: 1px solid #ddd; /* 设置边框 */
  border-radius: 8px; /* 设置边框圆角 */
  background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
}

.mian p {
  margin-bottom: 1em; /* 设置段落间距 */
}

.down {
  background-image: url("../assets/img/smokeTower03.jpg");
  background-size: cover;
}

.demo-collapse {
  margin: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* 调整背景颜色 */
  border-radius: 8px;
  max-width: 80%; /* 限制最大宽度 */
  margin-left: auto; /* 水平居中 */
  margin-right: auto; /* 水平居中 */
}

.el-collapse-item__header {
  font-weight: bold;
  padding: 15px 20px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.demo-collapse .el-collapse-item__content {
  font-size: 1em;
  line-height: 1.6;
  margin-top: 10px;
  padding: 10px; /* 增加内容内边距 */
}

.demo-collapse .el-collapse-item__content div {
  margin-bottom: 1em;
  padding: 6px; /* 增加段落间距和内边距 */
}


</style>