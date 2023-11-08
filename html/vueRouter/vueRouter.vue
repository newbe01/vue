<template>
  <div>
    <div>
      <router-link to ="/game/numberBaseball"> numberBaseball </router-link>
      <router-link to ="/game/reactionTest"> reactionTest </router-link>
      <router-link to ="/game/ticTacToe"> ticTacToe </router-link>
      <router-link to ="/game/mineSweeper"> mineSweeper </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
  
<script>
import router from './routes';


  export default {
    router,
    components: {
    },
    data() {
      return {
        
      };
    },
    computed: {
    },
    methods: {
      
    },
    mounted() {},
    beforeDestroy() {},
    watch: {
    },
  };
</script>
  
<style>
  
</style>
  