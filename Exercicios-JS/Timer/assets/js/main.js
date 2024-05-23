function relogio(){

    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
    
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC'
        });
    }
    
    console.log(criaHoraDosSegundos(10));
    
    
    const relogio = document.querySelector('.relogio');
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
    
        timer = setInterval(function (){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    
    }
    
    document.addEventListener('click', function (e){
    
        const el = e.target;
    
        if(el.classList.contains('zerar')) { // checa se determinado elemento foi clicado
            console.log('você clicou em zerar');
    
            relogio.classList.remove('pausado');
    
            clearInterval(timer);
        
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    
        if(el.classList.contains('iniciar')) {
            console.log('você clicou em iniciar');
    
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
    
        }
    
        if(el.classList.contains('pausar')) {
            console.log('você clicou em pausar');
    
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    
    });
}

relogio();
