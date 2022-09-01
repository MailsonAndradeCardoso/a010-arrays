/*# Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:*/

const apenasNumeros = [1, 5, 13, 20]
const apenasStrings = ["Bom Dia!", "Boa Tarde!", "Boa Noite!"]
const numerosStringBooleano = [10, "Bem Vindo!", true]
console.log(apenasNumeros, apenasStrings, numerosStringBooleano)

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão)

console.log(apenasNumeros.length)
console.log(apenasStrings.length)
console.log(numerosStringBooleano.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array

console.log(apenasNumeros[0])
console.log(apenasStrings[1])
console.log(numerosStringBooleano[2])

//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log(apenasNumeros.includes(5))
console.log(numerosStringBooleano.includes("Bom Dia!"))

