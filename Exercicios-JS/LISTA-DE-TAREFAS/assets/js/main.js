const inputTarefa = document.querySelector('.inputTarefa');
const btnTarefa = document.querySelector('.btnTarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(evento){
    if(evento.keyCode === 13){ // código da tecla ENTER
        console.log('Enter Pressionado');

        if(!inputTarefa.value) return; // checando se a caixa tem conteudo dentro 
        criaTarefa(inputTarefa.value);

    }
});

function limpaInput(){
    inputTarefa.value = ''; // Limpa a caixa de tarefas
    inputTarefa.focus; // aciona o cursor na caixa de tarefas
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li); // adicionando os li dentro da ul
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return; // checando se a caixa tem conteudo dentro 

    criaTarefa(inputTarefa.value);

});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){ // Se o elemento com a classe apagado for clicado irá acontecer um evento.
        console.log(el.parentElement); // Mostra quem é o pai do elemento.
        el.parentElement.remove(); // Remove o pai do elemento 
        salvarTarefas(); // Apaga também as tarefas salvas no localStorage do navegador.
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li'); // Pegando todos os li criados dentro da ul.
    console.log(liTarefas);

    const listaDeTarefas = [];

    for (let tarefa of liTarefas){

        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // trocando a palavra apagar por espaço vazio, logo em seguida estamos removendo o espaço vazio, deixando só a palavra salva.
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto); // jogando as tarefas dentro do array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // convertendo o array pra string(texto) com JSON
    console.log(tarefasJSON);
    localStorage.setItem('tarefas', tarefasJSON); // Salvando as tarefas no navegador. (como se fosse uma mini base de dados). OBS (Você só pode salvar strings, por isso foi convertido o array para string)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas'); // Acessamos o local storage e pegamos o que foi salvo anteriormente.
    const listaDeTarefas = JSON.parse(tarefas); // convertemos as tarefas que eram string em um array novamente.

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa); // adicionamos a função de criar tarefa para as tarefas que foram resgatadas serem mostradas no DOM novamente.
    }
}

adicionaTarefasSalvas();
