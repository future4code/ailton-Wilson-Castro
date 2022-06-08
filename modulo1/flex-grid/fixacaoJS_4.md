```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let qty = 0
 for(let valor of arrayDeNumeros){
   if(valor === numeroEscolhido){
     qty = qty + 1
 }
}
  if (qty === 0){
    return "Número não encontrado"
  }
  return `O número ${numeroEscolhido} aparece ${qty}x`
}
```
