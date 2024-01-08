const turistName = prompt("Qual o seu nome?")
let cities = ""
let count = 0

let traveled = prompt("Já viajou para alguma cidade? (Sim/Não)")

while(traveled === "Sim"){
    let city = prompt("Qual cidade você visitou?")
    cities += " - " + city + "\n"
    count++;
    traveled = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert("Turista: " + turistName + "\n" +
    "Quantidade de cidades visitadas: " + count +
    "Cidades visitadas: \n" + cities + "\n"
)