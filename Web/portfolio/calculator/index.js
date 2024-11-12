const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//it allows choosing keys from calculator by clicking
document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
    charKeyBtn.addEventListener("click", function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById("clear").addEventListener("click", function(){
    input.value = ""
    input.focus()
})

input.addEventListener("keydown", function(ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if (ev.key === "Backspace"){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter"){
        calculate()
    }
})

document.getElementById("equal").addEventListener("click", calculate)

function calculate(){
    resultInput.value = "ERROR"
    //adds "error" to results class list
    resultInput.classList.add("error")
    //eval executes js code passed (it can be harmful because it allows execution of any js code)
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}

document.getElementById("copyToClipboard").addEventListener("click", function(ev){
    //change status of "copy" button
    const button = ev.currentTarget
    if (button.innerText === "Copy"){
        button.innerText = "Copied!"
        button.classList.add("success")
        navigator.clipboard.writeText(resultInput.value)
    } else{
        button.innerText = "Copy"
        button.classList.remove("success")
    }
})

document.getElementById("themeSwitcher").addEventListener("click", function(){
    if (main.dataset.theme === "dark"){
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
    }
    else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
    }
})