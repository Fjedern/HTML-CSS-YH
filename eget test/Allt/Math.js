function math1() {
    var heltal = prompt("Skriv in ett nummer", "");
    document.getElementById("Text").innerHTML = "Nummer: " + heltal;
    document.getElementById("Text2").innerHTML = "log10: " + Math.log10(heltal);
    document.getElementById("Text2").innerHTML = "square: " + Math.log10(heltal);
}