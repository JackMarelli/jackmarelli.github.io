function createQrImage() {
    let data = document.getElementById("toConvert").value;
    let side = document.getElementById("imageSidePx").value;

    if (side > 500) {
        alert("Massimo 500 pixel per il lato!");
        document.getElementById("imageSidePx").value = 500;
    }
    else {

        let redirectLink = "https://chart.googleapis.com/chart?cht=qr&chs=" + side + "x" + side + "&chl=" + data;
        window.location.href = redirectLink;
    }
}