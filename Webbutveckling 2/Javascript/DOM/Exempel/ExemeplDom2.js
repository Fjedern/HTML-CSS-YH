var backColor = "Salmon";

function enterItem() {
    var node = document.createElement("li");
    var textNode = document.createTextNode(document.getElementById("tex").value);
    node.appendChild(textNode);
    node.style.background = backColor;
    document.getElementById("res").appendChild(node);

}