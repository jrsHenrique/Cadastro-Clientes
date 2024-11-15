<template>
  <div class="inserir-produto-container">
    <div class="form-container">
      <h2>Inserir Produto</h2>
      <form @submit.prevent="inserirProduto">
        <div class="form-group">
          <label for="nomeProduto">Nome do Produto:</label>
          <input 
            type="text" 
            v-model="produto.name" 
            id="nomeProduto" 
            placeholder="Digite o nome do produto" 
            required 
          />
        </div>

        <div class="form-group">
          <label for="descricao">Descrição:</label>
          <textarea 
            v-model="produto.description" 
            id="descricao" 
            placeholder="Digite a descrição do produto" 
            required>
          </textarea>
        </div>

        <div class="form-group">
          <label for="preco">Preço:</label>
          <input 
            type="number" 
            v-model="produto.price" 
            id="preco" 
            placeholder="Digite o preço do produto" 
            required 
            step="0.01"
          />
        </div>

        <div class="form-group">
          <label for="quantidade">Quantidade:</label>
          <input 
            type="number" 
            v-model="produto.quantity" 
            id="quantidade" 
            placeholder="Digite a quantidade em estoque" 
            required 
          />
        </div>

        <button type="submit">Inserir Produto</button>
      </form>

      <!-- Botão de Logout -->
      <button class="logout-btn" @click="$emit('logout')">Logout</button>
    </div>
  </div>
</template>

<script>
import api from "../../../backend/services/api";

export default {
  name: "InserirProduto",
  data() {
    return {
      produto: {
        name: "",
        description: "",
        price: null,
        quantity: null,
      },
    };
  },
  methods: {
    async inserirProduto() {
      try {
        // Envia os dados do produto para o backend
        const response = await api.post("/products", this.produto);
        alert(response.data.message || "Produto inserido com sucesso!");

        // Limpa o formulário após o sucesso
        this.produto = {
          name: "",
          description: "",
          price: null,
          quantity: null,
        };
      } catch (error) {
        console.error("Erro ao inserir produto:", error.response?.data || error.message);
        alert("Ocorreu um erro ao inserir o produto. Tente novamente.");
      }
    },
  },
};
</script>

<style scoped>
.inserir-produto-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}

.form-container {
  background: #f4f4f4;
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

input,
textarea {
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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838;
}

.logout-btn {
  width: auto;
  padding: 5px 15px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #5a6268;
}
</style>
