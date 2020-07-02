<!--
 * @Author: your name
 * @Date: 2020-07-01 17:53:05
 * @LastEditTime: 2020-07-01 17:54:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ezh_project\src\App.vue
--> 
<template>
  <div id="app" class="app">
    <!-- 头部组件   -->
      <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
     
    }
  },
  computed:{
   
  },
  watch:{
   
  },
 
  components: {
    
  }
}
</script>

<style lang="less">
  .app{
    display: flex;
    flex-direction: column;
  }

  // 适配主流设备
  @deviceList: 240px, 320px, 360px, 375px, 384px, 400px, 411px, 414px, 424px, 480px, 540px, 640px, 720px, 750px, 768px, 800px, 1024px, 1920px, 2048px;

  // 设备的种类
  @deviceLength: length(@deviceList);

  // 预设基准值
  @baseFontSize: 25px;

  // 设计稿尺寸
  @psdWidth: 375px;

  // 混入
  // less中的index是从1开始的，比起索引，应该叫做序号
     .adapterMixin(@index: 1) when (@index <= @deviceLength) {
    @media (min-width: extract(@deviceList, @index)) {
      html {
        font-size: @baseFontSize / @psdWidth * extract(@deviceList, @index);
      }
    }

    .adapterMixin(@index + 1);
  }
</style>
