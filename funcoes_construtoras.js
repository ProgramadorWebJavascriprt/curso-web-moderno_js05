console.log('curso de javascript web moderno/Função:Funções Construtoras;') //sábado,15/05/2021;10:36:49 h +|-
function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0
      // metodo publico nª01
      this.acelerar = function () {
          if (velocidadeAtual + delta <= velocidadeMaxima) {
              velocidadeAtual += delta
          } else{
               velocidadeAtual = velocidadeMaxima
          }
      }
       // metodo publico nª02
       this.getvelocidaddeAtual = function () {
           return velocidadeAtual
       }
    }
    const uno = new Carro
    uno.acelerar()
    console.log(uno.getvelocidaddeAtual())
    const ferrari = new Carro(350, 20)
    ferrari.acelerar()
    ferrari.acelerar()
    ferrari.acelerar()
    console.log(ferrari.getvelocidaddeAtual())
    console.log(typeof Carro)
    console.log(typeof ferrari)

