const _app = {};

_app.defaultMenuIconPath = "assets/icons/menu.svg";
_app.helloDiv = document.querySelector("#hello");
_app.hellos = [
  "Hello",
  "Ciao",
  "Hola",
  "Alo",
  "Ave",
  "Salut",
  "Ahoj",
  "привіт",
  "नमस्ते",
  "Halo",
  "שלום",
  "Nadzar",
  "你好",
  "здрасти",
  "안녕하세요",
  "سلام",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "Здраво",
  "สวัสดี",
  "こんにちは",
  "გამარჯობა",
];
_app.navTag = document.querySelector("nav");
_app.pageName = document.querySelector("#pageName").innerHTML;
_app.seekingImg = document.createElement("img");
_app.worksJsonPath = "../assets/works.json";
_app.worksListNode = document.querySelector("#worksList");

_app.initHelloCarousel = () => {
  if (_app.helloDiv) {
    let helloIndex = Math.floor(Math.random() * _app.hellos.length);
    setInterval(() => {
      _app.helloDiv.innerHTML = _app.hellos[helloIndex];
      if (helloIndex < _app.hellos.length - 1) {
        helloIndex++;
      } else {
        helloIndex = 0;
      }
    }, 800);
  }
};

_app.loadNav = (pageName, pathToMenuIcon) => {
  if (_app.navTag) {
    if (pageName != "Home") {
      pathToMenuIcon = "../" + pathToMenuIcon;
    }
    _app.navTag.innerHTML = `<div id="navBrand"><a href="https://www.jackmarelli.com/"><img src="assets/icons/logo_black.svg"></a><span class="nav-separator">-</span><span>${pageName}</span></div><div><img class="d-none" src="${pathToMenuIcon}" alt="Menu" /></div>`;
    console.log("navbar successfully loaded :)");
  }
};

_app.loadWorks = () => {
  _app.seekingImg.style.visibility = "hidden";
  _app.seekingImg.className = "seekingImg";
  _app.seekingImg.style.position = "absolute";
  _app.seekingImg.style.width = 1.625 * 200;
  _app.seekingImg.style.height = 1 * 200;
  _app.seekingImg.style.objectFit = "cover";
  _app.seekingImg.style.pointerEvents = "none";
  _app.worksListNode.appendChild(_app.seekingImg);

  fetch(_app.worksJsonPath)
    .then((response) => response.json())
    .then((json) => {
      json.works.forEach((item) => {
        //new work
        let work = document.createElement("a");
        work.className = "work theme-light";
        work.href = item.redirect;
        work.target = "_blank";

        //work title
        let title = document.createElement("div");
        title.className = "title";
        title.innerText = item.title;

        //work expertiece
        let expertiece = document.createElement("div");
        expertiece.className = "exp";
        let expText = "";
        for (let i = 0; i < item.expertiece.length; i++) {
          expText += item.expertiece[i] += ", ";
        }
        expertiece.innerText = expText.slice(0, expText.length - 2);

        //redir arrow
        let redirArrow = document.createElement("img");
        redirArrow.className = "redir";
        redirArrow.src = `assets/icons/arrow.svg`;

        //image
        let img = document.createElement("img");
        img.src = `assets/images/thumbnails/${item.imageName}`;

        //image following mouse
        work.addEventListener("mouseenter", (e) => {
          _app.seekingImg.src = img.src;
          _app.seekingImg.style.visibility = "visible";
          _app.seekingImg.style.top = e.pageY - _app.seekingImg.height / 2;
          _app.seekingImg.style.left = e.pageX + _app.seekingImg.height / 2;
        });
        work.addEventListener("mouseleave", (e) => {
          _app.seekingImg.style.visibility = "hidden";
        });

        work.appendChild(title);
        work.appendChild(expertiece);
        work.appendChild(redirArrow);
        _app.worksListNode.append(work);
      });
    });
};

_app.startUp = () => {
  if (_app.pageName === "Home") {
    _app.initHelloCarousel();
    _app.loadWorks();
    //_app.loadGsapWorksImages(); test
  }
  _app.loadNav(_app.pageName, _app.defaultMenuIconPath);
};

_app.startUp();
