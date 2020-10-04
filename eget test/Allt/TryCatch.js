function factorial(x) {
    // om input argument är invalid , kasta en undantag!  if (x < 0) throw new Error("x must not be negative");
    // Annars , beräkna värde och returnera det
    var f=1;
    for(; x > 1; f *= x, x--) /* empty */ ;  return f;
}

function inmatningFakultet() {
    try {
        // Begära att användare mata in ett heltal
        var n = Number(prompt("Please enter a positive integer", ""));
        // Beräkna fakultet om inmatning är valid  var f = factorial(n);
        // Visa resultat  alert(n + "! = " + f);
    }
    
    catch (ex) { // om inmatning är inte valid då denna del exekveras  alert(ex); // säger vad felet är
    }
}
    