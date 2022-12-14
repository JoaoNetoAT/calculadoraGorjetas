function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQuality < 0){
        alert("Por favor, preencha todos os campos")
        return;
    }

    if(serviceQuality == '0'){
        alert("O Serviço foi Péssimo - Não merece Gorjetas")
        return;
    }

    if(numOfPeople == "" | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQuality);
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";

    let totalPessoa = ((bill * serviceQuality) /numOfPeople) + (bill / numOfPeople);
    totalPessoa = totalPessoa.toFixed(2);
    document.getElementById('tip2').innerHTML = totalPessoa;
    document.getElementById('totalPeople').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('totalPeople').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
