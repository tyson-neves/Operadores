console.log(!true); // negação lógica.. vc pega um resultado verdadeiro e nega ele, ou seja, o resultado é false.
console.log(!false); 

// convertendo valores para true ou false
console.log(!!"Texto"); // dupla negação que faz vc descobrir se a string é ou não verdadeira (true). Textos em geral são sempre true
console.log(!!""); // se o espaço for em branco ele vai ser sempre falso

console.log(!!1); // todos os números são true inclusive os negativos.. o único numero que é false é o 0
console.log(!!0);