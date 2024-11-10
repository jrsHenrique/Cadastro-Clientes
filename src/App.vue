<template>
  <div id="app">
    <UserCadastro />
  </div>
</template>

<script>
import UserCadastro from './components/UserCadastro.vue';

export default {
  name: 'App',
  components: {
    UserCadastro
  }
};
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
