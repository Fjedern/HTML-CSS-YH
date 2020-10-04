function popuponclick() {
    my_window = window.open("https://www.tomshardware.com/reviews/pixio-pxc273-curved-gaming-monitor-review", "mywindow","status=1,width=350,height=150,top=200,left=200");
    sleep(1000);
    close();
}

function close() {
    if(false == my_window.closed) {
        my_window.close ();
    }
    else {
        alert('Window already closed!');
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }