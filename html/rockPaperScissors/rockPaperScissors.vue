<template>
  <div>
    <div id = "computer" :style="{}"></div>
    <div>
      <button> rock </button>
      <button> scissors </button>
      <button> paper </button>
    </div>
    <div> {{ result }} </div>
    <div> socre : {{ score }} </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      result : "",
      socre : 0,
    };
  },
  computed: {

  },
  methods: {
    
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
  