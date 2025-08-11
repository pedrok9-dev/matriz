let mat = [[3,2,1],
            [4,5,6],
            [9,8,7]]

console.table(mat)
console.log('-----------------')

let mat2 = []

for(let i = 0; i < 3; i++){
    mat2[i] = []
    for(let j = 0; j < 3; j++){
        if( i === j){
            mat2[i][j] = 1
        }else{
            mat2[i][j] = 0
        }
    }
}

console.table(mat2)
console.log('-----------------')


let mat3 = []

for(let i = 0; i < 3; i++){
    mat3[i] = []
    for(let j = 0; j < 3; j++){
        if( i % 2 === 1){
            mat3[i][j] = 1
        }else{
            mat3[i][j] = 2
        }
    }
}

console.table(mat3)
console.log('-----------------')