let num = prompt("Informe o número para receber a tabuada: ")
num = parseFloat(num)
let results = ""
let times = 0

for (let n = 1; n < 21; n++){
    times = n * num 
    results += " - " + n + " x " + num + " = " + times + "\n"
}

alert("Tabuada do " + num + ": " + "\n" + results)