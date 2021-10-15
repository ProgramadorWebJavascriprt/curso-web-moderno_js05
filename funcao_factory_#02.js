console.log('curso de javascript web moderno/Função:Função Factory #02;') //segunda-feira,17/05/2021;21:18:00 h +|-
function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 1199.49))
