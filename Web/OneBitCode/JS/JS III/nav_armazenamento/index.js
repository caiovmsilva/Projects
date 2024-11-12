document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function(){
    info = sessionStorage.getItem('info')
    alert("A informação salva é: " + info)
})