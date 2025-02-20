import leia from 'readline-sync';
export default function atividade06(){
    // Questão 06
    // Escreva um programa que permita o cadastro de N produtos. 
    // Para cada produto, solicite o nome e o preço. 
    // Armazene os dados em um vetor de objetos. Ao final, o programa deve:

    // Imprimir o nome e o preço de cada produto.
    // Calcular e exibir o preço médio dos produtos.
    // Calcular e exibir o preço total
    let precoMedio = 0
    let precoTotal = 0 
    let querParar = false
     
    let produtos: any[] = []

    do{
        let novoProduto = {
            nome: leia.question("Insira o nome do produto: "),
            preco: leia.questionFloat("Insira o preco do produto: ")
        }

        produtos.push(novoProduto);

        let escolha = leia.question('DESEJA PARAR?: ');

        if(escolha === "SIM" || escolha === "sim" || escolha === "Sim"){
          querParar = true
        }else{
          querParar = false
        }

    }while(querParar === false)

    for(var i = 0; i < produtos.length; i++){
        
        console.log(produtos[i].nome);
        
        console.log(produtos[i].preco);

        precoTotal += produtos[i].preco;
        
    }
    
    precoMedio =  precoTotal / produtos.length;

    
    console.log(`O preco medio dos produtos foi de: ${precoMedio} e o preco total foi de ${precoTotal}`);

}
