const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let valor of numeros){

    if (valor === 2 ){
        console.log('pulei o número 2');
        continue; // Sempre que tiver o continue o laço de repetição reotrna pro começo do laço, lá em cima.
    }

    // UTILIZANDO O BREAK
    // Sempre que a condição for atendida ele sai do laço de repetição, EXEMPLO:
    console.log(valor);

    if (valor === 7) {
        console.log('7 encontrado, saindo...');
        break; // quando chegar no valor 7 ele para.
    }

}

// ESSE MÉTODO FUNCIONA EM TODOS OS TIPOS DE LAÇO DE REPETIÇÃO EXEMPLO:

for (let i in numeros){
    let valores = numeros[i];

    if(valores === 2){
        console.log('pulei o 2');
        continue;
    }

    console.log(valores);

    if (valores === 7){
        console.log('7 Encontrado, saindo...');
        break;
    }
}
