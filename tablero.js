const N = "N";
const B = "B";
for(let i = 0; i < 4; i++){

    for(let j = 0; j < 8; j++){
        if (j % 2 === 0) process.stdout.write(B + "\t");
        else process.stdout.write( + "\t");
    }
    console.log("\n");
    for(let j = 0; j < 8; j++){
        if (j % 2 === 0) process.stdout.write(N + "\t");
        else process.stdout.write(B + "\t");
    }
    console.log("\n");
}