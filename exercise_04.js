const carros = [`Onix`, `Uno`, `Ranger`,`Mobi`, `Versa`];
const consumo = [8.5, 13.2, 5.6, 12, 12.3];
const consumo1000 = [];
const custo = [];
const gasolina = 5.5;

let economico = 0;
let carroEco = ``;

for (const carroConsumo of consumo){
    console.log(carroConsumo);
    if (carroConsumo > economico){
        economico = carroConsumo;
    }
    consumo1000.push(1000/carroConsumo);
    custo.push((1000/carroConsumo)*gasolina);
}

carroEco = carros[consumo.indexOf(economico)];

for (let x=0; x<carros.length; x++){
    console.log(`Carro: ${carros[x]}, consumo em litros por 1000 Km ${consumo1000[x].toFixed(2)}, custo em R$${custo[x].toFixed(2)}`);
}
console.log(`Carro mais economico: ${carroEco}, consumo: ${economico} Km/L`);