
let queue = []
let menu = ""

do{
    let patients = ""
    for(let i = 0; i < queue.length; i++){
        patients += (i + 1) + "º - " + queue[i] + "\n"
    }

    menu = prompt(
        "Fila de espera para consulta: \n" + patients + 
        "\n" + 
        "1. Novo paciente\n" + 
        "2. Consultar paciente\n" +
        "3. Sair"
    )
    
    switch(menu){
        case "1":
            const newPatient = prompt("Qual o nome do novo paciente?")
            queue.push(newPatient)
            break
        case "2":
            const attendedPatient = queue.shift()
            if(queue.length > 0 ){
                alert("Paciente consultado: " + attendedPatient)
            }
            else{
                alert("Não há pacientes na fila")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Entrada inválida")
            break
    }
}while(menu !== "3")






