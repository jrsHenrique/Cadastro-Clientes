<template>
  <div class="cadastro-container">
    <div class="form-container">
      <h2>Cadastro de Usuário</h2>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" v-model="form.nome" id="nome" placeholder="Digite seu nome" required />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="form.email" id="email" placeholder="Digite seu email" required />
        </div>

        <div class="form-group">
          <label for="senha">Senha:</label>
          <input type="password" v-model="form.senha" id="senha" placeholder="Digite sua senha" required />
        </div>

        <div class="form-group">
          <label for="telefone">Telefone:</label>
          <input type="tel" v-model="form.telefone" id="telefone" placeholder="Digite seu telefone" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <p>Já tem uma conta? <a @click="irParaLogin">Faça login aqui</a></p>
    </div>
  </div>
</template>

<script>
import api from "../../../backend/services/api"; // Certifique-se de que o caminho está correto

export default {
  name: "UserCadastro",
  data() {
    return {
      form: {
        nome: "",
        email: "",
        senha: "",
        telefone: "",
      },
    };
  },
  methods: {
    async enviarFormulario() {
      try {
        // Envia os dados para a API
        const response = await api.post("/users/cadastro", this.form);
        alert(response.data.message); // Mostra a mensagem de sucesso do backend
        this.$emit("loginSuccess"); // Emite o evento de sucesso de login
      } catch (error) {
        console.error("Erro ao enviar dados:", error.response?.data || error.message);
        alert("Ocorreu um erro ao cadastrar. Tente novamente.");
      }
    },
    irParaLogin() {
      this.$emit("mostrarLogin"); // Emite o evento para mostrar a tela de login
    },
  },
};
</script>

<style scoped>
.cadastro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}

.form-container {
  background: rgba(255, 255, 255, 0.85);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
