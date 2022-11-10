let btnall = document.getElementById("btn-all");
let btnpiz = document.getElementById("btn-piz");
let btngio = document.getElementById("btn-gio");
let btncer = document.getElementById("btn-cer");
let prodscontainer = document.getElementById("prods-container");

window.onload = function () {
  console.log("load");
  loadAllProducts();
  btnall.addEventListener("click", function () {
    console.log("test btnall");
    loadAllProducts();
  });
  btnpiz.addEventListener("click", function () {
    console.log("test btnpiz");
  });
  btngio.addEventListener("click", function () {
    console.log("test btngio");
  });
  btncer.addEventListener("click", function () {
    console.log("test btncer");
  });
};

/*
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Product image-->
      <img
        class="card-img-top"
        src="assets/img/fullsize/0001.png"
        alt="..."
      />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product price -->
          <h5 class="fw-bolder">230,00€</h5>
          <!-- Product description -->
          <p>Set da messa</p>
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a class="btn btn-outline-dark mt-auto" href="#"
            >View options</a
          >
        </div>
      </div>
    </div>
  </div>

*/

function loadAllProducts() {
  $.getJSON("assets/products.json", function (data) {
    for (let i = 0; i < data.products.length; i++) {
      console.log(data.products[i].id);

      //create
      let divCol = document.createElement("div");
      let divCardH100 = document.createElement("div");
      let img = document.createElement("img");
      let divCardBody = document.createElement("div");
      let divTextCenter0 = document.createElement("div");
      let h5 = document.createElement("h5");
      let p = document.createElement("p");
      let divCardFooter = document.createElement("div");
      let divTextCenter1 = document.createElement("div");
      let aBtn = document.createElement("a");

      //add classes
      divCol.classList.add("col");
      divCol.classList.add("mb-5");
      divCardH100.classList.add("card");
      divCardH100.classList.add("h-100");
      img.classList.add("card-img-top");
      divCardBody.classList.add("card-body");
      //divCardBody.classList.add("p-4");
      divTextCenter0.classList.add("text-center");
      h5.classList.add("fw-bolder");
      //h5.classList.add("p-4");
      h5.classList.add("pt-0");
      h5.classList.add("border-top-0");
      h5.classList.add("bg-transparent");
      divCardFooter.classList.add("card-footer");
      divTextCenter1.classList.add("text-center");
      aBtn.classList.add("btn");
      aBtn.classList.add("btn-outline-dark");
      //aBtn.classList.add("mt-auto");

      //content
      img.src = data.products[i].imageUrl;
      h5.innerText = data.products[i].price;
      p.innerText = data.products[i].desc;
      aBtn.innerText = "Generic Button";

      //append
      divTextCenter0.appendChild(h5);
      divTextCenter0.appendChild(p);
      divCardBody.appendChild(divTextCenter0);
      divTextCenter1.appendChild(aBtn);
      divCardFooter.appendChild(divTextCenter1);
      divCardH100.appendChild(img);
      divCardH100.appendChild(divCardBody);
      //divCardH100.appendChild(divCardFooter);
      divCol.appendChild(divCardH100);
      prodscontainer.appendChild(divCol);
    }
  });
}
