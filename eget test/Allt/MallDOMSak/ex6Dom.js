function enterItem(){
    var node = document.createElement("li");
    var textNode = document.createTextNode(document.getElementById("tex").value);
    node.appendChild(textNode);
    node.style.background="#ff0000";
    document.getElementById("res").appendChild(node);
}


function removelastItem(){
    var node = document.getElementById("res");
    if(node.childElementCount>0)
        node.removeChild(node.lastChild);
}

function removeItemNr(){
    var node = document.getElementById("res");
    var nr = parseInt(document.getElementById("nr").value);
    if(nr>=0 && nr<node.childNodes.length)
        node.removeChild(node.childNodes[nr]);
}