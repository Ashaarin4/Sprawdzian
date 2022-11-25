function funkcja(){
    var liczba = document.getElementById("liczba").value;
    var wynik = 0;
    var modulo = "";
    var binarna="";


    while(liczba>0){
        modulo=liczba%2
        wynik=wynik+modulo
        liczba=Math.floot(liczba/2)
    }

    binarna=wynik;
    
    document.getElementById("wynik").value=wynik;

}

