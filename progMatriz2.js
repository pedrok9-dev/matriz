let mat = []

for(let i = 0; i < 5; i++){
    mat[i] = []
    for(let j = 0; j < 5; j++){
        if(i === j){
            mat[i][j] = 1 
        }else{
            mat[i][j] = 0
        }
    }
}

console.table(mat)
console.log('-----------------')