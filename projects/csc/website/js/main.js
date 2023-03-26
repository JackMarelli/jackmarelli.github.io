console.log("main.js loads");
const _app = {}

_app.owlCarouselSetup = () => {
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 50,
      nav: false,
      stagePadding: 50,
      autoPlay: true,
      autoplayTimeout: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2
        },
        1100: {
          items: 3
        },
        1400: {
          items: 4
        }
      }
    });
  });
};

_app.reviewsSetup = () => {
  //todo: randomly picked reviews
}

_app.startUp = () => {
  _app.owlCarouselSetup();
  _app.reviewsSetup();
}

_app.startUp();