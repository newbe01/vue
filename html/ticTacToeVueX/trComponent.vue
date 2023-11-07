<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :key="index" :cell-data="cellData" :cell-index="index" :row-index="rowIndex"></td-component>
    </tr>
</template>
    
<script>
import tdComponent from './tdComponent.vue';

    export default {
        components: {
            tdComponent,
        },
        props: {
            rowIndex: Number,
        },
        data() {
            return {
                parent: 'parent',
            };
        },
        computed: {
            rowData() {
                return this.$store.state.tableData[this.rowIndex];
            }
        },
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
