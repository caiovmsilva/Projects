function addPlayer(){
    const teamList = document.getElementById('teamList')

    const nameValue = document.getElementById('name').value
    const positionValue = document.getElementById('position').value
    const numberValue = document.getElementById('number').value

    const confirmation = confirm("Escalar " + nameValue + " como " + positionValue + "?")

    if(confirmation){
    const playerInfo = document.createElement('li')
    playerInfo.id = 'player-' + numberValue
    playerInfo.innerText = positionValue + ": " + nameValue + "( " + numberValue + ")"
    teamList.appendChild(playerInfo)  

    document.getElementById('name').value = ''
    document.getElementById('position').value = ''
    document.getElementById('number').value = ''
    }
}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + '?')

    if(confirmation){
    //document.getElementById('teamList').removeChild(playerToRemove) 
    playerToRemove.remove() //removes the node directly from the DOM 
    document.getElementById('numberToRemove').value = ''    

    }

}

