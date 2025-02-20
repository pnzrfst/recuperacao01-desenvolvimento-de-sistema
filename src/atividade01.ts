import leia from 'readline-sync'

export default function atividade01() {
  // Questão 01
  // Crie um algoritmo para um calcular o valor de uma hospedagem. 
  // Você deve solicitar ao usuário a quantidade de diárias e também a idade do hospede. 
  // Com essas informações você calcular o valor total da diária com base na tabela de preço abaixo. 
  // Além disso, você deve levar em consideração que caso a pessoa tenha mais de 60 anos, ela terá um desconto de 20%. 
  // Ao final o algoritmo deve informar o valor total da hospedagem.

  // Menor ou igual a 5 dias - R$100,00 a diária
  // De 6 até 10 dias - R$90,00 a diária
  // A partir de 11 dias - R$80,00 a diária

  let qtdDiarias = leia.questionInt('Digite a qtd de dias que deseja: ');

  let idadeUser = leia.questionInt('Informe sua idade: ');

  let valorTotal = 0

 


  if(qtdDiarias <= 5){

    valorTotal = 100 * qtdDiarias;
    
    if(idadeUser > 60){
      valorTotal *= 0.8 
    }
    

  }else if(qtdDiarias >= 6 ||  qtdDiarias <= 10){
    valorTotal = 90 * qtdDiarias;
    
    if(idadeUser > 60){
      valorTotal *= 0.8 
    }

  }else{
    valorTotal = 80 * qtdDiarias;
    
    if(idadeUser > 60){
      valorTotal *= 0.8 
    }
  }


  console.log(`Voce ficou ${qtdDiarias} dias, e pagou ${valorTotal}.`);

}