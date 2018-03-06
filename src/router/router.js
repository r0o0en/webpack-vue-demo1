import Vue from 'vue';
import VueRouter from 'vue-router';

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);
/*
* 1. 定义（路由）组件。
* 可以从其他文件import进来，如.html、.vue...
* */
const Home = {
    template:'<div>home视图内容</div>'
};
const About = {
    template:'<div>about视图内容</div>'
};

/*
* 2、定义路由
* 每个路由应该映射一个组件。其中"component" 可以使：
*   1:通过 Vue.extend()创建的组件构造器
*   2:或者只是一个组件配置对象
*
* */

const routes =[
    {
        path:"/home",
        component:Home
    },
    {
        path:"/about",
        component:About
    }
];

/*
* 3、创建router实例，然后传'router'配置
* */
const router = new VueRouter({
    routes //（缩写）相当于 routes:routes
});
export default router;

