import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//状态对象，共享值
const state={
    count:1,
}
//更改状态对象
const mutations={
    // add(state){
    //     state.count++;
    // },
    add(state,n){
        state.count += n;
    },
    reduce(state){
        state.count--;
    }
}
//计算过滤操作
const getters={
    count(state){
        return state.count;
    }
}
//异步修改状态方法
const actions={
    addAction(context){
        context.commit('add', 2);
        setTimeout(()=>{ context.commit('reduce')},3000);
        console.log('先加后减');
    },
    reduceAction({commit}){
        commit('reduce');
    }
}

const moduleA={
    state,
    mutations,
    getters,
    actions
}
export default new Vuex.Store({
    modules:{a: moduleA}
});