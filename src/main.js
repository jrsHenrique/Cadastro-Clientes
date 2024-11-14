import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importando o componente
import InserirProduto from './components/InserirProduto.vue';

const routes = [
  { path: '/inserir-produto', component: InserirProduto }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
