const alunos = ['Emily',10,'10'];
console.log(alunos);
console.log(alunos[0]);


//Lista vazia(array)
const notas=[];

//Aducionar itens na lista
notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);
notas.push('10');

console.log(notas)

//Somar todas as posições do indice

const soma=notas[0] + notas[1] + notas[3] 

console.log('Soma: ${soma}');
console.log('Qtde. notas cadastradas:%{notas.length}');

//Media  da soma

const media= soma/notas.length;
console.log('Média:${media');