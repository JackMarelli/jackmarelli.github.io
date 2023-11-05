const _app = {};

_app.allWorksContainer = document.querySelector(".all-works-container");
_app.aspectRatioTolerance = 0.3;
_app.backToTopBtn = null;
_app.cursorCarouselDetectionZone = document.querySelector(
  "#cursorCarouselDetectionZone"
);
_app.cursorCarouselElementsNum = 7;
_app.defaultPathToLogo = "assets/icons/logo_black.svg";
_app.defaultPathToMenuIcon = "assets/icons/menu.svg";
_app.dots = [];
_app.fold = document.querySelector("#fold");
_app.footerTag = document.querySelector("footer");
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
_app.initialX = 0;
_app.initialY = 0;
_app.mpList;
_app.locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
_app.logoSvgString = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
    <g>
      <polygon class="cls-1" points="225 0 225 400 0 400 0 200 100 200 100 300 125 300 125 100 0 100 0 0 225 0"/>
      <rect class="cls-1" x="250" y="0" width="100" height="400"/>
      <rect class="cls-1" x="375" y="0" width="100" height="400"/>
      <rect class="cls-1" x="500" y="0" width="100" height="400"/>
    </g>
  </svg>`;
_app.navTag = document.querySelector("nav");
_app.nidProgress = 0;
_app.pageName = document.querySelector("#pageName").innerHTML;
_app.scrollProgressPx = 0;
_app.seekingImg = document.createElement("img");
_app.step = 60;
_app.worksJsonPath = "../assets/works.json";
_app.worksListNode = document.querySelector("#worksList");

_app.initFoldCursorCarousel = () => {
  _app.cursorCarouselDetectionZone.addEventListener("mousemove", (e) => {
    const currentX = e.clientX;
    const currentY = e.clientY;
    const distance = Math.sqrt(
      (currentX - _app.initialX) ** 2 + (currentY - _app.initialY) ** 2
    );

    if (distance > _app.step) {
      _app.createDot(200, e.clientX, e.clientY);
    }
  });
};

_app.createDot = (width, x, y) => {
  if (_app.dots.length >= _app.cursorCarouselElementsNum) {
    _app.dots.shift();
  }
  const newDot = {
    width: width,
    x: x,
    y: y + _app.scrollProgressPx,
    nid: _app.nidProgress,
  };

  _app.dots.push(newDot);

  _app.initialX = x;
  _app.initialY = y;

  _app.updateDots();

  _app.nidProgress++;
  if (_app.nidProgress >= _app.cursorCarouselElementsNum) {
    _app.nidProgress = 0;
  }
};

_app.updateDots = () => {
  let currentImgList = document.querySelectorAll(".floating-img");
  if (currentImgList) {
    currentImgList.forEach((i) => {
      i.remove();
    });
  }

  for (let i = 0; i < _app.dots.length; i++) {
    let d = document.createElement("img");
    d.className = "floating-img";
    d.style.position = "absolute";
    d.style.transform = "translateX(-50%) translateY(-50%)";
    d.style.left = `${_app.dots[i].x}px`;
    d.style.top = `${_app.dots[i].y}px`;
    d.src = `assets/images/fold_cursor_carousel/fold${_app.dots[i].nid}.png`;
    d.aspectRatio = d.width / d.height;

    if (Math.abs(1 - d.aspectRatio) <= _app.aspectRatioTolerance) {
      //img is approximatively square
      d.style.width = "16vw";
      d.style.height = "auto";
    } else {
      //img is NOT approximatively square
      if (d.width > d.height) {
        d.style.height = "10vh";
        d.style.width = "auto";
      } else {
        d.style.width = "10vw";
        d.style.height = "auto";
      }
    }

    _app.fold.appendChild(d);
  }
};

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

_app.initMpHoverAnimation = () => {
  _app.mpList = document.querySelectorAll(".mp");
  _app.mpList.forEach((i) => {
    i.mpMouseInAllowed = true;

    /* ANIMATION 1 (SHIFTING)
    i.addEventListener("mouseenter", () => {
      console.log(i.mpMouseInAllowed);
      i.childNodes.forEach(node => {
        node.childNodes.forEach(underNode => {
          console.log(underNode);
          if (i.mpMouseInAllowed) {
            i.mpMouseInAllowed = false;
            console.log("mp animation start");
            let initialText = underNode.nodeValue;
            let c = 0;
            let interval = setInterval(() => {
              initialText = initialText.substring(1) + initialText[0];
              underNode.nodeValue = initialText;
              c++;
              if (c == initialText.length) {
                clearInterval(interval);
                i.mpMouseInAllowed = true;
                console.log("mp animation end");
              }
            }, 20);
          }

        });
      })
    });
    */

    /* ANIMATION 2 (RANDOMIZE) */
    const mpRandAnimationSpeed = 0.6;
    i.addEventListener("mouseenter", () => {
      if (i.mpMouseInAllowed) {
        i.mpMouseInAllowed = false;
        i.childNodes.forEach((node) => {
          if (node.nodeType != Node.TEXT_NODE) {
            let c = 0;
            const initialText = node.innerHTML;
            const inter = setInterval(() => {
              node.innerHTML = node.innerHTML.shuffle();

              c++;
              if (c >= mpRandAnimationSpeed * 10) {
                clearInterval(inter);
                node.innerHTML = initialText;
                i.mpMouseInAllowed = true;
              }
            }, 50 / mpRandAnimationSpeed);
          }
        });
      }
    });
  });
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
    })
    .then(() => {
      console.log("loco scroll update");
      _app.locoScroll.update();
    });
};

_app.loadFeaturedWork = () => {
  fetch(_app.worksJsonPath)
    .then((response) => response.json())
    .then((json) => {
      json.works.forEach((item) => {
        if (item.featured) {
          //new work
          let work = document.createElement("a");
          work.className = "w";
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
        }
      });
    })
    .then(() => {
      console.log("loco scroll update");
      _app.locoScroll.update();
    });
};

_app.loadFooter = () => {
  if (_app.footerTag) {
    console.log("loading footer");

    _app.footerTag.innerHTML = `<div class="inline-contain section-title fs-lg">Links</div>
      <div class="inline-contain footer-links">
        <div class="footer-list">
          <div class="fs-lg">Cantù, Italy</div>
        </div>
        <div class="fs-lg footer-list">
          <a href="https://www.linkedin.com/in/giacomo-marelli-6a8866230/">Linkedin</a>
          <a href="https://github.com/JackMarelli">Github</a>
          <a href="https://www.behance.net/giacomomarelli1">Behance</a>
        </div>
        <div class="fs-lg footer-list">
          <a href="https://www.instagram.com/jack.marelli/">Instagram</a>
          <a href="https://twitter.com/jackmareIIi">X</a>
        </div>
        <div class="fs-lg footer-list">
          <a href="projects/">Works</a>
          <a href="playground/">Playground</a>
          <a href="mailto:marellgiacomo@gmail.com">Contact</a>
          <a id="backToTopBtn" href="#">Back to top ⇡</a>
        </div>
      </div>
      <div class="inline-contain display fs-xxl footer-mail">Hire me at <span class="symbola">⤵</span> <br><a class="display-italic"
          href="mailto:marellgiacomo@gmail.com">marellgiacomo@gmail.com</a>
      </div>
      `;

    _app.backToTopBtn = document.querySelector("#backToTopBtn");
    _app.backToTopBtn.addEventListener("click", () => {
      _app.locoScroll.scrollTo("top");
    });
  } else {
    console.log("missing <footer> tag");
  }
};

_app.loadNav = () => {
  let pathToMenuIcon = _app.defaultPathToMenuIcon;

  if (_app.navTag) {
    //go back a folder if page is in /pages
    if (_app.pageName != "Home") {
      pathToMenuIcon = "../" + pathToMenuIcon;
    }

    _app.navTag.innerHTML = `
    <div id="navBrand">
      <a href="https://www.jackmarelli.com/">
        ${_app.logoSvgString}
      </a>
      <span class="nav-separator">-</span>
      <span class="page-name fs-md">${_app.pageName}</span>
    </div>
    <div>
      <img class="d-none" src="${pathToMenuIcon}" alt="Menu" />
    </div>`;
  } else {
    console.log("missing <nav> tag");
  }
};

_app.locoScroll.on("call", (e) => {
  eval(e);
});

_app.locoScroll.on("scroll", ({ scroll }) => {
  _app.scrollProgressPx = scroll.y;
});

_app.updateNav = () => {
  _app.navTag.classList.toggle("theme-dark");
};

_app.startUp = () => {
  if (_app.pageName === "Home") {
    _app.initFoldCursorCarousel();
    _app.initHelloCarousel();
    _app.loadFeaturedWork();
  } else if (_app.pageName === "Works") {
    _app.loadAllWork();
  } else if (_app.pageName === "Playground") {
    _app.initMpHoverAnimation();
  }

  _app.loadNav();
  _app.loadFooter();

  _app.locoScroll.update();
};

_app.startUp();

window.onresize = () => {
  _app.locoScroll.update();
};

//Extensions
String.prototype.shuffle = function () {
  var a = this.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
};
