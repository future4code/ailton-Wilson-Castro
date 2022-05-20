/*
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
  
 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    /*console.log(carta.texto)
    imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)*/
    
    /*console.log(carta.valor)     
    imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
*/

const recepcao = "Bem-vindo(a) ao jogo de blackjack"

const inicio = confirm("Quer iniciar uma nova rodada?")

const carta1 = comprarCarta()
const carta2 = comprarCarta()
const carta3 = comprarCarta()
const carta4 = comprarCarta()
const somaCartasUsuario = carta1.valor + carta2.valor
const somaCartasComputador = carta3.valor + carta4.valor
if(inicio === true){
   console.log("Bem-vindo(a) ao jogo de Blackjack")
   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - ${somaCartasUsuario}`)
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - ${somaCartasComputador}`)
   
   if(somaCartasComputador > somaCartasUsuario){
      console.log("O computador ganhou!")
   }else{
      console.log("O usuário ganhou!")
   }
   
}else{
   console.log(recepcao)
   console.log("O jogo acabou")
}