//**********EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO**********
//Exercício 1
//Letra A)
//Resposta = O código vai contar até 4 porque é menor que 5 e depois vai somar 4 + 3 + 2 + 1 = 10

//Exercício 2
//Letra A)
//Resposta = Será impresso números maiores que 18

//Letra B)
//Resposta = O for...of... acessa os valores do array, para acessar o índice do array é for...in...

//Letra C)
//Resposta = aparecerá 4 linhas, sendo a primeira com 1 asteriscos...até a 4ª linha com 4 asteriscos.
//A linha 1 do código é recebeo número digitado pelo usuário
//A linha2 inicia c ontagem em zero
// O while diz que enquanto a quantidade atual for menor que o nº digitado pelo usuário o programa será executado acrescentndo um asterisco por linha. Ex.: linha 1 = 1 asteriscos, linha 2 = 2 asteriscos e assim sucessivamente até atingir o valor digitado pelo usuário.

//**********EXERCÍCIO DE ESCRITA DE CÓDIGO**********
//Exercício 1
//Letra A), B) e C)
//Resposta

/*const interavel = +prompt("Quantos animais de estimação você tem?");
const qtyPets = [];
if (interavel === 0) {
  console.log("Que pena! Você pode adotar um pet!");
} else {
  for (let i = 0; i < interavel; i++) {
    qtyPets.push(prompt("Qual o nome do seu pet?"));
  }
  console.log(qtyPets);
}*/

//Exercício 2
//Letra A)
//Resposta

/*const arrayOriginal = [1,2,3,4,5] 

console.log(arrayOriginal)*/


//Letra B
//Resposta

/*const arrayOriginal = [1,2,3,4,5] 

for(var divisao of arrayOriginal){
    console.log(divisao/10)*/


//Letra C)
//Resposta
/*const arrayOriginal = [1,2,3,4,5]
for(let pares of arrayOriginal){
   
    if(pares % 2 === 0){
        console.log(pares)
    }
}*/

//Letra D)
//Resposta

/*const arrTexto = [1,2,3,4,5,6,7,8,9,0]
for(let texto1 of arrTexto)
for(let texto2 in arrTexto)

  console.log("O elemento do index " + texto2 + " é " + texto1)*/

//Letra E
//Resposta

function exercicioLetraE(arr) {
    let maxNumber = 0
    let minNumber = 10

    for(let i = 0; i < arr.length; i++){
        const num1 = arr[i]
        if (num1 > maxNumber) {
            maxNumber = num1
        }
        const num2 = arr[i]
        if(num2 < minNumber){
            minNumber = num2
        }
    }
    console.log(`O maior número é ${maxNumber} e o menor número é ${minNumber}`)
}
  