  var myInter;
  var x = 10;
  //var y = 10;
  var deltaX = 50;
//   var docWidth = $(document).width;
  

  function goInt() {
    //myInter = setInterval(backColor, 200);
    myInter2 = setInterval(moveRec, 50);
  }

  function moveRec(){
    if(x < 0 || x > 1000) {
      deltaX = -deltaX;
    }
    x += deltaX;
    //y+=5;
    document.getElementById("myBox").style.left = x + "px";
    //document.getElementById("myBox").style.top = y + "px";
    //console.log(x);
  }

  function backColor(){
    document.body.style.backgroundColor = getRandomColor();
  }


  function clInt() {
    clearInterval(myInter);
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
