<template>
    <div>
       <h2>{{ msg }}</h2> 
       <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      msg: '第一个页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
