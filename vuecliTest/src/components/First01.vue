<template>
    <div>
       <h2>{{ msg }} - {{ $route.params.username}} - {{ $route.params.id }}</h2> 
    </div>
</template>

<script>
export default {
  name: 'first01',
  data () {
    return {
      msg: '第一个子页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
