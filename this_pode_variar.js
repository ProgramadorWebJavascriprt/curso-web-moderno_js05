console.log('curso de javascript web moderno/Função:"this" pode variar;') //quinta-feira,13/05/2021;21:26:14 h +|-
/*
  # feito Browser:{Jquery.com}
   function f1() { console.log(this)}
undefined
function f1() { console.log(this === window)}
undefined
f1()
true debugger eval code:1:25
undefined
document.getElementsByTagName('body')[0].onclick = f1
function f1()

false debugger eval code:1:25
function f2() { console.log(this === document) }
undefined
f2
function f2()

document.getElementsByName('body')[0].onclik = f2
Uncaught TypeError: document.getElementsByName(...)[0] is undefined
    <anonymous> debugger eval code:1
debugger eval code:1:10
false debugger eval code:1:25
const body = document.getElementsByTagName('body')[0]
undefined
function f2() {console.log(this === body) }
undefined
document.getElementsByName('body')[0].onclik = f2
Uncaught TypeError: document.getElementsByName(...)[0] is undefined
    <anonymous> debugger eval code:1
debugger eval code:1:10
false debugger eval code:1:25
document.getElementsByTagName('body')[0].onclick = f2
function f2()

true debugger eval code:1:24
f2()
false debugger eval code:1:24
undefined
const f3 = () => console.log(this === window)
undefined
f3()
true debugger eval code:1:26
undefined
document.getElementsByTagName('body')[0].onclick = f3
function f3()

true debugger eval code:1:26
this === window
true
*/
