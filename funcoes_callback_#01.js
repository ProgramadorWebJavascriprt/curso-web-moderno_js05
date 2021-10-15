console.log('curso de javascript web moderno/Função:Funções Callback #01;') //sábado,15/05/2021;09:58:00 h +|-
/*
   "Callback trás de volta...."
*/
const fabricantes = ["Mercedes", "Audi", "BMW"]
function imprimir(nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
