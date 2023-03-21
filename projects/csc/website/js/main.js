console.log("main.js loads");

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        stagePadding: 30,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1100: {
                items: 4
            }
        }
    });
});