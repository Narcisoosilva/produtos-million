const Produto = require("../../app/models/produto");
const host = "http://localhost:3000";
const axios = require('axios').default;

describe("ProdutoController", () => {
  beforeEach(async() => {
    await Produto.deleteMany({}, async(err,removed) => {
      
      await Produto.create({
        nome: `Produto ${new Date().getTime()}`,
        descricao:`É claro que o consenso sobre a necessidade de qualificação garante 
                   a contribuição de um grupo importante na determinação dos métodos 
                   utilizados na avaliação de resultados.`,
        nivel_investidor: 3})
      
      await Produto.create({
        nome: `Produto ${new Date().getTime()}`,
        descricao:`É claro que o consenso sobre a necessidade de qualificação garante 
                   a contribuição de um grupo importante na determinação dos métodos 
                   utilizados na avaliação de resultados.`,
        nivel_investidor: 8})
    })
  })

  describe("POST /produtos.json - Deve retornar se o controller de Produto (ProdutoController)", () => {
    it('cadastrou um produto', async(done) => {
      const body = {
        nome: `Produto ${new Date().getTime()}`,
        descricao:`É claro que o consenso sobre a necessidade de qualificação garante 
                   a contribuição de um grupo importante na determinação dos métodos 
                   utilizados na avaliação de resultados.`,
        nivel_investidor: 7
      }
      const config = {
        headers:{'token': 'e5bb38b104fc12c115af9f7d702e9bce380eccf2'}
      }
      const response = await axios.post(`${host}/produtos.json`, body, config)
      expect(response.status).toBe(204);
      done();
    });
  });
});