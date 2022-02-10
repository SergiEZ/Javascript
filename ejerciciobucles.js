/*
//a) contar del 1 al 10
let i;
for (i = 1; i <= 10; i++) 
    console.log(i);

//b) al 100
for (i = 1; i <= 100; i++) 
    console.log(i);

//c) del 10 al 1
for (i = 10; i >= 1; i--) 
    console.log(i);

//d) del 100 al 1
for (i = 100; i >= 1; i--) 
    console.log(i);

//e) del 120 al 1220 de 2 en 2

for (i = 120; i <= 1220; i+= 2)
    console.log(i);

//while ditto
i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
i = 100;
while (i >= 1) {
    console.log(i);
    i--;
}
i = 120;
while (i <= 1220) {
    console.log(i);
    i+=2;
}

//FOR y WHILE
//contador de 1 a rand entre 1 y 100
let rand = Math.ceil(Math.random()*100);
for(i = 0; i < rand; i++)
    console.log(i);

i = 0;
while( i < rand){
    i++;
    console.log(i);
}
//contador de rand entre 1 y 100 a 1
/*
rand = Math.ceil(Math.random()*100);
for(i = 1; i > rand; i++)

i = 0;
while( i < rand){
    i++;
    console.log(i);
}
//bucles anteriors pars divisibles entre 3
const rand = Math.ceil(Math.random()*100);
for(let i = 1; i <= rand; i++){
    if(i % 2 == 0 && i % 3 == 0) console.log(i);
}

i = 1;
while(i <= rand){
    if(i % 2 == 0 && i % 3 == 0) console.log(i);
    i++;
}
*/

//a) contar del 1 al 10
let i = 1;
do {
    console.log(i);
    i++;
} while (i < 10)

//b) al 100
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10)

//c) del 10 al 1
i = 10;
do{
    console.log(i);
    i--;
}while(i > 0)

//d) del 100 al 1
i = 100;
do{
    console.log(i);
    i--;
}while(i > 0)

//e) del 120 al 1220 de 2 en 2
i = 120;
do{
    console.log(i);
    i += 2;
}while (i <= 1220)
