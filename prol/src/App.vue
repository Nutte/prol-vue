<template>
  <div id="app">
    <header/>
      <router-view></router-view>
    <footer/>
  </div>
</template>

<script>
import header from './components/template/header.vue'
import footer from './components/template/footer.vue'
export default {
  name: 'app',
  components: {
    header,
    footer
  }
}
</script>

<style lang="scss">
@import "./assets/style/main.scss";
</style>