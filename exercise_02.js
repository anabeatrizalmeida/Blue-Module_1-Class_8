var prompt  = require(`prompt-sync`)();

let numero = +prompt(`Digite um número para saber ser fatorial: `);

for (let x = numero-1; x > 0; x--){ // Roda uma primeira vez antes da última condição.
    numero *= x;
}
console.log(numero);