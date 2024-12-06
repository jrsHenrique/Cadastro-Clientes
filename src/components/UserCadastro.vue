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
import { insertUser } from "../services/api"; // Certifique-se de que insertUser está exportado corretamente

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
      // Envia os dados para a API com o formato esperado
      const response = await insertUser({
        nome: this.form.nome, // Mantendo os nomes do formulário
        email: this.form.email,
        senha: this.form.senha,
        telefone: this.form.telefone,
      });

      // Mensagem de sucesso
      alert(response.data.message || "Cadastro realizado com sucesso!");
      this.$emit("loginSuccess"); // Emite o evento de sucesso de login

    } catch (error) {
      // Erro no envio
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
  padding: 20px;
}

.form-container {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  margin-top: 5px;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 20px;
  font-size: 16px;
  color: #555;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .form-container {
    padding: 15px;
  }

  h2 {
    font-size: 20px;
  }

  button {
    font-size: 16px;
  }

  input {
    font-size: 14px;
  }
}
</style>
