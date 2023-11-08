<template>
    <div>
        <input type="number" placeholder="row" value="row" @change="onChangeRow" />
        <input type="number" placeholder="cell" value="cell" @change="onChangeCell" />
        <input type="number" placeholder="mine" value="mine" @change="onChangeMine" />
    </div>
</template>
    
<script>
    export default {
        data() {
            return {
                row : 10,
                cell : 10,
                mine: 20,
            };
        },
        methods : {
            onChangeRow(e) {
                this.row = e.target.value;
            },
            onChangeCell(e) {
                this.cell = e.target.value;
            },
            onChangeMine(e) {
                this.mine = e.target.value;
            },
        }
    }
</script>

<style scoped>
</style>
