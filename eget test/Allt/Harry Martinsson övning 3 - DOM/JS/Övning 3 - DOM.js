// Funktionen next(elem) letar upp (och returnerar) syskon element-noden efter 
//det element som man skickar in som argument
function next(elem) {
    do {
        elem = elem.nextSibling; // Sparar kommande nod i variabeln elem
    } while (elem && elem.nodeType != 1); 
   // Om noden är en element-nod returneras noden. Annars så fortsätter loopen tills vi hittar 
   //ett element-nod eller att det inte finns någon mer nod
    return elem; // Returnerar en ev. element-nod            
}

// Funktionen prev(elem) letar upp (och returnerar) syskon element-noden före det element 
//som man skickar in som argument
function prev(elem) {
    do {
        elem = elem.previousSibling; // Sparar föregående nod i variabeln elem
    } while (elem && elem.nodeType != 1); // Om noden är en element-nod returneras noden. 
   //Annars så fortsätter loopen tills vi hittar en element-nod eller att det inte finns någon mer nod
    return elem; // Returnerar en ev. element-nod        
}

// Returnerar textens innehåll (utan taggar), dessutom ska besöka alla barn elements
//(rekursivt).
function textContent(e) {
    var child, type, s = "";  // s håller textens innehåll
    for(child = e.firstChild; child != null; child = child.nextSibling) {
        type = child.nodeType;
        if (type === 3 || type === 4)  // Text och CDATASection noder
            s += child.nodeValue;
        else if (type === 1)           // Recursiv anrop för Element noder
            s += textContent(child);
    }
    return s;
}

