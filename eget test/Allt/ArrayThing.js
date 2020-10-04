function städer() {
    var cities = ["A", "B", "C", "D", "E"];
    document.getElementById("textHär").innerHTML = "Städer: " + cities;
    // document.writeln("Alla städer");
    cities.forEach(städer);

    var fis = prompt("Lägg till stad", "F");

    cities.push(fis);
    document.getElementById("textHär").innerHTML = "Städer: " + cities;
}
