function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}

function funcaoDoInterval(){
    console.log(mostraHora());
}

setInterval(funcaoDoInterval, 1000);
