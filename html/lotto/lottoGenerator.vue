<template>
  <div>
    <div>winning numbers</div>
    <div id="result">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div> bonus </div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo"> next game </button>
  </div>
</template>
  
<script>
import lottoBall from './lottoBall.vue'
  function getWinNumbers() {
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }

  const timeout =[];
export default {
  components: {
    'lotto-ball' : lottoBall
  },
  data() {
    return {
      winNumbers : getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo : false,
    };
  },
  computed: {},
  methods: {
    onClickRedo() {
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;

      this.showBalls();
    },

    showBalls() {
      for (let i = 0 ; i < this.winNumbers.length -1; i++) {
        timeout[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000 );
      };
      
      timeout[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 7000);
      }
  },
  mounted() {
    this.showBalls();
  },
  beforeDestroy() {
    timeout.forEach(() => {
      clearTimeout(t);
    });
  },
  watch: {  //값의 변경을 감지
    bonus(val, oldVal) {
      if(val.length === 0 ) {
        this.showBalls();
      }
    }
  },
};
</script>
  
<style scoped>
</style>
  