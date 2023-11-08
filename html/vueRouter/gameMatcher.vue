<template>
    <div v-if="currentGame === 'numberBaseball'"> <numberBaseball></numberBaseball> </div>
    <div v-else-if="currentGame === 'reactionTest'"> <reactionTest></reactionTest> </div>
    <div v-else-if="currentGame === 'ticTacToe'"> <ticTacToe></ticTacToe> </div>

    <div v-else> no game </div>
</template>

<script>
import numberBaseball from '../numberbaseball/numberBaseball'
import reactionTest from '../reactionTest/reactionTest'
import ticTacToe from '../ticTacToe/ticTacToe'
import mineSweeper from '../mineSweeper/mineSweeper'

    export default {
        components: {
            numberBaseball,
            reactionTest,
            ticTacToe,
        },
        mounted() {
            console.log(this.$router)
            console.log(this.$route)
        },
        computed: {
            currentGame() {
                return this.$route.params.name;
            }
        }
    }
</script>
