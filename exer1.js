let mat = []
let mat2 = []
let mat3 = []

function iniciarMatriz(){
    for(let i = 0; i < 7; i++){
        mat[i] = []
        for(let j = 0; j < 7; j++){
            if(j % 2 === 0){
                mat[i][j] = j
            }else{
                mat[i][j] = 1
            }
        }
    }
    console.table(mat)
    console.log('------------')
}

function iniciarMatriz2(){
    for(let i = 0; i < 7; i++){
        mat2[i] = []
        for(let j = 0; j < 7; j++){
            if(j % 2 === 0){
                mat2[i][j] = 1
            }else{
                mat2[i][j] = j
            }
        }
    }
    console.table(mat2)
    console.log('------------')
}

function somar(){
    for(let i = 0; i < 7; i++){
        mat3[i] = []
        for(let j = 0; j < 7; j++){
            mat3[i][j] = mat[i][j] + mat2[i][j]
        }
    }
}

function principal(){
    iniciarMatriz()
    iniciarMatriz2()
    console.table(mat3)
}

principal()