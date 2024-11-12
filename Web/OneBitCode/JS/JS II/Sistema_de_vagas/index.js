let menu = ""
let listOfJobs = []

// Returns the candidate name
function askNameCandidate(){
    let name = prompt("Qual o nome do candidato?")

    return name
}

// Returns the job index
function askIndexJob(){
   let index
   let indexNum
   
    do{
        index = prompt("Qual o índice da vaga?")
        indexNum = parseFloat(index)

        if(isNaN(indexNum)){
        alert("Por favor insira outro index")
        }
    }while(isNaN(indexNum))

    return indexNum
}


// Subscribes a candidate to a job
function subscribeCandidate(listOfJobs, index){
    listOfJobs[index].candidateName += askNameCandidate() + "\n"
    listOfJobs[index].numOfCandidates++
    alert("Candidato inscrito!")
}

// Deletes a Job 
function deleteJob(listOfJobs, index){
    listOfJobs.splice(index, 1)
    alert("Vaga deletada!")
}

// Sums the total of candadidates subscribed in all the jobs
function sumOfCandidates(listOfJobs){
    let sum = 0
    for (let i = 0; i < listOfJobs.length; i++){
        sum += listOfJobs[i].numOfCandidates
        //alert("valor da soma: " + sum)
    }

    return sum
}

// Display the list of jobs available
function displayListOfJobs(listOfJobs){
    let displayText = ""
    for(let i = 0; i < listOfJobs.length; i++){
        displayText += 
        i + ". " + listOfJobs[i].jobName + " ( " + listOfJobs[i].numOfCandidates + " candidatos)\n"
    }
    displayText += "Total de candidatos: " + sumOfCandidates(listOfJobs) + "\n"

    return displayText
}

// Display the name of the candidates to the job required
function readCandidateNames(listOfJobs, index){
    let text 
    text += "-" + listOfJobs[index].candidateName + "\n"

    return text
}

// Display informations about a job
function displayJob(listOfJobs){
    let displayTexJob = ""
    for(let i = 0; i < listOfJobs.length; i++){
        displayTexJob +=
        "Vaga nº " + i + "\n" + 
        "Nome: " + listOfJobs[i].jobName + "\n" + 
        "Descrição: " + listOfJobs[i].description + "\n" + 
        "Data limite: " + listOfJobs[i].deadline + "\n" +
        "Quantidade de cadidatos: " + listOfJobs[i].numOfCandidates + "\n" + 
        "Nome dos candidatos: \n" + readCandidateNames(listOfJobs, i)
    }

    return displayTexJob
}

do{
    menu = prompt("Selecione a ação desejada: " +
        "\n 1. Listar vagas disponíveis" + 
        "\n 2. Criar nova vaga" + 
        "\n 3. Visualizar uma vaga" + 
        "\n 4. Inscrever um candidato em uma vaga" + 
        "\n 5. Excluir uma vaga" + 
        "\n 6. Sair"
    )
    
    switch(menu){
    case "1":
        console.log(listOfJobs)
        if(listOfJobs.length > 0){
            alert(displayListOfJobs(listOfJobs))
            
            break
        }
        else{
            alert("Não há vagas no momento")
            break
        }
        
    case "2":
        let job = {}
            job.jobName = prompt("Qual o nome da vaga concorrida?")
            job.description = prompt("Qual a descrição da vaga?")
            job.deadline = prompt("Qual a data limite para inscrição?")
            job.numOfCandidates = 0
            job.candidateName = ""
                
            const confirmation = confirm(
                "Você confirma as informações da vaga abaixo?" + 
                "\nNome: " + job.jobName + 
                "\nDescrição: " + job.description + 
                "\nData limite: " + job.deadline 
            )

            if(confirmation){
                listOfJobs.push(job)
                console.log(job)
                break
            }
            break
    case "3":
        alert(displayJob(listOfJobs))
        break
    case "4":
        let indexJob = askIndexJob()
        
        const candidateConfirmation = confirm(
            "Tem certeza que deseja cadastrar a vaga " + indexJob + "?" + 
            "\nNome: " + listOfJobs[indexJob].jobName + 
            "\nDescrição: " + listOfJobs[indexJob].description + 
            "\nData limite: " + listOfJobs[indexJob].deadline
        )
        //const candidateConfirmation = confirmation(listOfJobs, indexJob)

        if(candidateConfirmation){
            subscribeCandidate(listOfJobs, indexJob)           
        }
        break

    case "5":
        let indexJobDelete = askIndexJob()
        
        const deleteConfirmation = confirm(
            "Tem certeza que deseja excluir a vaga " + indexJobDelete + "?" + 
            "\nNome: " + listOfJobs[indexJobDelete].jobName + 
            "\nDescrição: " + listOfJobs[indexJobDelete].description + 
            "\nData limite: " + listOfJobs[indexJobDelete].deadline
        )
        //const deleteConfirmation = confirmation(listOfJobs, indexJobDelete)
        
        if(deleteConfirmation){
            deleteJob(listOfJobs, indexJobDelete)
        }
        break
    case "6":
        alert("Encerrando programa")
        break
}
}while (menu !== "6")

