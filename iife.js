console.log('curso de javascript web moderno/Função: IIFE ;') //segunda-feira,17/05/2021;21:56:00 h +|-
/* 
  IIFE ->  Immediately Invoked Function Expression

(function(){
    console.log('Será executado na hora!!!')
    console.log('Foge do escopo mais abrangente!!!!')
})()
(function(){
    ^
    
    TypeError: console.log(...) is not a function
        at Object.<anonymous> (/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/05-Função/iife.js:5:1)
        at Module._compile (internal/modules/cjs/loader.js:778:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
        at Module.load (internal/modules/cjs/loader.js:653:32)
        at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
        at Function.Module._load (internal/modules/cjs/loader.js:585:3)
        at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
        at startup (internal/bootstrap/node.js:283:19)
        at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
*/
