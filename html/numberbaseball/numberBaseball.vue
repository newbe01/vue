<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="submitForm">
      <input ref="answer" maxlength="4" minlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도 {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries" :key="t.try">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>
  
  <script>
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export default {
  data() {
    return {
      answer: getNumbers(),
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {       
    submitForm() {
console.log(this.answer);
console.log(this);
        if(this.value === this.answer.join('')) {   //정답시
        this.tries.push({
        try: this.value,
        result: "홈런",
      });
      this.result = "홈런",
      this.answer=getNumbers();
      alert('replay');
      this.value ="";
      this.$refs.answer.focus();
      this.tries=[];
        } else {    //오답시
            if(this.tries.length >= 9) {
                this.result = `game over, answer was ${this.answer.join(',')}`;
                alert("replay");
                this.value="";
                this.answer=getNumbers();
                this.tries=[];
                this.$refs.answer.focus();
            }
            let strike = 0;
            let ball = 0;
            const answerArray = this.value.split("").map(v => parseInt(v));
            for( let i =0; i< 4; i++) {
                if(answerArray[i] === this.answer[i]) { //자릿수까지 정답
                    strike++;
                }else if(this.answer.includes(answerArray[i])) {    //숫자만정답
                    ball++;
                }
            }
            this.tries.push({
                try: this.value,
                result : `${strike} 스트라이크, ${ball} 볼입니다.`,  
            });
        }
      this.value = "";
      this.$refs.answer.focus();
    },
  },
};
</script>
  
  <style scoped>
/* 컴포넌트 스타일 */
</style>
  