import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export default new Vuex.Store({
    state: {    // vue data와 비슷한역할
        tableData: [],
        data : {
            row: 0,
            cell: 0,
            mine: 0,
        },
        timer : 0,
        result: '',
    },
    getters: {  // vue computed와 비슷한역할

    },
    mutations: {    // state를 동기적으로 수정할 때사용
        [START_GAME] (state) {
            
        },
        [OPEN_CELL] (state) {
            
        },
        [CLICK_MINE] (state) {
            
        },
        [FLAG_CELL] (state) {
            
        },
        [QUESTION_CELL] (state) {
            
        },
        [NORMALIZE_CELL] (state) {
            
        },
        [INCREMENT_TIMER] (state) {
            
        },

    },
    actions: {      // 비동기 사용시, 여러 mutations를 연달아 실행할 때

    },
});