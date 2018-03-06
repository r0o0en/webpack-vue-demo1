//css
import './public-resource/css/test.css';
import './public-resource/css/test2.less';

//vue + router
import Vue from  'vue';
import router from './router/router.js';
const app = new Vue({
    el:"#app",
    router,
    data:{
        name:"vue 测试"
    }
});
