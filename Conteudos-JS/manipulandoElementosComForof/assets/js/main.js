const paragrafos = document.querySelector('.paragrafos');
const tagsP = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // Pega os estilos CSS já feitos e computados no navegador
const backgroundColorBody = estilosBody.backgroundColor; // Aqui estou acessando os estilos impostos no body e pegando seu backgroundColor
console.log(backgroundColorBody);

for (let p of tagsP){ // Para cada tag p que esteja dentro da div com a class="paragrafos" serão adicionados os seguintes estilos:
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFF';
    p.style.padding = '5px';
    console.log(p);
}
