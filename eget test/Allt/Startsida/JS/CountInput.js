var i;
function count() {
    var max = document.getElementById("inputField2");
    for (i = 0; i < max; i++){
        document.getElementById('inputField2').value = i;
    }
}

// setInterval(test(), 100);