console.log('curso de javascript web moderno/Função: Desafio Função Construtora ;') //segunda-feira,17/05/2021;21:18:00 h +|-
function Pessoa(nome) {
        this.nome = nome
  
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
      }
    }       
const p1 = new Pessoa('André Luis')
p1.falar()


