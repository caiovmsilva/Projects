const num1 = prompt("Digite a velocidade do primeiro veículo");
const num2 = prompt("Digite a velocidade do segundo veículo");

const v1 = parseFloat(num1)
const v2 = parseFloat(num2)

if (v1 > v2) {
    alert("O veículo 1 é mais rápido que o veículo 2");
}
else if(v1 === v2){
    alert("O veículo 1 e o veículo 2 tem a mesma velocidade");
}
else{
    alert("O veículo 2 é mais rápido que o veículo 1");
}