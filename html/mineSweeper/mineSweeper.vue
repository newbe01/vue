<template>
  <div>
    <mine-form />
    <div> {{ timer }} </div>
    <table-component />
    <div> {{ result }} </div>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import store from "./store.js";
import tableComponent from "./tableComponent";
import mineForm from "./mineForm.vue";

  export default {
    store,
    components: {
      tableComponent,
      mineForm,
    },
    data() {
      return {
        
      };
    },
    computed: {
      ...mapState(['timer', 'result']),
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
  table {
    border-collapse: collapse;
  }
  td {
    border : 1px solid black;
    width : 40px;
    height: 40px;
    text-align: center;
  }
</style>
  