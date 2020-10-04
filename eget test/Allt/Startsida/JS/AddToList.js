var backColor = "Red";

var node;
var textNode;
var nodeCounter = 0;

function enterItem() {
    nodeCounter++;
    if(nodeCounter < 6) {
        node = document.createElement("li");
        textNode = document.createTextNode(document.getElementById("inputField1").value);
        node.appendChild(textNode);
        // node.style.background = backColor;
        document.getElementById("ulList").appendChild(node);
    }
}


function removelastItem(){
    var node = document.getElementById("ulList");
    if(node.childElementCount>0){
        node.removeChild(node.lastChild);
        nodeCounter--;
    }
        
}

function removeItemNr(){
    var node = document.getElementById("ulList");
    var nr = parseInt(document.getElementById("nr").value);
    if(nr>=0 && nr<node.childNodes.length){
        node.removeChild(node.childNodes[nr]);
    }
        
}