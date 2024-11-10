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
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCadastro',
  data() {
    return {
      form: {
        nome: '',
        email: '',
        senha: '',
        telefone: ''
      }
    };
  },
  methods: {
    enviarFormulario() {
      alert('Cadastro realizado com sucesso!');
      console.log(this.form);
    }
  }
};
</script>

<style scoped>
.cadastro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('@/assets/background.jpg'); /* Add your background image */
  background-size: cover;
  background-position: center;
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
