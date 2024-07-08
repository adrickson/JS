// Capturando erros

// throw == Lançar
// try == tente
// catch == capture/pegue

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){ // Valindando se as variáveis correspondem às condições para realizar o programa
        throw new Error('x e y, precisam ser números para continuar a função.'); // Se as variáveis não corresponderem a condição imposta, o erro será lançado, com essa seguinte mensagem imposta.
    }

    return x + y;
}

try {
    console.log(soma(1, 2)); // tentando usar esses valores como referência para a função, tudo OK!
    console.log(soma(1, 'A')); // tentando usar esses valores como referência para a função, O ERRO SERÁ LANÇADO!
} catch (error){ // CAPTURANDO O ERRO DO TRY
    console.log(error); // Exibindo o Erro
}

// Não exiba os erros para seu usuário, então não utilize o console.log para isso. Em vez disso pode-se usar um alert, caso for necessário.
