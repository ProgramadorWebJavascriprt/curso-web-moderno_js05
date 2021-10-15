console.log('curso de javascript web moderno/Função:"this" é a função bind #02;') //sexta-feira,14/05/2021;21:24:00 h +|-
function Pessoa() {
    this.idade = 0
    setInterval(function(){
        this.idade++
            console.log(this.idade)
    }/*.bind(this) */,1000)
}
new Pessoa
