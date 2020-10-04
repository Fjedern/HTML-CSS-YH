function enterItem()
{
    var node = document.createElement("LI");                
    var textnode = document.createTextNode(document.getElementById("tex").value);        
    node.appendChild(textnode);  
    node.style.background="#ff0000 repeat-y";
    document.getElementById("res").appendChild(node); 
}