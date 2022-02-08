let N = "N";
let B = "B";
for(let i = 0; i < 8; i++){

    for(let j = 0; j < 8; j++){
        if (j % 2 === 0) process.stdout.write(B + "\t");
        else process.stdout.write(N + "\t");
    }
    console.log("\n");
    if (B === "B") {B = "N"; N = "B";}
    else {B = "B"; N = "N";}
   /* for(let j = 0; j < 8; j++){
        if (j % 2 === 0) process.stdout.write(N + "\t");
        else process.stdout.write(B + "\t");
    }
    console.log("\n");*/
}