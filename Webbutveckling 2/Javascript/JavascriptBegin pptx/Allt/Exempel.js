function  Alert() {
    alert("Hej");
}

function Prompt() {
    var gathered = prompt("Skriv något");
    document.getElementById("Svar1") = "Ananas" + " " + gathered;
}

function goToWeb() {
    window.open("http://www.google.com", "fonstrets_namn", "width=200,height=200,left=200,top=200");
}

function number() {
    var tal = document.getElementById("myNumber").value/0;
    alert(tal);
}