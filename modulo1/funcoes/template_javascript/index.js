//**********Exercícios de interpretação de código**********
//Exercício 1

//Letra A)
//Respostas = Será impresso 10 e 50

//Letra B)
//Respostas = A função continuaria fazendo sua ação, porém nada será impresso, pois não foi dado o comando

/*function minhaFuncao(variavel) {
	return variavel * 5
};

minhaFuncao(2);
minhaFuncao(10);*/

//Exercício 2

//Letra A)
//Respostas = Essa função irá pegar o valor digitado pelo usuário, transformá-lo todo em minúscula e verificar se exxiste a palavra cenoura dentro do texto digitado pelo usuário

//Letra B
//B.I Resposta = true
//B.II Resposta = true
//B.III Respostas = true

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/


//**********Exercícios de escrita de código**********
//Exercício 1

//Letra A)

/*function perfil(){
    let info1 = "Wilson";
    let info2 = 47;
    let info3 = "Manaus";
    let info4 = "estudante"
    console.log("Eu sou " + info1 + "," + "tenho " + info2 + " anos, " + "moro em " + info3 + " e sou " + info4 + ".")
};

perfil("Wilson", 47, "Manaus", "estudante");*/

//Letra B)

/*function parametro(par1, par2, par3, par4){

console.log(`Eu sou ${par1}, tenho ${par2} anos, moro em ${par3} e sou ${par4}.`)
};
parametro("Wilson", 47, "Manaus", "estudante")*/

//Exercício 2

//Letra A

/*function soma(num1, num2){
   
   return num1 + num2 
};

console.log(soma(5, 10));*/

//Letra B

/*function soma(num1, num2){
   
    return num1 >= num2 
 };
 
 console.log(soma(5, 5));*/

 //Letra C

 /*function par(num1){
     
     const modulo = num1 % 2     
     
     return modulo === 0
 };
 
 console.log("O número 10 é par? " + par(10));*/

 //Letra D

/*let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

 const message = function(msg){
     
    return msg
};
const resultado = message(texto);
console.log(resultado.toUpperCase());
console.log(resultado.length)*/

//Exercício 3

/*let num1 = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite um segundo número:"));


function operar(num) {
  
    return num
    
};

console.log(operar("O primeiro número é " + num1));
console.log(operar("O segundo número é " + num2));
console.log(operar("A soma é: " + (num1 + num2)));
console.log(operar("A multiplicação é: " + num1 * num2));
console.log(operar("A subtração é: " + (num1 - num2)));
console.log(operar("A divisão é: " + num1 / num2));*/


//**********DESAFIO**********

//Exercício 1

//Letra A)

/*let somaNumeros = (numero) => {
    return numero    
};
console.log(somaNumeros(10));*/

//Letra B)

/*const soma = (num1, num2) => num1 + num2

console.log(soma(1, 2))*/

//Exercício 2

/*const c1 = 2;
const c2 = 3;

function pitagoras(c1, c2){
    return (c1 * c1) + (c2 * c2)
}
const resultado = Math.sqrt((c1*c1) + (c2*c2))
console.log(resultado)*/


