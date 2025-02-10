const alunos = ['Emily', 10, '10'];
console.log(alunos);
console.log(alunos[0]);

// Lista vazia (array)
const notas = [];

// Adicionar itens na lista
notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);
notas.push('10');

console.log(notas);

// Somar todas as posições do índice
const soma = notas[0] + notas[1] + notas[3];

console.log(`Soma: ${soma}`);
console.log(`Qtde. notas cadastradas: ${notas.length}`);

// Média da soma
const media = soma / notas.length;
console.log(`Média: ${media}`);


function  cadastarItem(){
    const numero=parseFloat(document.getElementById('valor').value);
    notas.push(numero);
    console.log(notas);

    let qtdeNotas=notas.length;

    //Calcula a soma das notas registradas

    let soma=0;
    for (let i = 0; i < qtdeNotas; i++) {
        soma += notas[i];
    }
    console.log('Qtde de notas:${notas.length}'); 
    //Calcula a media com base no numero cadastradas
    let media=soma/qtdeNotas;
    console.log(`Soma: ${soma}`);
    console.log(`Média Calculada: ${media}`);


}


function excluirItem(){
    
}


document.getElementById('btnTeste')

const btnTeste=document.getElementById('btnTeste');

// addEventListener('click',function(){
//     console.log('clicou');
// });

btnTeste.addEventListener('click',function(){
    console.log('clicou no botão');
});


const nome='SENAI';

