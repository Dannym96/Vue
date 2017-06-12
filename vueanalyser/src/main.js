import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Chart from 'chartjs';
// import dt from 'datatables.net-bs'
// import dtbuttons from 'datatables.net-buttons-bs'
// import dtselect from 'datatables.net-select'
import ElementUI from 'element-ui'
import DataTables from 'vue-data-tables'



// global.jQuery = jQuery;

import HeaderComp from './Components/headComponent.vue';
import Chart from './Components/Charts.vue';
import SidebarComp from './Components/SidebarComponent.vue';
import SidebarOverlayComp from './Components/SidebarOverlayComponent.vue';
import FooterComp from './Components/FooterComponent.vue';
import ChartsComp from './Components/ChartsComponent.vue';
import AnalyticsHistory from './Components/AnalyticsHistory.vue';
import Connections from './Components/Connections.vue';

Vue.use(VueRouter);
Vue.use(ElementUI)
Vue.use(DataTables)

Vue.component('headComponent', HeaderComp);
Vue.component('sidebarComp', SidebarComp);
Vue.component('sidebarOverlayComp', SidebarOverlayComp);
Vue.component('footerComp', FooterComp);
Vue.component('chartsComp', ChartsComp);
Vue.component('analyticsHistory', AnalyticsHistory);
Vue.component('connections', Connections);
Vue.component('charts', Chart);

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
