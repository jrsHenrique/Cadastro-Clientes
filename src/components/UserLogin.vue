<template>
  <div class="login-container">
    <div class="form-container">
      <h2>Login de Usuário</h2>
      <form @submit.prevent="enviarLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            v-model="form.email"
            id="email"
            placeholder="Digite seu email"
            required
          />
        </div>

        <div class="form-group">
          <label for="senha">Senha:</label>
          <input
            type="password"
            v-model="form.senha"
            id="senha"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
      <p>Não tem uma conta? <a @click="irParaCadastro">Cadastre-se aqui</a></p>
    </div>
  </div>
</template>

<script>
import api from "../services/api"; // Usa o arquivo de configuração do Axios

export default {
  name: "UserLogin",
  data() {
    return {
      form: {
        email: "",
        senha: "", // Note que isso está alinhado com o backend
      },
    };
  },
  methods: {
    async enviarLogin() {
      try {
        // Faz login e recebe o token do backend
        const response = await api.post("/users/login", {
          email: this.form.email,
          password: this.form.senha, // Certifique-se de que o backend espera o campo "password"
        });

        if (response.data.token) {
          // Salva o token no localStorage para autenticação futura
          localStorage.setItem("token", response.data.token);
          alert("Login realizado com sucesso!");

          // Emite evento de login ou redireciona para outra rota
          this.$emit("loginSuccess"); // Redireciona usando o Vue Router
        } else {
          alert("Email ou senha incorretos.");
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error.response?.data || error.message);
        alert("Ocorreu um erro ao fazer login. Verifique suas credenciais.");
      }
    },
    irParaCadastro() {
      this.$emit("mostrarCadastro"); // Emite o evento para mudar a tela para cadastro
    },
  },
};
</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
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
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
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

p {
  margin-top: 15px;
}
</style>
