<template>
  <div>
    <mine-form />
    <div> {{ timer }} </div>
    <table-component />
    <div> {{ result }} </div>
  </div>
</template>
  
<script>
import store from "./store.js";
import tableComponent from "./tableComponent";

  export default {
    store,
    components: {
      tableComponent,
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
      //값의 변경을 감지
    },
  };
</script>
  
<style>

</style>
  