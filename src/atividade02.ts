import leia from 'readline-sync'

export default function atividade02() {
  // Questão 02
  // Você deve desenvolver um algoritmo para conversão de temperaturas. 
  // Você deve solicitar ao usuário a unidade de medida de origem, a temperatura, e a unidade de medida para qual deseja fazer a conversão. 
  // Nesse momento você deve levar em consideração apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit. 
  // No final o algoritmo deve informar a temperatura na unidade de medida escolhida.

  // Celsius para Fahrenheit = F = (C * 1.8) + 32 Fahrenheit para Celsius = C = (F - 32) * (5/9)

  // Celsius para Kelvin = K = C + 273.15 Kelvin para Celsius = C = K - 273.15

  // Celsius para Kelvin = K = (F - 32) * (5/9) + 273.15 Kelvin para Fahrenheit = F = (K - 273.15) * 1.8 + 32

  let medidaConvertida


  let medidaOrigem = leia.keyInSelect([
    "1 - CELSIUS",
    "2 - KELVIN",
    "3 - FAHREINHEIT"
  ], "INFORME A MEDIDA DE ORIGEM: ") + 1 

  let temperatura = leia.questionFloat("INFORME A TEMPERATURA QUE DESEJA CONVERTER: ");

  let medidaConverter = leia.keyInSelect([
    "1 - CELSIUS",
    "2 - KELVIN",
    "3 - FAHREINHEIT"
  ], "INFORME PARA QUAL MEDIDA DESEJA CONVERTER : ") + 1 

  // Celsius para Fahrenheit = F = (C * 1.8) + 32 
  // Fahrenheit para Celsius = C = (F - 32) * (5/9)
  // Celsius para Kelvin = K = C + 273.15 
  // Kelvin para Celsius = C = K - 273.15
  // Celsius para Kelvin = K = (F - 32) * (5/9) + 273.15 
  // Kelvin para Fahrenheit = F = (K - 273.15) * 1.8 + 32

  if(medidaOrigem === medidaConverter ){
    console.log(`Erro, voce deseja converter medidas iguais.`)
  }else{
    console.log('chegou aqui');

    if(medidaOrigem === 1 && medidaConverter === 2){
      medidaConvertida = temperatura + 273.15
    }else if(medidaOrigem === 1 && medidaConverter === 3){
      medidaConvertida = (temperatura * 1.8) + 32 
    }else if(medidaOrigem === 2 && medidaConverter === 1){
      medidaConvertida = temperatura - 273.15
    }else if(medidaOrigem === 2 && medidaConverter === 3){
      medidaConverter = (temperatura - 273.15) * 1.8 + 32
    }else if(medidaOrigem === 3 && medidaConverter === 1){
      medidaConvertida = (temperatura - 32) * (5 / 9);
    }else if(medidaOrigem === 3 && medidaConverter === 2){
      medidaConvertida = (5 / 9) * (temperatura - 32) + 273.15
    }
  }

  console.log(`A TEMPERATURA CONVERTIDA FOI DE ${medidaConvertida}`)
}