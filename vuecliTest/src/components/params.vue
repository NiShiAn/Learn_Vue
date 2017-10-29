<template>
  <h2>{{ msg }} - {{ $route.params.newsId }} - {{ $route.params.newsTitle}}</h2>
</template>

<script>
    export default{
        data(){
            return{
                msg: 'pamas Pages'
            }
        },
        beforeRouteEnter: (to, from, next) => {
            console.log('准备进入路由');
            next();
        },
        beforeRouteLeave: (to, from, next) => {
            console.log('准备离开');
            next();
        }
    }
</script>