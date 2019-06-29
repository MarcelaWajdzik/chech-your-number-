function check() {
    var number = document.getElementById('number').value;
    if (number > 0) document.getElementById('text').innerHTML = "dodania";
    else if (number < 0) document.getElementById('text').innerHTML = "ujemna";
    else if (number == "0") document.getElementById('text').innerHTML = "zero";
    else document.getElementById('text').innerHTML = "nieprawidlowa wartosc";
}