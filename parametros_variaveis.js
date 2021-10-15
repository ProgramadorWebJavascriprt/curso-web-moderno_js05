console.log('curso de javascript web moderno/Função:Parâmetros Variávies;') //quinta-feira,13/05/2021;20:45:30 h +|-
function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(3.3, 5.5, 7.7))
console.log(soma(3.3, 5.5, 7.7, "Deus"))
console.log(soma('D', 'e', 'u', 's'))
