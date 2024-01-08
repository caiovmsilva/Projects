const value_meter = parseFloat(prompt("Escreva um valor em metro para ser convertido"))
const mesure = prompt("Escolha uma unidade de medida para conversão\n"
    + "1.milímetro\n" + 
    "2.centímetro\n" + "3.decímetro\n" 
    + "4.decâmetro\n" + "5.hectômetro\n" + 
    "6.quilômetro")
let value_change = value_meter;

    switch(mesure){
        case "1":
            value_change = value_meter * 1000;
            alert(value_meter + " m --> " + value_change + " mm")
            break;
        case "2":
            value_change = value_meter * 100;
            alert(value_meter + " m --> " + value_change + " cm")
            break;
        case 3:
            value_change = value_meter * 10;
            alert(value_meter + " m --> " + value_change + " dm")
            break;
        case 4:
            value_change = value_meter / 10;
            alert(value_meter + " m --> " + value_change + " dam")
            break;
        case 5:
            value_change = value_meter / 100;
            alert(value_meter + " m --> " + value_change + " hm")
            break;
        case 6:
            value_change = value_meter / 1000;
            alert(value_meter + " m --> " + value_change + " km")
            break;
        default:
            alert("Opção inválida.")
    }