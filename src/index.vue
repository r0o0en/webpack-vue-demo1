<template>
    <div>
        <h3>{{nums}}区域</h3>
        <p>查看参数nums:{{nums}} </p>
        <!--路由连接-->
        <router-link to="/home">home</router-link>
        <router-link to="/about">about</router-link>
        <!--路由视图-->
        <router-view></router-view>
        <div class="box"></div>
    </div>

</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                nums:88
            }
        }
    }
</script>

<style >

</style>