console.log('curso de javascript web moderno/Função:Contexto Léxico;') //sábado,15/05/2021;11:08:10 h +|-
const valor = 'Global'
function minhaFuncao(){
    console.log(valor)
}
function exerc() {
    const valor = 'Local'
    minhaFuncao()
}
exerc()
