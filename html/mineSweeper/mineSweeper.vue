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
import { INCREMENT_TIMER } from '../mineSweeper/store.js';

let interval;

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
      ...mapState(['timer', 'result', 'halted']),
    },
    methods: {
      
    },
    mounted() {},
    beforeDestroy() {},
    watch: {
      //값의 변경을 감지
      halted(value, oldValue) {
        if (!value) {
          interval = setInterval(() => {
            this.$store.commit(INCREMENT_TIMER);
          }, 1000);
        } else {
          clearInterval(interval);
        }
      }
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
  