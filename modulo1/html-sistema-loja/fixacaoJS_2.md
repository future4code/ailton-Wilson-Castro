```
function calculaPrecoTotal(quantidade) {
  const macaSemDesconto = 1.30
  const macaComDesconto = 1
  if (quantidade < 12){
    return macaSemDesconto * quantidade
  }else{
    return macaComDesconto * quantidade
  }
  
}
```
