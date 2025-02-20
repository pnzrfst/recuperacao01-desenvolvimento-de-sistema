import leia from 'readline-sync';

export default function atividade03() {
  // Questão 03
  // Crie um algoritmo que leia uma quantidade n de números inteiros fornecida pelo usuário e armazene esses números em um vetor. 
  // O algoritmo deve parar de solicitar valores, 
  // quando o usuário digitar o numero 0. 
  // Ao final, o algoritmo deve calcular e imprimir a média desses números, a soma de todos os números o maior e menor digitado. 
  // (Desconsiderar o 0).

  let numeros: any[] = [];
  
  let media
  let soma = 0
  let min = Infinity
  let max = -Infinity


  let querParar = false;


  do{
    let numero = leia.questionInt('INFORME UM NUMERO: ');

    if(numero === 0){
      querParar = true
    }

    numeros.push(numero)

  }while(querParar != true);


  for(var i = 0; i < numeros.length - 1; i++){
    soma += numeros[i];

    if(numeros[i] < min && numeros[i] != 0){
      min = numeros[i]
    }

    if(numeros[i] > max){
      max = numeros[i]
    }

  }


  media = soma / numeros.length;


  console.log(`SOMA: ${soma}, MEDIA: ${media}, MAIOR: ${max}, MENOR: ${min}`)
}