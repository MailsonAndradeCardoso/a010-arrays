/*# Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;*/

const apenasNumeros = [1, 5, 13, 20]
const apenasStrings = ["Bom Dia!", "Boa Tarde!", "Boa Noite!"]
const numerosStringBooleano = [10, "Bem Vindo!", 20>2] //pode usar false ou true tabem

/*- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;*/
console.log(apenasNumeros)
const apenasNumerosCopia = apenasNumeros
apenasNumerosCopia.push(34)
console.log(apenasNumerosCopia)

/*- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;*/
console.log(apenasStrings)
const apenasStringsCopia = apenasStrings//poderia ter usado slice() = fazer copia
apenasStringsCopia.pop()
console.log(apenasStringsCopia)

/*- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;*/
console.log(numerosStringBooleano)
const numerosStringBooleanoCopia = numerosStringBooleano //poderia ter usado slice() = fazer copia
numerosStringBooleanoCopia.splice(1, 1)
console.log(numerosStringBooleanoCopia)

