<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <div>
      <router-link to="/">首页</router-link> | 
      <router-link to="/First">第一个页面</router-link> | 
      <router-link :to="{ name : 'First01', params : { username: 'panda', id: '888' }}">第一个页面-01</router-link> | 
      <router-link to="/First/first02">第一个页面-02</router-link> | 
    </div> -->
    <!-- <p>{{ $route.name }}</p> -->
    <div>
      <button @click="goBack">后退</button>
      <button @click="goForward">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/">Home</router-link> | 
      <router-link to="/goHome">GoHome</router-link> | 
      <router-link to="/params/65/gouudk">Params</router-link> | 
      <router-link to="/goParams/451/ILikesj">GoParams</router-link> | 
      <router-link to="/Hi1">Hi1</router-link> | 
      <router-link to="/ngys">ngys</router-link> | 

    </div>
    <transition name= "fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <router-view name='left' style="float: left; width: 50%; height: 300px; background-color: #eee;"></router-view>
    <router-view name='right' style="float: left; width: 50%; height: 300px; background-color: #ccc;"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goBack(){//后退
      this.$router.go(-1);
    },
    goForward(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition:opacity .5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}

</style>
