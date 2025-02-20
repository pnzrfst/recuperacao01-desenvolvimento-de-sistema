export default function atividade05() {
  // Questão 05
  // Escreva um algoritmo para verificar se uma roleta de cassino é viciada. 
  // A roleta tem 37 números (de 0 a 36), sendo que o número 0 é verde e os demais são divididos 
  // igualmente entre vermelho e preto (impares são vermelho, pares são pretos). 
  // O programa deve contar quantas vezes cada cor (verde, vermelho, preto) 
  // foi gerada e verificar se alguma cor tem uma frequência maior que 40%. Se houver, o programa deve indicar que a roleta pode estar viciada.
  let numeros: any[] = []

  let vermelho = 0
  let preto = 0
  let verde = 0

  for(var i = 0; i < 37; i++){
    numeros.push(i)
  }

  console.log(numeros)
  console.log(numeros.length)

  for(var j = 0; j < numeros.length; j++){
    let numeroPosicao = numeros[j];

    if(numeroPosicao === 0){
      verde++
    }else if(numeroPosicao % 2 === 0){
      preto++
    }else{
      vermelho++
    }
  }
  
  console.log(verde)
  console.log(vermelho)
  console.log(preto)

  let total = numeros.length

  let pctVerde = (verde / total) * 100;
  let pctPreto = (preto / total) * 100;
  let pctVermelho = (vermelho / total) * 100;

  if(pctVerde > 40 || pctPreto > 40 || pctVermelho > 40){
    console.log("TA VICIADA.")
  }else{
    console.log("TA NORMAL, CHORAO.")
  }
}