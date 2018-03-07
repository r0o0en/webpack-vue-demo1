//css
import './public-resource/css/test.css';
import './public-resource/css/test2.less';

//vue + router
import Vue from  'vue';
import router from './router/router.js';
import Index from "./index.vue";
const app = new Vue({
    // el:"#app",
    router,
    data:{
        nums:1
    },
    render:h=>h(Index)
    // template:"<Index/>",
    // components:{Index}
}).$mount('#app');
