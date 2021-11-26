let Sistema_Bancário= parseInt(prompt(`Qual é saldo atual?`))
let Valor_da_Compra=parseInt(prompt (`Valor da sua compra?`)) 
let Saldo_Final= alert(Sistema_Bancário-Valor_da_Compra)

if(Sistema_Bancário>= Valor_da_Compra) 
{Sistema_Bancário= Sistema_Bancário-Valor_da_Compra
alert ("Compra realizada com sucesso!")}

else if(Sistema_Bancário<Valor_da_Compra)
{Sistema_Bancário=Sistema_Bancário-Valor_da_Compra
alert("Saldo insuficiente!")}

