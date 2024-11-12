let menu = ""

function rectangularArea(a, b){
    return (a * b)
}

function triangularArea(a, b){
    return (rectangularArea(a, b) / 2)
}

function squareArea(a){
    return (rectangularArea(a, a))
}

function trapezoidArea(largerBase, smallerBase, height){
    return ((largerBase + smallerBase)*height / 2)
}

function circleArea(radius){
    const pi = 3.14
    return (pi * radius*radius)
}

function chooseArea(menu){
    switch (menu){
        case "1":
            const triangularBase = prompt("Qual a base do triângulo?")
            const triangularHeight = prompt("Qual a altura do triângulo?")
            alert("Essa é a área do triângulo desejado: " + triangularArea(triangularBase, triangularHeight))
            break

        case "2":
            const rectangularBase = prompt("Qual a base do retângulo?")
            const rectangularHeight = prompt("Qual a altura do retângulo?")
            alert("Essa é a área do retângulo desejado: " + rectangularArea(rectangularBase, rectangularHeight))
            break
        
        case "3":
            const squareSide = prompt("Qual o lado do quadrado?")
            alert("Essa é a área do quadrado desejado: " + squareArea(squareSide))
            break
        
        case "4":
            const largerBase = parseFloat.prompt("Qual o valor da base maior do trapézio?")
            const smallerBase = parseFloat.prompt("Qual o valor da base menor do trapézio?")
            const trapezoidHeight = prompt("Qual a altura do trapézio?")
            alert("Essa é a área do trapézio: " + trapezoidArea(largerBase, smallerBase, trapezoidHeight))
            break

        case "5":
            const radius = prompt("Qual o valor do raio do círculo?")
            alert("Essa é a área do círculo: " + circleArea(radius)) 
            break
        
        case "6":
            alert("Saindo...")
            break
        
        default:
            alert("Opção inválida")
            break
    }

}

function showMenu(){
    return menu = prompt(
        "Calculadora Geométrica" + "\n" + 
        "Escolha uma área para ser calculada!" + "\n\n" + 
        "1. Área do triângulo\n" + 
        "2. Área do retângulo\n" + 
        "3. Área do quadrado\n" + 
        "4. Área do trapézio\n" + 
        "5. Área do círculo\n" + 
        "6. Sair"
    )
}

do{
   menu = showMenu()
    
    chooseArea(menu)

}while (menu !== "6")