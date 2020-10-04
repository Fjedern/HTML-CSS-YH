function getHyp() {
    var first = prompt("Please enter a number");
    var second = prompt("Please enter a second number");
    var svar = hypotenuse(first, second);
    alert(svar);
}

function hypotenuse(a,b) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(x)  + square(b));
}