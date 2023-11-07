<template>
    <td @click="onClickTd"> {{ cellData }} </td>
    
</template>
    
<script>
import eventBus from './eventBus';
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
                if (this.cellData) return;
                
                eventBus.$emit('clickTd', this.rowIndex, this.cellIndex);
            }
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
