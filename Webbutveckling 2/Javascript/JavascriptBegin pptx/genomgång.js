var elem;

function getAllElements() {
    elem = document.getElementsByTagName("*");
}

function returnAttribute(at) {
    var res = [];
    for (var i = 0; i<elem.length; i++){
        if(elem[i].getAttribute(at)){
            res.push(elem[i].getAttribute(at));
        }
    }
    return res;
}

function getResult() {
    getAllElements();
    var ids = returnAttribute("id");
    document.write("<b>" + ids + "</b>");
}

