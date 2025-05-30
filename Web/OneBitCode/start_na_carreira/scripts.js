function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numofPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0){
        alert("Por favor, preencha os valores")
        event.Default;
    }
    
    if(numofPeople == '' | numofPeople <= 1){
        numofPeople = 1;
        document.getElementById('each').style.display = 'none';
    }
    else{
        document.getElementById('each').style.display = 'block';
    }

    let total = (bill * serviceQual) / numofPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    if(bill != '' | serviceQual != 0){
    document.getElementById('totaltip').style.display = 'block';
    }
}

document.getElementById('totaltip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsform').addEventListener('submit', calculateTip);