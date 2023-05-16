window.addEventListener('load', (event) => {
    setTimeout(() => {  document.getElementById("sky").setAttribute("class", "sunset-gradient"); }, 1000);
    console.log("page loaded and 1 second waited");
});