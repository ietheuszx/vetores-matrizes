/*
Questão 7: Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é
simétrica em relação à sua diagonal principal.
*/

let tresXTres = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let soma = 0;

for(let i = 0; i < tresXTres.length; i++) {
    for(let j = 0; j < tresXTres[i].length; j++) {
       soma += tresXTres[i][j]
    }    
        
    console.log(soma);
}


