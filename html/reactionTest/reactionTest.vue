<template>
  <div>
    <!-- <div id="screen" v-bind:class="state"> {{ message }} </div> -->
    <div id="screen" :class="state" @click="onClickScreen"> {{ message }} </div>
    <!-- v-show :: 값이 false 일 경우 display:none 처리 -->
    <div v-show="result.length">      
      <div> 반응속도 : {{ react || 0}} ms </div>
      <div> 평균 시간 : {{ avg }} ms </div>
      <!-- <button v-on:click="onReset"> reset </button> -->
      <button @click="onReset"> reset </button>
    </div>
  </div>
</template>
  
<script>
let startTime = 0;
let endTime = 0;
let time = null;
export default {
  data() {
    return {
      result: [],
      state: 'waiting',
      message: 'click to start',
      react: "",
    };
  },
  computed: { // 사용시 값이 캐싱됨
    avg() {
      return this.result.reduce((a,c) => a + c, 0) / this.result.length || 0;
    }
  },
  methods: {
    onReset() {
      this.result = [];
      this.react = "";
    },
    onClickScreen() {
      if (this.state === 'waiting') {
        this.state = 'ready';
        this.message = "Click when it's green"
        time = setTimeout(() => {
          this.state = "now";
          this.message = "click";
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000);  // 2~3 sec
      } else if (this.state === 'ready') {
        clearTimeout(time);
        this.state = 'waiting';
        this.message = "it was hurried"
      } else if (this.state === 'now') {
        endTime = new Date();
        this.state = 'waiting';
        this.message = "click to start";
        this.result.push(endTime - startTime);
        this.react = endTime - startTime;
      }

    },
  },
//   mounted() {
//     window.addEventListener('keydown', (e)=>{
//       var key = this.onClickScreen();
// });
//   }
};
</script>
  
<style scoped>
 #screen {
  width : 300px;
  height : 200px;
  text-align : center;
  user-select : none;
 }
 #screen.waiting {
  background-color: aqua;
 }
 #screen.ready {
  background-color: red;
  color: white;
 }
 #screen.now {
  background-color: greenyellow;
 }

</style>
  