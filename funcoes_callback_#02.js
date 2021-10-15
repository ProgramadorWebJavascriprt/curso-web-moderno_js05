console.log('curso de javascript web moderno/Função:Funções Callback #02;') //sábado,15/05/2021;10:06:49 h +|-
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// sem Callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)
// com Callback 
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)
// com Callback mais funcional...
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
