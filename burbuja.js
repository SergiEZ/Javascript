let vector = [73,10,94,46,74,63,12,18,3,68];
let modified;
let aux;
console.log(vector);
do {
    modified = false;
    for(let i = 0; i < vector.length-1; i++){
        if(vector[i] > vector[i+1]) {
            modified = true;
            aux = vector[i];
            vector[i] = vector[i+1];
            vector[i+1] = aux;
        }
    }
}while(modified)
console.log(vector);