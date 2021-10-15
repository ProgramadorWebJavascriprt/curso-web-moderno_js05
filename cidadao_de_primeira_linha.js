console.log('curso de javascript web moderno/Função:Cidadão de Primeira Linha;') //quinta-feira,13/05/2021;19:55:00 h +|-
// Função em JS é First-Class Object (Citizens);
    // Higher-order function;
        // criar de forma literal
        function fun1(){}
            // Armazenar em uma variável
            const fun2 = function ()  {}
                // Armazenar em um array
                const array = [function (a, b) { return a + b }, fun1, fun2]
                console.console.log('curso de javascript web moderno/Estrutura de Controle:Usando a Estrutura  FOR/IN;') //quinta-feira,13/05/2021;13:59:59 h +|-
                log(array[0](2, 3))
                // Armazenar em um atributo de objeto
                const obj = {}
                obj.falar = function () {return 'JS é Show'}
                console.log(obj.falar())
                    // Passar função como parametros para outra função
                    function run(fun) {
                        fun()
                    }
                    run(function() {console.log('Executando...') })
                        // Um função pode retornar/conter um função
                        function soma(a, b){
                            return function (c){
                                console.log(a + b + c)
                            }
                        }
                        soma(7, 3)(4)
                        const cincoMais = soma(7, 3)
                        cincoMais(4)
