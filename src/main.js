import Vue from 'vue'
import App from './App.vue'
// 导入 vue-router 文件
import router from './routers/routers';

// 引入vuex-store
import store from './store/index';

// 导入 vantUI 框架
import Vant from 'vant';
import 'vant/lib/index.css';

// bootstrap.css
import 'bootstrap/dist/css/bootstrap.min.css';

// 导入自定义的文件
import './assets/css/home.css';
import './assets/css/add.css';

// 导入utils
import './utils/timeFormat.js';
import * as utils from './utils/index.js';

Vue.config.productionTip = false

//注册 vantUI
Vue.use(Vant);



new Vue({
  router,
  store,
  render: h => h(App),
  async created() {
      // 刷新更新当前标题
      document.title = utils.getLocalStorage('header_name');
      await store.dispatch('header_name' , utils.getLocalStorage('header_name'))

  }
}).$mount('#app')



/**
 * @description: 路由守卫配置
 *
 * */
router.beforeEach( async(to,from,next)=>{


  /**
   * @description: 设置页面标题
   *
   * */
  document.title = to.meta.title;

  /**
   * @description: 获取路由的meta中的title 提交到vux中进行修改 设置当前自定义
   *
   * */
  // store.commit('HEADER_NAME',to.meta.title);// mutations 提交 value 值改变状态
  await store.dispatch('header_name' , to.meta.title) // actions 中提交更改信息到 mutations中 进行更改 异步处理
  if(to.path !== '/login'){
    await store.dispatch('login_Header' , false ) // actions 中提交更改信息到 mutations中 进行更改 异步处理
  }


  next();

  //判断store.gettes.isLogin === false
  // if(to.path == '/login' || to.path == '/register'){
  //     next();
  // }else{
  //     // alert("还没有登录，请先登陆");
  //     // next('/login');
  // }
})




