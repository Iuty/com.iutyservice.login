<template>
  <div id="app">
    <iuLogin></iuLogin>
  </div>
</template>

<script>
import iuLogin from './components/iu-Login/iu-login.vue'
export default {
  name: 'app',
  components: {
    iuLogin
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
