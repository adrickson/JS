try {
    // É executada quando não há erros no código
    console.log('Abri o arquivo');
    console.log('Manipulei o Arquivo');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch (erros){
        console.log('Deu erro');
    } finally {
        console.log('Também sou FINALLY');
    }

} catch(erros){
    // É executada quando há erros no código

    console.log('Tratando erro');

} finally {
    // Sempre é executada

    console.log('FINALLY: Eu sempre sou executado');
}


// EXEMPLIFICANDO DE MANEIRA MAIS PRÁTICA

console.log('');
console.log('EXEMPLO MAIS PRÁTICO');

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando alguma instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);  
} catch (error){
    // Tratar Erro
} finally {
    console.log('Bom dia');
}

