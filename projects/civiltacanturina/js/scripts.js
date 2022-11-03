let btnall = document.getElementById("btn-all");
let btnpiz = document.getElementById("btn-piz");
let btngio = document.getElementById("btn-gio");
let btncer = document.getElementById("btn-cer");
let prodcontainer = document.getElementById("prods-container");

window.onload = function () {
  console.log("load");
  btnall.addEventListener("click", function () {
    console.log("test btnall");
    location.replace("../index.html");

    

  });
  btnpiz.addEventListener("click", function () {
    console.log("test btnpiz");
    location.replace("../index.html");
  });
  btngio.addEventListener("click", function () {
    console.log("test btngio");
    location.replace("../index.html");
  });
  btncer.addEventListener("click", function () {
    console.log("test btncer");
    location.replace("../index.html");
  });
};
