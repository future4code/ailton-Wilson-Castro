// EXERCÍCIO DE INTERPRETAÇÃO DO CÓDIGO

// Resposta 1
// Letra a - false (baaseado na tabelinha no && tendo um false já gera false como resultado)
// Letra b - false pelo mesmo ativo acima
// Letra c - true porque o resultado anterior é false, logo o inverso é true e pela tabela do OR(||) só é false se todos forem falses, que não é o caso, então fica true e o resultado do () também true, finalizando tudo em true 
    
    
    /*const bool1 = true;
    const bool2 = false;
    const bool3 = !bool2;

    let resultado = bool1 && bool2;
    console.log("a. ", resultado);

    resultado = bool1 && bool2 && bool3;
    console.log("b. ", resultado);

    resultado = !resultado && (bool1 || bool2);
    console.log("c. ", resultado);*/


// Resposta 2 e 3
// Será impresso 1020 ao invés de 30, é preciso transformar o resultado do prompt que é sempre string em number
    /*let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)*/

    /*Correção:
    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)*/


// EXERCÍCIO DE ESCRITA DO CÓDIGO

// Exercício 1

/*let idade = Number(prompt("Qual sua idade? "));
let amigo = Number(prompt("Qual a idade do seu melhor amigo? "));
let resultado = idade > amigo;
let resultado2 = idade - amigo;

console.log("Sua idade é maior do que a do seu melhor amigo? ", resultado);
console.log("A diferança de idade sua para o seu melhor amigo é ", resultado2);*/

// Exercício 2

/*let par = Number(prompt("Digite um número par"));
let resultado = par % 2; 
console.log(resultado);*/

// Exercício 3

let idade = prompt("Quantos anos você tem?");

console.log("Sua idade em meses é:", idade*12, "meses");
console.log("Sua idade em dias é:", idade*12*30, "dias");
console.log("Sua idade em horas é:", idade*12*30*24, "horas");



