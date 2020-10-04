function funktionEX() {
    if (confirm("Tryck på OK!")){
        alert("Tack!");
    }
    else {
        alert("FEL!");
    }
}

function hypotenuse(a, b){
    function square(x) {
        return x*x;
    }
    return Math.sqrt(square(a) + square(b));
}

function getHyp() {
    var first = prompt("Please enter a number");
    var second = prompt("Please enter a SECOND number");
    var svar = hypotenuse(first, second);
    alert(svar);
}