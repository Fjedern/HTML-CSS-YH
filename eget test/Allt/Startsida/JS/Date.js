async function getDate() {
    var d = new Date();
    
    
    document.getElementById("svarDate").innerHTML = d;
    document.getElementById("svarDate").style.color = "black";
    await sleep(3000);
    document.getElementById("svarDate").innerHTML = "Svar";
    document.getElementById("svarDate").style.color = "white";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Need more work for assignment
  
