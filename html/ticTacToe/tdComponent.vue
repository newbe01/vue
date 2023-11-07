<template>
    <td @click="onClickTd"> {{ cellData }} </td>
    
</template>
    
<script>
    export default {
        props: {
            cellData: String,
            rowIndex: Number,
            cellIndex: Number,
        },
        data() {
            return {};
        },
        computed: {},
        methods: {
            onClickTd() {
                console.log(this.$root.$data)
                this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
                this.$root.$data.turn = this.$root.$data.turn === "O" ? "X" : "O";
            },
        },
        mounted() {},
        beforeDestroy() {},
        watch: {
        //값의 변경을 감지
        },
    };
</script>

<style scoped>
</style>
