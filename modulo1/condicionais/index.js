//**********EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO**********
//Exercício 1
// Letra A)
//Resposta = O código testa se a divisão tem resto, se zero, diz que passou no teste, caso contrário não.

//Letra B)
//Resposta = Para números pares imprime "passou no teste"

//Letra C)
//Resposta = Para números ímpares imprime "não passou no teste'

//Exercício 2
//Letra A)
//Resposta = O código serve para mostrar o preço da fruta quando o usuário digitar o nome da mesma

//Letra B)
//Resposta = O preço da Maçã é R$ 2.25

//Letra C)
//Reposta = Sem o break depois do case Pêra, o código considera o Default como resposta

//Exercçio 3
//Letra A)
//Resposta = Na 1ª linha está sendo armazenado o nº digitado pelo usuário

//Letra B)
//Resposta = Nº 10 é impresso: "esse nº passou no teste" | Nº -10 não é impresso nada e aind dá erro.

//Letra C)
//Resposta = Sim dá erro para nº menores ou iguais a zero. Porque a variável "mensagem" está fora do escopo da função, para ser impressa teria que estar dentro do escopo


//**********Exercícios de escrita de código**********
//Exercício 1
//Letra A), B) e C)

/*let idade = Number(prompt("Qual sua idade?"))

if (idade >= 18) {
  console.log("Você pode dirigir, é maior de idade.")
} else {
  console.log("Você não pode dirigir, é menor de idade")
}*/

//Exercício 2

/*let turno = prompt("Digite M se estuda de manhã ou V se estuda a tarde ou N se estuda a noite:");

let turnoCorrigido = turno.toUpperCase().trim()
if (turnoCorrigido === "M") {
    console.log("Bom dia!")
} else if (turnoCorrigido === "V") {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}*/

//Exercício 3

/*let turno = prompt("Digite M se estuda de manhã ou V se estuda a tarde ou N se estuda a noite:");
let turnoLetra = turno.toUpperCase()
switch(turnoLetra){
  case "M":
  console.log("Bom dia!")
  break;

  case "V":
  console.log("Boa tarde")
  break;

  case "N":
  console.log("Boa noite!")
  break;

  default:
  console.log("Você não digitou a letra certa, repita a operação!")
}*/

//Exercício 4

/*let genero = prompt("Qual o gênero de filme que vão assistir?");
let preco = prompt("Qual o preço do filme que vão assistir?");
let generoM = genero.toUpperCase().trim();
let precoM = preco.toUpperCase().trim();

if (generoM === "FANTASIA" && preco <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme!")
}*/


//**********DEAFIO**********
//Exercício 1

/*let genero = prompt("Qual o gênero de filme que vão assistir?");
let preco = prompt("Qual o preço do filme que vão assistir?");
let lanche = prompt("Qual snack você irá comprar?")

let generoM = genero.toUpperCase().trim();
let precoM = preco.toUpperCase().trim();

if (generoM === "FANTASIA" && preco <= 15) {
    console.log("Bom filme!")
    console.log(`Aproveite o(a) seu(sua) ${lanche}`)
} else {
  console.log("Escolha outro filme!")
}*/

//Exercício 2

const ingressosNac = [1320,660,1980,880,440,1320,550,330,880,220,170,330]
const ingressosInt = [1320 * 4.10, 660 * 4.10, 1980 * 4.10, 880 * 4.10, 440 * 4.10, 1320 * 4.10, 550 * 4.10, 330 * 4.10, 880 * 4.10, 220 * 4.10, 170 * 4.10, 330 * 4.10]

let nome = prompt("Qual seu nome completo?");7
let etapa = prompt("Digite SF se quer assistir a semi-final ou DT para assistir decisão do 3º lugar ou FI para assistir ao jogo final")
let regiao = prompt("Digite IN para jogo internacional ou DO para jogo doméstico");
let cat = Number(prompt("Escolha uma dessas categorias: 1, 2, 3 ou 4"))
let qty = Number(prompt("Quantos ingressos quer comprar? (Digite somente números)"))

  console.log(`Nome do cliente: ${nome}`)

  switch(etapa){
    case "SF":
    console.log(`Etapa do jogo: Semi-Final`)
    break

    case "DT":
    console.log(`Etapa do jogo: Disputa 3º Lugar`)
    break

    case "FI":
    console.log(`Etapa do jogo: Final`)
  }

  switch(regiao){
    case "IN":
    console.log(`Tipo de jogo: Internacional`)
    break;

    case "DO":
    console.log(`Tipo de jogo: Nacional`)
  }

  console.log(`Categoria: ${cat}`)

  console.log(`Quantidade de ingressos: ${qty} ingresso(s)`)

  console.log("----Valores---")

  if(regiao === "DO" && etapa === "SF" && cat === 1){
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[0]}
    Valor Total: ${ingressosNac[0] * qty}`)
  } else if(regiao === "DO" && etapa === "DT" && cat === 1) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[1]}
     Valor Total: ${ingressosNac[1] * qty}`)
  } else if(regiao === "DO" && etapa === "FI" && cat === 1) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[2]}
     Valor Total: ${ingressosNac[2] * qty}`)
  } else if(regiao === "DO" && etapa === "SF" && cat === 2) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[3]}
     Valor Total: ${ingressosNac[3] * qty}`)
  } else if(regiao === "DO" && etapa === "DT" && cat === 2) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[4]}
     Valor Total: ${ingressosNac[4] * qty}`)
  } else if(regiao === "DO" && etapa === "FI" && cat === 2) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[5]}
     Valor Total: ${ingressosNac[5] * qty}`)
  } else if(regiao === "DO" && etapa === "SF" && cat === 3) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[6]}
     Valor Total: ${ingressosNac[6] * qty}`)
  } else if(regiao === "DO" && etapa === "DT" && cat === 3) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[7]}
     Valor Total: ${ingressosNac[7] * qty}`)
  } else if(regiao === "DO" && etapa === "FI" && cat === 3) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[8]}
     Valor Total: ${ingressosNac[8] * qty}`)
  } else if(regiao === "DO" && etapa === "SF" && cat === 4) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[9]}
     Valor Total: ${ingressosNac[9] * qty}`)
  } else if(regiao === "DO" && etapa === "DT" && cat === 4) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[10]}
     Valor Total: ${ingressosNac[10] * qty}`)
  } else if(regiao === "DO" && etapa === "FI" && cat === 4) {
    console.log(
    `Valor do ingresso: R$ ${ingressosNac[11]}
     Valor Total: ${ingressosNac[11] * qty}`)
  } else if(regiao === "IN" && etapa === "SF" && cat === 1) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[0]}
     Valor Total: ${ingressosInt[0] * qty}`)
  } else if(regiao === "IN" && etapa === "DT" && cat === 1) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[1]}
     Valor Total: ${ingressosInt[1] * qty}`)
  } else if(regiao === "IN" && etapa === "FI" && cat === 1) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[2]}
     Valor Total: ${ingressosInt[2] * qty}`)
  } else if(regiao === "IN" && etapa === "SF" && cat === 2) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[3]}
     Valor Total: ${ingressosInt[3] * qty}`)
  } else if(regiao === "IN" && etapa === "DT" && cat === 2) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[4]}
     Valor Total: ${ingressosInt[4] * qty}`)
  } else if(regiao === "IN" && etapa === "FI" && cat === 2) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[5]}
     Valor Total: ${ingressosInt[5] * qty}`)
  } else if(regiao === "IN" && etapa === "SF" && cat === 3) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[6]}
     Valor Total: ${ingressosInt[6] * qty}`)
  } else if(regiao === "IN" && etapa === "DT" && cat === 3) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[7]}
     Valor Total: ${ingressosInt[7] * qty}`)
  } else if(regiao === "IN" && etapa === "FI" && cat === 3) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[8]}
     Valor Total: ${ingressosInt[8] * qty}`)
  } else if(regiao === "IN" && etapa === "SF" && cat === 4) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[9]}
     Valor Total: ${ingressosInt[9] * qty}`)
  } else if(regiao === "IN" && etapa === "DT" && cat === 4) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[10]}
     Valor Total: ${ingressosInt[10] * qty}`)
  } else if(regiao === "IN" && etapa === "FI" && cat === 4) {
    console.log(
    `Valor do ingresso: R$ ${ingressosInt[11]}
     Valor Total: ${ingressosInt[11] * qty}`)
  }