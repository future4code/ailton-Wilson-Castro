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
