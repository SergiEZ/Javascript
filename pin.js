const rl = require("readline-sync");
let intentos = 3;
const PIN = "1234";
do{
    console.log(`Tienes ${intentos} intento(s).`);
    let usuario = rl.question("Introduce el pin: ");
    if(PIN != usuario) console.log (`El pin no es correcto`);
    else break;
    intentos--;
}while(intentos > 0)

if(intentos == 0) console.log("Cagaste, no te quedan intentos.");
else console.log("Pin correcto, ya te puedes ir.")