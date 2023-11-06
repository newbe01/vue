<template>
  <div>
    <div id="computer" v-bind:style="computedStyle"></div>
    <div>
      <button v-on:click="onClickButton('rock')"> rock </button>
      <button @click="onClickButton('scissors')"> scissors </button>
      <button @click="onClickButton('paper')"> paper </button>
    </div>
    <div> {{ result }} </div>
    <div> socre : {{ score }} </div>
  </div>
</template>
  
<script>
const rspCode = {
  rock : '0',
  scissors: '-142px',
  paper: '-284px',
};

const scores = {
  scissors : 1,
  rock: 0,
  paper: -1,
}

const computerChoice = (imgCode) => {
  return Object.entries(rspCode).find(function (v) {
    return v[1] === imgCode;
  })[0];
}

let interval = null;

export default {
  data() {
    return {
      imgCode : rspCode.scissors,
      result : "",
      score : 0,
    };
  },
  computed: {
    computedStyle(){
      return { background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCode} 0` };
    }
  },
  methods: {
    changeHand() {
        interval = setInterval(() => {
        if (this.imgCode === rspCode.rock) {
          this.imgCode = rspCode.scissors;
        } else if (this.imgCode === rspCode.scissors) {
          this.imgCode = rspCode.paper;
        } else if(this.imgCode === rspCode.paper){
          this.imgCode = rspCode.rock;
        }
      }, 1000);
    },

    onClickButton(choice) {
      console.log('click')
      clearInterval(interval);
      const myScore = scores[choice];
      const comScore = scores[computerChoice(this.imgCode)];
      console.log (myScore, comScore)
      const diff = myScore - comScore;
      if (diff === 0 ) {
        this.result = 'draw';
      } else if ([1, -2].includes(diff)) {
        this.result = 'you lose';
        this.score -= 1;
      } else {
        this.result = 'you win';
        this.score += 1;
      }

      setTimeout(() => {
        this.changeHand();
      }, 2000);
    }
  },
  beforeCreate() {
    // console.log('beforeCreated');
  },
  created() {
    // console.log('created');
  },
  beforeMount() {
    // console.log('beforemounted');
  },
  mounted() {
    // console.log('mounted');
    this.changeHand();
  },
  beforeUpdate() {
    // console.log('beforeupdated')
  },
  updated() {
    // console.log('updated')
  },
  beforeDestroy() {
    // console.log('beforedestoryed')  
    clearInterval(interval);
  },
  destroyed() {
    // console.log('destoryed')  
  },
  
};
</script>

<style scoped>
  #computer {
    width : 142px;
    height : 200px;
    background-position: 0 0;
  }
</style>
  