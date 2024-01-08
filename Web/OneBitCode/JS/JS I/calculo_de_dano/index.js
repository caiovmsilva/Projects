const character_name = prompt("Qual o nome do seu personagem?")
const pwr = prompt("Poder de ataque")
const opponent_name = prompt("Qual o nome do seu oponente?")
const hp = prompt("Pontos de vida do oponente")
const dp = prompt("Pontos de defesa do oponente")
const shield = prompt("Escudo")

const power = parseFloat(pwr)
let health = parseFloat(hp)
const defense = parseFloat(dp)
let shield_on = true
let damage = 0

if (shield !== "true"){
    shield_on = false;
}

if ((power > defense) && !shield_on) {
    damage = power - defense;
}
else if((power > defense) && shield_on) {
    damage = (power - defense) / 2;
}
else{
    damage = 0;
}

health = health - damage;


alert("Quantidade de dano recebido: " + damage + 
    "\nAtacante: " + character_name +
    "\nPoder de ataque: " + power + 
    "\nDefensor: " + opponent_name +
    "\nPontos de vida: " + health + 
    "\nDefesa: " + defense + 
    "\nEscudo: " + shield
)