const _app = {};

_app.allWorksContainer = document.querySelector(".all-works-container");
_app.defaultPathToLogo = "assets/icons/logo_black.svg";
_app.defaultPathToMenuIcon = "assets/icons/menu.svg";
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
_app.locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});
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

_app.loadNav = () => {
  let pathToMenuIcon = _app.defaultPathToMenuIcon;
  let pathToLogo = _app.defaultPathToLogo;

  if (_app.navTag) {

    //go back a folder if page is in /pages
    if (_app.pageName != "Home") {
      pathToMenuIcon = "../" + pathToMenuIcon;
      pathToLogo = "../" + pathToLogo;
    }

    _app.navTag.innerHTML = `<div id="navBrand"><a href="https://www.jackmarelli.com/"><img src="${pathToLogo}"></a><span class="nav-separator">-</span><span>${_app.pageName}</span></div><div><img class="d-none" src="${pathToMenuIcon}" alt="Menu" /></div>`;
  } else {
    console.log("missing <nav> tag");
  }
};

_app.loadAllWork = () => {
  fetch(_app.worksJsonPath)
    .then((response) => response.json())
    .then((json) => {
      json.works.forEach((item) => {
        //new work
        let work = document.createElement("a");
        work.className = "work";
        work.href = item.redirect;
        work.target = "_blank";

        //work img
        let img = document.createElement("img");
        img.src = `../assets/images/thumbnails/${item.imageName}`;

        work.append(img);
        _app.allWorksContainer.append(work);
      });
    }).then(() => {
      console.log("loco scroll update");
      _app.locoScroll.update();
    });
}

_app.loadFeaturedWork = () => {
  fetch(_app.worksJsonPath)
    .then((response) => response.json())
    .then((json) => {
      json.works.forEach((item) => {
        //new work
        let work = document.createElement("a");
        work.className = "w inline-contain block-contain";
        work.href = item.redirect;
        work.target = "_blank";

        //work text container
        let text = document.createElement("div");
        text.className = "text";

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

        //image
        let img = document.createElement("img");
        img.src = `assets/images/thumbnails/${item.imageName}`;

        //append everything
        text.appendChild(title);
        text.appendChild(expertiece);
        work.appendChild(text);
        work.appendChild(img);
        _app.worksListNode.insertBefore(work, document.querySelector("#yp"));
      });
    })
    .then(() => {
      console.log("loco scroll update");
      _app.locoScroll.update();
    });
};

_app.startUp = () => {
  if (_app.pageName === "Home") {
    _app.initHelloCarousel();
    _app.loadFeaturedWork();
  }
  if (_app.pageName === "Works") {
    _app.loadAllWork();
  }

  _app.loadNav();
};

_app.startUp();

window.onresize = () => {
  _app.locoScroll.update();
}