// CRIANDO E EXIBINDO TAGS COM JS

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const section = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]; //Atribuição via desestruturação

    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

section.appendChild(div);
