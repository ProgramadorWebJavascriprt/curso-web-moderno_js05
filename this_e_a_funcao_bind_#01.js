console.log('curso de javascript web moderno/Função:"this" é a função bind #01;') //sexta-feira,14/05/2021;21:08:00 h +|-
const pessoa = {
    saudacao: 'Bom dia!!!',
        falar(){
            console.log(this.saudacao)
        }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: Funcional e Orientado a Objeto; {undefined}
const falarDePessoa = pessoa.falar.bind(pessoa) /* agora passar a funcionar...
é responsavél amarrar o objeto para a função...*/
falarDePessoa()
