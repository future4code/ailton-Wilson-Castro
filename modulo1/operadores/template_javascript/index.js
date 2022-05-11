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

/*let idade = prompt("Quantos anos você tem?");

console.log("Sua idade em meses é:", idade*12, "meses");
console.log("Sua idade em dias é:", idade*12*30, "dias");
console.log("Sua idade em horas é:", idade*12*30*24, "horas");*/

// Exercício 4

/*let num1 = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite outro número:"));
let result1 = num1 > num2;
let result2 = num1 === num2;
let result3 = num1 % num2;
let divisao1 = result3 === 0;
let result4 = num2 % num1;
let divisao2 = result4 === 0;


console.log("o primeiro número é maior que o segundo?", result1);
console.log("o primeiro número é igual ao segundo?", result2);
console.log("o primeiro número é divisível pelo segundo?", divisao1);
console.log("o segundo número é divisível pelo primeiro?", divisao2);*/


//DESAFIO

//Exercício 1

//Letra A)

/*let tempF1 = 77;
let tempK1 = (tempF1 - 32) * (5/9) + 273.15;
console.log("A temperatura de 77 ॰F em Kelvin é:", tempK1,"K");

//Letra B)
let tempC1 = 80;
let tempF2 = tempC1 * (9/5) + 32;
console.log("A temperatura de 80॰C em F é:", tempF2,"॰F");

//Letra C)
let tempC2 = 30;
let tempF3 = tempC2 * (9/5) + 32;
let tempK2 = (tempF3 - 32) * (5/9) + 273.15;
console.log("A temperatura de 30॰C em F é:", tempF3,"॰F");
console.log("A temperatura de 30॰C em K é:", tempK2,"K");

//Letra D
let tempC3 = Number(prompt("Digite uma temperatura em ॰C:"));
let tempF4 = tempC3 * (9/5) + 32;
let tempK3 = (tempF4 - 32) * (5/9) + 273.15;
console.log("A temperatura digitada em F é:", tempF4,"॰F");
console.log("A temperatura digitada em K é:", tempK3,"K");*/

//Exercício 2

//Letra A)

/*let kWatt = 280;
let valorHora = 0.05;

console.log("R$", kWatt * valorHora);*/

//Letra B)

/*let desconto = 0.15;
let kWatt = 1000;
let valorHora = 0.05;
let resultado = (kWatt * valorHora) - (kWatt * valorHora)*desconto
console.log("R$", resultado);*/

//Exercício 3

//Letra A)

/*let libra = 20;
let kilo = libra / 2.2046;
console.log("20 libras equivale a", kilo, "Kg");*/

//Letra B)

/*let onca = 10.5;
let kilo = onca * 0.0283;
console.log("10.5 onças equivale a", kilo, "Kg");*/

//Letra C)

/*let milha = 100;
let metro = milha * 1609.34;
console.log("100 milhas equivale a", metro, "m");*/

//Letra D)

/*let pes = 50;
let metro = pes * 0.3048
console.log("50 pés equivale a", metro, "m");*/

//Letra E)

/*let galao = 103.56;
let litro = galao * 3.7854;
console.log("103.56 galões equivale a", litro, "l");*/

//Letra F)
/*let xicara = 450;
let litro = xicara * 0.284131;
console.log("450 xícaras imperial equivale a", litro, "l");*/

//Letra G)

/*let libra = prompt("Digite um valor em libras");
let kilo = libra / 2.2046;
console.log(libra, "libra(s) equivale a", kilo, "Kg");*/






