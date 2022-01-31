var prompt  = require(`prompt-sync`)();

const linhas = +prompt(`Digite quantas linhas deseja: `);
const colunas = +prompt(`Digite quantas colunas deseja: `);

var matriz = [];

for (let i = 0; i < linhas; i++){
    const coluna = [];
    for (let j = 0; j < colunas; j++){
        coluna[j]=+prompt(`Linha: ${i+1}, Coluna: ${j+1} - Digite um número inteiro: `); // O j indica a posição que está no momento.
    }
    matriz[i]=coluna;
}
console.table(matriz); // O table organiza em tabela.