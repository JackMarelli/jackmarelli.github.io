function test() {
  let path = document.getElementById("inputfile").value;
  let newInnnerHTML = '<img src="' + path + '" alt="testalt">';
  document.getElementById("propic").innerHTML = newInnnerHTML;
}
