// Escreva uma função que receba um número e retorne:
/*

    número é divisivel por 3 = Fizz
    número é divisivel por 5 = Buzz
    número é divisivel por 3 e por 5 = FizzBuzz
    número NÃO é divisivel por 3 e por 5 = retorna o próprio número
    checar se o número é realmente um número
    use uma função que receba números de 0 a 100

*/

const fizzBuzz = (numero) => {

    if(typeof numero === 'string'){
        return numero;
    }

    numero = Number(numero);

    if (numero % 3 === 0 && numero % 5 === 0){

        return 'FizzBuzz';

    } else if (numero % 3 === 0){

        return 'Fizz';

    } else if(numero % 5 === 0){

        return 'Buzz';

    } else {
        return numero;
    }
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}
