<template>
    <div>
      <el-timeline>
        <el-timeline-item
          v-for="(event, index) in timelineEvents"
          :key="index"
          :timestamp="event.timestamp"
          placement="top"
        >
          {{ event.text }}
        </el-timeline-item>
        <el-button v-if="hasMore" @click="loadMore">加载更多</el-button>
      </el-timeline>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "TimeLine",
    setup() {
      const timelineEvents = ref([
        { timestamp: "公元前156年", text: "汉武帝出生，名刘彻。" },
        { timestamp: "公元前141年", text: "汉武帝即位，开始其辉煌统治。" },
        { timestamp: "公元前139年", text: "派张骞出使西域，开辟丝绸之路。" },
        { timestamp: "公元前138年", text: "命令开始建造茂陵，为自己修建陵墓。" },
      ]);
  
      const hasMore = ref(true);
  
      const loadMore = () => {
        const newEvents = [
          { timestamp: "公元前133年", text: "汉武帝策划马邑之战，对抗匈奴。" },
          { timestamp: "公元前124年", text: "设置五铢钱，稳定经济体系。" },
          { timestamp: "公元前121年", text: "霍去病出击河西走廊，大败匈奴。" },
          { timestamp: "公元前119年", text: "漠北之战，匈奴遭遇毁灭性打击。" },
          { timestamp: "公元前110年", text: "封禅泰山，彰显天子权威。" },
          { timestamp: "公元前104年", text: "开始编撰《太初历》，规范历法。" },
          { timestamp: "公元前87年", text: "汉武帝去世，葬于茂陵，陵墓正式完工。" },
        ];
        timelineEvents.value.push(...newEvents);
        hasMore.value = false; // 假设加载所有事件后没有更多内容
      };
  
      return {
        timelineEvents,
        hasMore,
        loadMore,
      };
    },
  };
  </script>
  
  <style scoped>
  .el-timeline {
    margin-top: 20px;
    padding: 0 20px;
  }
  
  .el-timeline-item {
    font-size: 16px;
    line-height: 1.5;
  }
  
  .el-button {
    margin-top: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  </style>