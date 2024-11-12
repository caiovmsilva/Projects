let menu = ""
let pack = []

do{
    let cards = ""

    for (let i = 0; i < pack.length; i++){
        cards += "-> " + pack[i] + "\n"
    }

    menu = prompt(
        "Nº de cartas no baralho: " + pack.length + 
        "\nCartas atuais do baralho: \n" + 
        cards + 
        "\n" + 
        "1. Adicionar uma carta\n" + 
        "2. Puxar uma carta\n" + 
        "3. Sair\n"
        )
    
    switch (menu){
        case "1":
            const newCard = prompt("Qual o nome da nova carta?")
            pack.push(newCard)
            break
        case "2":
            const pulledCard = pack.pop()
            if(!pulledCard){
                alert("Não há carta no baralho")
            }
            else{
                alert("Carda puxada: " + pulledCard)
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Entrada inválida")
            break
    }
}while(menu !== "3")