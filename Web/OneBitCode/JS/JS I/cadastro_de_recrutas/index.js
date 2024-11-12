const firstName = prompt("Informe o primeiro nome do recruta")
const sureName = prompt("Informe o sobrenome do recruta")
const studyField = prompt("Informe o campo de estudo do recruta")
const bday = prompt("Informe o ano de nascimento do recruta")

alert(
    "Recruta cadastrado com sucesso!\n" + " " +
    "\n Nome completo " + firstName + " " + sureName + 
    "\n Campo de estudo " + studyField + 
    "\n Idade " + (2023 - bday)
)