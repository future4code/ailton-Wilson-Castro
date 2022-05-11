//**********EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO**********
//Exercício 1
//Letra A
//Resposta é undefined, porque não foi definido o array
/*let array
console.log('a. ', array)*/

//Letra B
//Resposta é null, pois foi declarada que o array é nulo
/*array = null
console.log('b. ', array)*/

//Letra C
//Resposta é 11, pois tem 11 elementos dentro do array
/*array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)*/

//Letra D
//Resposta deu erro, porque não foi definido array mas sim string
/*let i = 0
console.log('d. ', array[i])*/

//Letra E
//Resposta deu erro, porque não tem array, foi craido uma variável com nome array, porém não é um array.
/*array[i+1] = 19
console.log('e. ', array)*/

//Letra F
//Resposta deu erro foi criado um array, mas a forma como foi criada está errada
/*const valor = array[i+6]
console.log('f. ', valor)*/

//Exercício 2
//Respostas: SUBI NUM ÔNIBUS EM MIRROCOS 27

/*const frase = prompt("Digite uma frase");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);*/




//**********EXERCÍCIOS DE ESCRITA DE CÓDIGO**********
//Exercício 1

/*const nome = prompt("qual o seu nome?");
const email = prompt("qual seu email?");
console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nome + "!")*/

//Exercício 2
//Letra A)
/*const comida = ["Carne", "Ovo", "Arroz", "Mocotó", "Peixe"];
console.log(comida);*/

//Letra B)
/*const comida = ["Carne", "Ovo", "Arroz", "Mocotó", "Peixe"];
console.log(`Essas são as minhas comidas favoritas: 
${comida[0]},
${comida[1]},
${comida[2]},
${comida[3]},
${comida[4]}`);*/

//Letra C
/*const comidaPreferida = ["Carne", "Ovo", "Arroz", "Mocotó", "Peixe"];
const comidaUsuario = prompt("Qual sua comida preferida?");
comidaPreferida.splice(1, 1, comidaUsuario);
console.log(`Essas são as minhas comidas favoritas: 
${comidaPreferida[0]},
${comidaPreferida[1]},
${comidaPreferida[2]},
${comidaPreferida[3]} e
${comidaPreferida[4]}`);*/

//Exercício 3
//Letra A)
/*const listaTarefas = [];
//Letra B)  
const ask1 = prompt("Digite uma tarefa")
const ask2 = prompt("Digite uma segunda tarefa")
const ask3 = prompt("Digite uma terceira tarefa")
listaTarefas.push(ask1, ask2, ask3);
//Letra C)
console.log(listaTarefas);
//Letra D)
const realizado = Number(prompt("Digite 1 se você realizou a tarefa 1 ou 2 para a tarefa 2 ou 3 para a tarefa 3 realizada:")); 
const realizadoCorrigido = realizado - 1;
//Letra E)
listaTarefas.splice(realizadoCorrigido, 1);
//Letra F)
console.log(listaTarefas);*/


//**********DEAFIO**********

/*Exercício 1
let frase = prompt("Digite uma frase");
const novaFrase = frase.split(" ");
console.log(novaFrase)

Exercício 2
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const indice = frutas.indexOf("Abacaxi");
const comp = frutas.length;
console.log("O índice de abacaxi é: " + indice + " e o array tem " + comp + " elementos");
*/


