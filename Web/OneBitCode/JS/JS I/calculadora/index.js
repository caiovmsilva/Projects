const entry1 = prompt("Insira um número")
const entry2 = prompt("Insira outro número")

const num1 = parseFloat(entry1)
const num2 = parseFloat(entry2)

const sum = num1 + num2
const subtraction = num1 - num2
const multiplication = num1 * num2
const division = num1 / num2



alert(
    "Resultados:\n" + 
    "\nSoma: " + sum +
    "\nSubtração: " + subtraction +
    "\nMultiplicação: " + multiplication + 
    "\nDivisão: " + division
)