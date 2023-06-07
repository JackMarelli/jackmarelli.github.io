const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    inertia: 0.8,
    smooth: true,
    getDirection: true,
    mobile: {
        inertia: 0.8,
        breakpoint: 0,
        smooth: false,
        getDirection: true,
    },
    tablet: {
        inertia: 0.8,
        breakpoint: 0,
        smooth: false,
        getDirection: true,
    },
});
