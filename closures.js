console.log('curso de javascript web moderno/Função:Closures;') //segunda-feira,17/05/2021;21:05:00 h +|-
/* Closure é o escopo criado,quando uma função é declarada....
   Esse escopo permite a função acessar e manipular as variáveis à função...
   Contexto Léxico em Ação!!!!
*/
const x = 'global'
function fora(){
    const x = 'local'
    function dentro() {
        return x 
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())
