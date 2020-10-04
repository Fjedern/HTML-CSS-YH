var myInter;
var x = 600;

var deltaX = 50;
var docWidth = $(document).width;

 
function Go() {
    myInter = setInterval(moveRec, 40);
}

function moveRec() {
    if (x < 600 || x > 1200) {
        deltaX = -deltaX
    }

    x += deltaX;
    document.getElementById("myBox").style.left = x + "px";
}

function backColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function stanna() {
    clearInterval(myInter);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function date() {
    var date = new Date();
    alert(date);
}

