function calcola() {
    console.log("clicked calcola");
    let p = document.getElementById("p").value;
    let q = document.getElementById("q").value;
    let e = document.getElementById("e").value;
    let n = p * q;
    let phiN = (p - 1) * (q - 1);

    let d = 0;
    if (p != "" && q != "" && e != "") {
        while (true) {
            console.log(d);
            if ((d * e) % phiN == 1) {
                console.log(p);
                console.log(q);
                console.log(e);
                console.log(n);
                console.log(phiN);
                console.log(d);
                document.getElementById("output-p").innerHTML += d;
                break;
            }
            d++;
        }
    }
}

//n = p*q
//phiN = p-1 * q-1