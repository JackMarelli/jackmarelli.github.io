function calcola() {
    let num = document.getElementById("number").value;
    let powers = document.getElementById("powers");
    powers.innerHTML = "";

    console.log("powers of 2 until about: " + num);

    let outputPow = 1;
    while (outputPow <= num) {
        outputPow = outputPow * 2;
        let newDiv = document.createElement("div");
        newDiv.innerHTML = outputPow;
        newDiv.setAttribute("class", "pow");
        powers.appendChild(newDiv);
        console.log(outputPow);
    }
}

function scroll(checktop) {
    let elementToScroll = document.getElementById("powers");
    if (checktop) {
        elementToScroll.scroll(0, 1);
    }
    else {
        elementToScroll.scroll(0, 9999);
    }    
}