<template>
    <div>
        <h2>{{ msg }}</h2>
        <hr/>
        <h3>{{ count }}</h3>
        <h3>{{ $store.state.a.count }}</h3>
        <br>
        <!-- <button @click="$store.commit('add', 5)">加1</button> -->
        <button @click="add(3)">加1</button>
        <!-- <button @click="$store.commit('reduce')">减1</button> -->
        <button @click="reduce">减1</button>
        <br><br>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState, mapMutations, mapGetters, mapActions } from 'vuex'
    export default {
        data(){
            return{
                msg: 'Hello Vuex'
            }
        },
        computed:{
            // ...mapState(['count']),
            // ...mapGetters(['count']),
            // count(){
            //     return this.$store.getters.count;
            // }
            count(){
                return this.$store.state.a.count;
            }
        },
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction', 'reduceAction'])
        },
        // computed:mapState({
        //     count: state=> state.count
        // }),
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },
        store
    }
</script>