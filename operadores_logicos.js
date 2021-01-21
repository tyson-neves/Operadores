let temDinheiro = true;
let estaEnsolarado = false;
let carroEstaNaGaragem = false;

// (E) ambas tem que ser verdadeira para o resultado ser verdadeiro TV 50 pol
let resultadoE = "#1 (AND) Vai para o Shopping? ";
resultadoE += temDinheiro && estaEnsolarado; 
console.log(resultadoE);

// OU ... ou seja, se uma condição for verdadeira o resultado final pode ser verdadeiro. "Um OU outro".
let resultadoOU = "#2 (OR) Vai para o Shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem; 
console.log(resultadoOU);

// Diferente
console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false != false);

//negação logica
console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !false);


