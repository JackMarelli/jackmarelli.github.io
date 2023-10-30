import "./locomotive-scroll.min.js";

let cssRoot = document.querySelector(":root");
let cssRootStyle = getComputedStyle(cssRoot);
const combinations = [
  "02343F F0EDCC",
  "331B3F ACC7B4",
  "0A174E F5D042",
  "07553B CED46A",
  "50586C DCE2F0",
  "815854 F9EBDE",
  "A4193D FFDFB9",
  "1AAFBC 80634C",
  "FFDFDE 6A7BA2",
  "3B1877 DA5A2A",
  "5F4B8B E69A8D",
  "00203F ADEFD1",
  "606060 D6ED17",
  "2C5F2D 97BC62",
  "00539C EEA47F",
  "0063B2 9CC3D5",
  "101820 FEE715",
  "CBCE91 d3687f",
  "B1624E 5CC8D7",
  "7b9acc FCF6F5",
  "101820 F2AA4C",
  "A07855 D4B996",
  "195190 A2A2A1",
  "603F83 C7D3D4",
  "2BAE66 FCF6F5",
  "FAD0C9 6E6E6D",
  "2D2926 ed6f63",
];

document.addEventListener("DOMContentLoaded", () => {
  refreshColors();
});

document.querySelector("#rcb").addEventListener("click", () => {
  refreshColors();
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

function refreshColors() {
  let rand = Math.floor(Math.random() * combinations.length);
  let cols = combinations[rand].split(" ");

  cssRoot.style.setProperty("--col1", `#${cols[0]}`);
  cssRoot.style.setProperty("--col2", `#${cols[1]}`);
}
