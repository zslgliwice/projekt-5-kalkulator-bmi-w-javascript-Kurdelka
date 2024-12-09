function oblicz(){
    var masa = parseInt(document.getElementById("masa").value);
    var wzrost = parseInt(document.getElementById("wzrost").value);
    var wynik = document.getElementById("wynik");

    var kg = document.getElementById('kg');
    var lbs = document.getElementById('lbs');

    //sprawdzenie czy została wprowadzona prawidłowa wartość mazy i wzrostu
    if(masa > 0 && wzrost > 0){
    
    //sprawdzenie w jakich jednostkach ma sie odbyć obliczenie
    if(kg.checked == true){  
        //wykonanie obliczenia BMI
        var m = wzrost / 100;
        var b = masa / (m*m);

        var BMI = (zaokraglij(b));
        

    }else if(lbs.checked ==true){
        //wykonanie obliczenia BMI
        var m = masa * 703;
        var b = m / (wzrost*wzrost);

        var BMI = (zaokraglij(b));
    }else{
        wynik.innerHTML = "Nie podano jednostek";
    } 

    //Wypisanie BMI 
    if(BMI < 18.5){
        wynik.innerHTML = "Twoje BMI wynosi: " + BMI + ". Masz niedowagę!";
    }else if(BMI < 24.9){
        wynik.innerHTML = "Twoje BMI wynosi: " + BMI + ". Masz wagę prawidłową!";
    }else if(BMI < 29.9){
        wynik.innerHTML = "Twoje BMI wynosi: " + BMI + ". Masz nadwagę!";
    }else if(BMI > 30){
        wynik.innerHTML = "Twoje BMI wynosi: " + BMI + ". Jesteś Otyły!";
    }

    }else{
        wynik.innerHTML = "Podaj prawidłowe wartości!";
    }
}
//funkcja zaokrąglająca do 2 liczb po przecinku
function zaokraglij(num) {
    return Math.round(num * 100) / 100;
  }