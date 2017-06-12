import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HeaderComp from './Components/headComponent.vue';
import SidebarComp from './Components/SidebarComponent.vue';
import SidebarOverlayComp from './Components/SidebarOverlayComponent.vue';
import FooterComp from './Components/FooterComponent.vue';
import ChartsComp from './Components/ChartsComponent.vue';
import AnalyticsHistory from './Components/AnalyticsHistory.vue';
import Connections from './Components/Connections.vue';
import Test from './Components/Test.vue';


Vue.use(VueRouter);

Vue.component('headComponent', HeaderComp);
Vue.component('sidebarComp', SidebarComp);
Vue.component('sidebarOverlayComp', SidebarOverlayComp);
Vue.component('footerComp', FooterComp);
Vue.component('chartsComp', ChartsComp);
Vue.component('analyticsHistory', AnalyticsHistory);
Vue.component('connections', Connections);
Vue.component('test', Test);



const router = new VueRouter({
    routes: [
      {path: '/',component: ChartsComp },
      {path: '/history', component: AnalyticsHistory },
      {path: '/connections', component: Connections}
    ],
mode:'history'

});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
