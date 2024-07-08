function criadorNumeros(numeros){

    // Gerando os números aleatórios:

    numeros.forEach(aleatorio => {
        
        let codigoArea = Math.round(Math.random() * (999 - 100 + 1)) + 100; // Gerando código de área entre 100 e 999
        let prefixo = Math.round(Math.random() * (9999 - 1000 + 1)) + 1000; // Gerando prefixo entre 1000 e 9999
        let sufixo = Math.round(Math.random() * (9999 - 1000 + 1)) + 1000; // Gerando sufixo entre 1000 e 9999


        // Adicionando parenteses entre os dois primeiros numeros

        let numParenteses = `(${codigoArea}) `;

        console.log(numParenteses + prefixo + '-' + sufixo);
       
    });
    
}

let numeros = [1, 2, 3];
criadorNumeros(numeros);
