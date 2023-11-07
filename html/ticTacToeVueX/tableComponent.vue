<template>
    <table>
        <!-- <tr-component v-for="(rowData, index) in tableData" :key="index" :row-index="index" ></tr-component> -->
        <slot />
    </table>
</template>
    
<script>
import trComponent from "./trComponent.vue";

    export default {
        // components: {
        //     trComponent,
        // },
        // props: {
        // },
        // data() {
        // return {};
        // },
        // computed: {
        //     tableData() {
        //         return this.$store.state.tableData;
        //     }
        // },
        // methods: {},
        // mounted() {},
        // beforeDestroy() {},
        // watch: {
        // //값의 변경을 감지
        // },
    };
</script>

<style scoped>
</style>
