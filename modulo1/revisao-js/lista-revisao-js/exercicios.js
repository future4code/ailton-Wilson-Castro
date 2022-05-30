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
    let maiorNumero = num1
    let maiorDivisivelPorMenor =  true
    let diferenca = Math.abs(num1 - num2)
    
    if(num2 > num1){
        maiorNumero = num2
        maiorDivisivelPorMenor = (maiorNumero % num1 === 0)
    }else{
        maiorDivisivelPorMenor = (maiorNumero % num2 === 0)
    }
    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
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
    
    const ordem = array.sort((a,b) => {
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })
    const segundoMenor = array[1]
    const indice = array.length-2
    const segundoMaior = array[indice]
  
    
    return [segundoMaior,segundoMenor]
   
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  
   const resultado = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   return resultado
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const resultado = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return resultado
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const final = pessoas.filter((item) => {
       return item.idade > 14 && item.idade < 60 && item.altura >= 1.5
})
return final
   }


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const final = pessoas.filter((item) => {
        return item.idade <= 14 || item.idade >= 60 || item.altura < 1.5
 })
 return final
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let buy = contas.map((objCliente) => {
        for(let compra of objCliente.compras){
            objCliente.saldoTotal = objCliente.saldoTotal - compra
        }
        return {...objCliente,
        saldoTotal: objCliente.saldoTotal,
        compras: []}
    })
       return buy
    }

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}