<script>




var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt=function(texto){return lines.shift();};
var valor=Number(prompt("Informe o valor:"));
console.log("NOTAS:")
var nota100=parseInt(valor/100)
console.log(nota100 +" nota(s) de R$ 100.00")
valor= valor % 100

var nota50=parseInt(valor/50)
console.log(nota50 +" nota(s) de R$ 50.00")
valor= valor % 50

var nota20=parseInt(valor/20)
console.log(nota20 +" nota(s) de R$ 20.00")
valor= valor % 20



var nota10=parseInt(valor/10)
console.log(nota10 +" nota(s) de R$ 10.00")
valor= valor % 10

var nota5=parseInt(valor/5)
console.log(nota5 +" nota(s) de R$ 5.00")
valor= valor % 5

var nota2=parseInt(valor/2)
console.log(nota2 +" nota(s) de R$ 2.00")
valor= valor % 2

console.log("MOEDAS:")
var moeda1=parseInt(valor/1)
console.log(moeda1+" moeda(s) de R$ 1.00")
valor=valor%1

var moeda05=parseInt(valor/0.50)
console.log(moeda05+" moeda(s) de R$ 0.50")
valor=valor% 0.50

var moeda25=parseInt(valor/0.25)
console.log(moeda25+" moeda(s) de R$ 0.25")
valor=valor% 0.25

var moeda01=parseInt(valor/0.1)
console.log(moeda01+" moeda(s) de R$ 0.10")
valor=valor%0.10

var moeda005=parseInt(valor/0.05)
console.log(moeda005+" moeda(s) de R$ 0.05")
valor=valor%0.05

var moeda0001=(valor/0.01)
console.log(moeda0001.toFixed(0)+" moeda(s) de R$ 0.01")
valor=valor%0.01



    </script>