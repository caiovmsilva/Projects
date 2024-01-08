let balance = parseFloat(prompt("Qual a quantia de valor inicial?"))
let option = ""

do {
    option = prompt(
        "Saldo disponível: R$ " + balance +
        "\n1. Adicionar dinheiro" + 
        "\n2. Remover dinheiro" + 
        "\n3. Sair"
    )

    switch (option){
        case "1":
            balance += parseFloat(prompt("Valor a ser adicionado: "))
            // é preciso usar o parseFloat pq o JS pode confundir o valor passado pelo
            // prompt e o += como um sinal de concatenação e não de soma
            break
        case "2":
            balance -= prompt("Valor a ser removido: ")
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Entrada inválida")
    }

}while (option !== "3")