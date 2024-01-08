const wordGiven = prompt("Olá! Digite uma palavra para descobrir se ela é ou não um palíndromo.")
let wordBackwards = ""

for(let i = wordGiven.length - 1; i >= 0; i--){
    wordBackwards += wordGiven[i]
}

if (wordGiven === wordBackwards){
    alert("Esta palavra é um palíndromo")
}
else{
    alert("Esta palavra não é um palíndromo\n\n" + 
    wordGiven + " !== " + wordBackwards)
}