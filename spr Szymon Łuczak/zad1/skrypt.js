function funkcja(){
    var a1 = document.getElementById("a1").value;
    var an = document.getElementById("an").value;
    var n = document.getElementById("n").value;
    var wynik = 0;

    wynik = (an-a1)/(n-1);
    document.getElementById("wynik").value=wynik;
}