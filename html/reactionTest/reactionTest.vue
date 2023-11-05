<template>
  <div>
    <div id="screen"> {{ message }} </div>
    <div>
      <div> 평균 시간 : {{  }}</div>
      <!-- <button v-on:click="onReset"> reset </button> -->
      <button @click="onReset"> reset </button>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      result: [],
      state: 'wating',
      message: 'click to start',
    };
  },
  methods: {},
};
</script>
  
<style scoped>
/* 컴포넌트 스타일 */
</style>
  