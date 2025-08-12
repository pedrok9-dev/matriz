let mat = []


function gerarAleatorio(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

function iniciarMatriz2 (){
    mat = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]]

           return mat
}

function somarElementosMatriz(){
    let soma = 0
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            soma += mat[i][j]
        }
    }

    return soma
}

function iniciarMatriz(){
    for(let i = 0; i < 3; i++){
        mat[i] = []
        for(let j = 0; j < 3; j++){
            mat[i][j] = gerarAleatorio(1,10)
        }
    }
    console.table(mat)
    console.log('---------')
}

function principal(){
    iniciarMatriz2()
    console.table(mat)
    console.log('---------')
    let resultado = somarElementosMatriz()
    console.log(`A soma da matriz é: ${resultado}`)
}

principal()