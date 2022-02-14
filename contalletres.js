const TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const LETTER = "a";
let counter = 0;

for(let i = 0; i < TEXT.length; i++){
    if(TEXT[i] == LETTER) counter++;
}
console.log(counter);

const REPLACEMENT = LETTER.toUpperCase();
let new_text = TEXT;

for(let i = 0; i < TEXT.length; i++){
    if(TEXT[i] == LETTER) new_text[i] = REPLACEMENT; //No funciona en JS
}
//How it actually works:
//newtext = new_text.replace(LETTER, REPLACEMENT);
console.log(`Reemplazando ${LETTER} por ${REPLACEMENT}: `);

console.log(new_text);