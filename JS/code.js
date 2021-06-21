function calculate_imc() {
    var peso=document.getElementById("form_peso").value;
    var altura=document.getElementById("form_altura").value/100;
    var imc = peso/(altura*altura);
    var categoria;
    if(imc<18.5){
        categoria = "Bajo de Peso";
    }
    if(18.5<imc && imc<=25){
        categoria = "Peso normal";
    }
    if(25<imc && imc<30){
        categoria = "Sobrepeso";
    }
    if(30<=imc && imc<=34.9 ){
        categoria = "Obesidad Grado I";
    }
    if(34.9<imc && imc<=39.9 ){
        categoria = "Obesidad Grado II";
    }
    if(39.9<imc){
        categoria = "Obesidad Grado III";
    }
    imc = parseFloat(imc.toFixed(2));
    var inter1 = (altura*altura*18.5).toFixed(2);
    var inter2 = (altura*altura*24.9).toFixed(2);
    document.getElementById("salida_resultados").innerHTML =
    "<p>LOS RESULTADOS SON:" +
    "<p>Peso: "+peso+" kg</p>" +
    "<p>Altura: "+altura+" mts</p>"+
    "<p>Su IMC es <b>"+imc+"</b>,lo que indica que su peso está en la categoría de <b>"+categoria+"</b> para adultos de su misma estatura.</p>" +
    "<p>Para su estatura, un peso normal variaría entre "+inter1+" a "+inter2+" kilogramos.</p>";
    document.getElementById("form_peso").value = "";
    document.getElementById("form_altura").value = "";
}