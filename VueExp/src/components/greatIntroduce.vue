<script>
export default {
  name: 'greatWallIntroduce',
}
</script>

<template>
  <el-descriptions>
    <el-descriptions-item
      :rowspan="2"
      :width="250"
      align="center"
    >
      <el-image
        style="width: 100px; height: 100px"
        :src="require('@/assets/img/greatWall03.jpg')"
      />
    </el-descriptions-item>
    <el-descriptions-item label="地理位置">中国北方</el-descriptions-item>
    <el-descriptions-item label="保护级别">第五批全国重点文物保护单位</el-descriptions-item>
    <el-descriptions-item label="建造时间">西周至清</el-descriptions-item>
    <el-descriptions-item label="价值">世界文化遗产</el-descriptions-item>
    <el-descriptions-item label="中文名">长城</el-descriptions-item>
    <el-descriptions-item label="荣誉">世界七大奇迹之一</el-descriptions-item>
    <el-descriptions-item label="所处时代">春秋至明</el-descriptions-item>
    <el-descriptions-item label="外文名">The Great Wall</el-descriptions-item>
    <el-descriptions-item label="总长度">21196.18千米</el-descriptions-item>
    <el-descriptions-item label="所属地区">华北、西北、华中等</el-descriptions-item>
    <el-descriptions-item label="所属国家">中国</el-descriptions-item>
    <el-descriptions-item label="建议参观时间">春夏秋为宜</el-descriptions-item>
    <el-descriptions-item label="建议参观时长">2—3小时</el-descriptions-item>
  </el-descriptions>
</template>

<style scoped>

</style>