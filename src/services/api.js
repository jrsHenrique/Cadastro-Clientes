import axios from 'axios';

// Configuração do Axios com a URL da API
const api = axios.create({
  baseURL: 'http://localhost:5000',  // URL da API Express

});

// Função para realizar o login
export const login = (username, password) => {
  return api.post('/login', { username, password });
};

// Função para inserir um novo usuário]

// Serviço de API
export const insertUser = (userData) => {
    return api.post('/insert-user', {
      name: userData.nome, // Mapeando para o formato esperado pela API
      email: userData.email,
      password: userData.senha,
      phone: userData.telefone,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
      },
    });
  };
  

// Função para inserir um novo produto
export const insertProduct = (productData) => {
  return api.post('/insert-product', productData);
};
