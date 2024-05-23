function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}

const timer = setInterval(function (){ // Vai executar essa função a cada 1 segundo
    console.log(mostraHora());
}, 1000);

setTimeout(function (){ // Vai executar essa função, após 3 segundos
    clearInterval(timer); // Vai parar o timer 
}, 3000);

setTimeout(function (){
    console.log('Fui executada!');
}, 4000);


// setInterval executa sempre!. Ela é executada na velocidade que você mandar se você mandar 1000ms a cada 1 segundo a função será executada.

// setTimeOut executa apenas 1 vez. Ela é executada DEPOIS que passar o tempo que você determinou, se você mandou 2000ms depois de 2 segundos a função sera executada.
