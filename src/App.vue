<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <form-polly></form-polly>
  </div>
</template>

<script>
import FormPolly from './components/FormPolly'

export default {
  name: 'App',
  components: { FormPolly }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
