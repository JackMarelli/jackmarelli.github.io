function crea() {
console.log("asfjiaf");

    let w = document.getElementById("w").value;
    let h = document.getElementById("h").value;

    console.log(w);
    console.log(h);

    let container = document.getElementById("container");
    let newDiv = document.createElement("div");
    newDiv.style = "width: " + w + ";" + "height: " + h + ";"+ "border: 2px solid black;";

    console.log(container);
    console.log(newDiv);

    container.appendChild(newDiv);
}