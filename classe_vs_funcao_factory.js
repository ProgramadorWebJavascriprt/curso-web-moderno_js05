console.log('curso de javascript web moderno/Função:Classe vs Função Factory;') //segunda-feira,17/05/2021;21:18:00 h +|-
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
}

}
const p1 = new Pessoa('André Luis')
p1.falar()
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome completo é ${nome}`)
    }
}
const p2 = criarPessoa('André Luis Kunert')
p2.falar()

