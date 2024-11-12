let menu = ""
let property = {
    nameOnwer: "",
    numberOfRooms: "",
    numberOfBathrooms: "",
    isThereGarage: ""
}
let listOfProperties = []

do{
    let propertiesSaved = ""

    for(let i = 0; i < listOfProperties.length; i++){
        propertiesSaved += " - Propriedade " + (i + 1) + "\n" +
        "   -> " + "Nome do proprietário: " + listOfProperties[i].nameOnwer + 
        "\n" + 
        "   -> " + "Número de quartos: " + listOfProperties[i].numberOfRooms + 
        "\n" + 
        "   -> " + "Número de banheiros: " + listOfProperties[i].numberOfBathrooms +
        "\n" +
        "   -> " + "Possui garagem? " + listOfProperties[i].isThereGarage + 
        "\n" 
    }

    menu = prompt(
        "Cadastro de Imóveis" + "\n\n" + 
        "Quantidade de Imóveis: " + listOfProperties.length +
        "\n" + 
        "1. Cadastrar novo imóvel \n" + 
        "2. Mostrar imóveis salvos \n" + 
        "3. Sair"
    )

    switch (menu){
        case "1":
            property.nameOnwer = prompt("Qual o nome do proprietário?")
            property.numberOfRooms = prompt("Qual o número de quartos?")
            property.numberOfBathrooms = prompt("Qual o número de banheiros?")
            property.isThereGarage = prompt("O imóvel possui garagem?(Sim/Não)")
            const confirmation = confirm(
                "Salvar este imóvel?\n" + 
                "\nProprietário " + property.nameOnwer + 
                "\nQuartos: " + property.numberOfRooms + 
                "\nBanheiros: " + property.numberOfBathrooms + 
                "\nPossui garagem? " + property.isThereGarage
            )
            if (confirmation){
            listOfProperties.push(property)
            alert("Imóvel salvo com sucesso!")
            }
            break
        case "2":
            alert(propertiesSaved)
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Entrada inválida")
            break
    }
}while (menu !== "3")