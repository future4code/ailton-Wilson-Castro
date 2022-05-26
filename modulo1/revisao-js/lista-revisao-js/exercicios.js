// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
      return  array.filter((item) => {
     if ((item % 2) === 0)
     return item
  })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    function par (pares) {
        if(pares % 2 === 0)
        return pares
    }
    let numPar = array.filter(pares)
    let res = numPar.map(function(pares){
        return Math.pow(pares,2)
    })
    return res
     }
  

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNum = 0
  for(let i = 0; i < array.length; i++){
    if (array[i] > maiorNum) {
    maiorNum = array[i]
}
}
return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorDivisivelPorMenor =  num2 / num1
    const diferenca = num2 - num1
    if (num2 > num1 && maiorDivisivelPorMenor % 2 === 0){
        return "{"+"maiorNumero:" + num2 + ",maiorDivisivelPorMenor:true," + "diferenca:" + diferenca + "}"
    }
}    

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++){
        if(i % 2 === 0){
            numerosPares.push(i)
        }
    }
    return numerosPares
    }


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   
    if(ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)){
        if(ladoA == ladoB && ladoB == ladoC){
            return "Equilátero"
        }else if(ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
            return "Isósceles"
        }else{
            return "Escaleno"    
        }   
    }else{
        return "Nenhuma medida informada"
}
}


    

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}