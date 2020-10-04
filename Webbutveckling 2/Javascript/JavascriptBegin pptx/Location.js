function ananas() {
    var a = location;
    var b = location.href;
    var c = location.pathname;
    var d = location.protocol;
    // document.writeln(a + "<br>" + b);
    // document.writeln(b);
    // document.writeln(c);
    // document.writeln(d);
    document.getElementById("fis").innerHTML = "File:" + b;
    document.getElementById("apa").innerHTML = "Pathname:" + c;
    document.getElementById("tre").innerHTML = "Protocol:" + d;
}

function test() {
    alert("Det funkar");
}