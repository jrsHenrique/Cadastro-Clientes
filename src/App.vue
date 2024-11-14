<template>
  <div id="app">
    <!-- Exibe Login ou Cadastro -->
    <UserLogin v-if="mostrarLogin" @loginSuccess="redirecionar" @mostrarCadastro="mostrarTelaCadastro" />
    <UserCadastro v-else-if="mostrarCadastro" @loginSuccess="redirecionar" @mostrarLogin="mostrarTelaLogin" />
    
    <!-- Exibe a tela de inserir produto quando estiver logado -->
    <InserirProduto v-if="mostrarInserirProduto" @logout="logout"/>
  </div>
</template>

<script>
import UserLogin from './components/UserLogin.vue';
import UserCadastro from './components/UserCadastro.vue';
import InserirProduto from './components/InserirProduto.vue';

export default {
  name: 'App',
  components: {
    UserLogin,
    UserCadastro,
    InserirProduto
  },
  data() {
    return {
      mostrarLogin: false,  // Inicia com a tela de Login
      mostrarCadastro: false, // Controla se a tela de Cadastro será mostrada
      mostrarInserirProduto: true // Controla se a tela de Inserir Produto será mostrada
    };
  },
  methods: {
    mostrarTelaCadastro() {
      this.mostrarLogin = false;
      this.mostrarCadastro = true; // Alterna para a tela de cadastro
    },
    mostrarTelaLogin() {
      this.mostrarCadastro = false; // Alterna para a tela de login
      this.mostrarLogin = true;
    },
    redirecionar() {
      // Redireciona para a tela de Inserir Produto após login
      this.mostrarLogin = false;
      this.mostrarCadastro = false; // Garante que o cadastro não ficará visível
      this.mostrarInserirProduto = true; // Exibe a tela de inserir produto
    },
    logout() {
      // Realiza o logout, voltando para a tela de login
      this.mostrarLogin = true;
      this.mostrarCadastro = false;
      this.mostrarInserirProduto = false;
    }
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
