import leia from 'readline-sync'
export default function atividade04() {  
  // Questão 04
  // Escreva um algoritmo que gere uma senha aleatória de comprimento especificado pelo usuário. 
  // Você deve solicitar ao usuário o tamanho da senha e gerar de forma aleatório. 
  // A senha deve conter uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais.
  
  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
  let senha = ""

  let tamanhoUser = leia.questionInt('INFORME O TAMANHO DA SENHA: ');

  for(var i = 0; i < tamanhoUser; i++){
    var indice = Math.floor(Math.random() * char.length);
    senha += char[indice]
  }

  console.log(senha)

} 