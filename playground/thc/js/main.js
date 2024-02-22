const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    direction: 'horizontal',
    smooth: true,
    tablet: {
        smooth: true,
        breakpoint: 0
    },
    smartphone: {
        smooth: true,
        breakpoint: 0
    }
});