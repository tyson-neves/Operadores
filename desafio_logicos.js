// Duas expressões resultar em true (aritméticos/relacionais/ lógicos)
let verd = 2 + 4 && 5 + 1;
let temQueijo = true;
let temSuco = true;

let fazerPizza = "Vamos fazer Pizza? "
fazerPizza += temQueijo && temSuco; 

console.log(verd >=6 );
console.log(fazerPizza);


// Duas expressões resultar em False (aritméticos/relacionais/ lógicos)

let declaracao = true;
let beijo = false;

let namoro = "Vamos nos namorar? ";
namoro += declaracao == beijo;

console.log(namoro);

let falso = 5 - 3 != 2 || 42 === '42';
console.log(falso);