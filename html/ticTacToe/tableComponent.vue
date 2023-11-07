<template>
    <table>
        <tr-component v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" :row-index="index" ></tr-component>
        
    </table>
</template>
    
<script>
import trComponent from "./trComponent.vue";

    export default {
        components: {
            trComponent,
        },
        props: {
            tableData: Array,
        },
        data() {
        return {};
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

<style scoped>
</style>
