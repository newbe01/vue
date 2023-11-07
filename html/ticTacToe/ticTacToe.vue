<template>
  <div>
    <table-component :table-data="tableData" />
    <div> {{ turn }} turn</div>
    <div v-if="winner"> {{ winner }} win</div>
  </div>
</template>
  
<script>
import tableComponent from "./tableComponent.vue";

  export default {
    components: {
      tableComponent,
    },
    data() {
      return {
        tableData : [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        turn: "O",
        winner : "",
      };
    },
    computed: {},
    methods: {},
    mounted() {},
    beforeDestroy() {},
    watch: {
      //값의 변경을 감지
    },
  };
</script>
  
<style>
  talbe {
    border-collapse: collapse;
  }
  td {
    border : 1px solid black;
    width : 40px;
    height: 40px;
    text-align: center;
  }
</style>
  