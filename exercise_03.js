var prompt  = require(`prompt-sync`)();

let numero = +prompt('Digite um número para saber sua taboada: ');

for ( x = 1; x < 11; x++){
    console.log(`${numero} x ${x} = ${numero * x}`);
}
