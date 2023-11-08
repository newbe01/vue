import Vue from 'vue';
import VueRouter from 'vue-router';
import numberBaseBall from '../numberbaseball/numberBaseball'
import reactionTest from '../reactionTest/reactionTest'
import ticTacToe from '../ticTacToe/ticTacToe'

import gameMatcher from './gameMatcher'

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    routes: [
        { path : '/numberBaseball', component : numberBaseBall },
        { path : '/reactionTest', component : reactionTest },
        { path : '/ticTacToe', component : ticTacToe },
        { path : '/game/:name', component : gameMatcher },
    ]
});
