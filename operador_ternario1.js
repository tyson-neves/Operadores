const hora = 16;
const saudacao = hora <= 11 ? "Bom dia" : "Boa tarde";

console.log(saudacao)


// segunda parte do exercício, não quebrei em dois arquivos

const hora2 = 12;
const saudacao2 = hora2 <= 11 ? "Bom dia" : (hora2 <= 17 ? "Boa tarde" : "Boa noite");

console.log(saudacao2);