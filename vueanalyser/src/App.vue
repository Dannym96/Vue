<template>
  <div id="app">
      <div class="main-wrapper">
      <div class="app">
      <headComponent></headComponent>
      <sidebarComp></sidebarComp>
      <div class="sidebar-overlay" id="sidebar-overlay"></div>
      <article class="content dashboard-page">
      <router-view></router-view>
      </article>
      <footerComp></footerComp>
      </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

