var marginCount = 5;

function hideToggle() {
    if (document.getElementById("hideThis").style.display === "none") {
        document.getElementById("hideThis").style.display = "block";
    } else {
        document.getElementById("hideThis").style.display = "none";
    }

    // if (document.getElementById("hide").style.display === "none")
}

function changeMargin() {
    document.getElementById("hideThis").style.margin += 5 + "px";
}