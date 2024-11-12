function createLabel(text, htmlfor){
    const label = document.createElement('label')
    label.htmlFor = htmlfor
    label.innerText = text

    return label
}

function createInput(id, value, name, type, placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder

    return input
}


const addTechBtn = document.getElementById('eventButton')
const form = document.getElementById('registerForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev){
    ev.preventDefault()
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel("Nome: ",'techName' + rowIndex )
    const techNameInput = createInput('techName' + rowIndex, null, 'techName', 'text')

    const expLabel = createLabel("Experiência: ")
    //Using rowIndex in order to differ between inputs (if all have the same name, it'd have just one option per stack
    //and not one per row as it is now)
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'expTech-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'expTech-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)

    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'expTech-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)

    const removeRowButton = document.createElement('button')
    removeRowButton.type = 'button'
    removeRowButton.id = 'removeButton'
    removeRowButton.innerText = 'Remover '
    removeRowButton.addEventListener('submit', function(ev){
        ev.preventDefault()

        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput, expLabel,
        expRadio1, expLabel1, 
        expRadio2, expLabel2,
        expRadio3, expLabel3,
        removeRowButton
    )

    stackInputs.appendChild(newRow)
})

// Save developers' information into an array and shows it on console
form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []

    inputRows.forEach(function(row){
        // #rowId input[name="techName"] -> search int the row if rowId and look at its input
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

        technologies.push({name: techName, exp: techExp})
    })

    const newDev = { fullname: fullnameInput.value, technologies: technologies}

    developers.push(newDev)
    alert("Dev cadastrado com sucesso!")

    fullnameInput.value = ''

    inputRows.forEach(function(row){
        row.remove()
    })

    console.log(developers)
})



// .addEventListener('click', function(ev){

// })