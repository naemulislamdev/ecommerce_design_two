//main Slider
$('.categories').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
});
//header miniSlider Slider
$('.c-review-slider').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});
//header miniSlider Slider
$('.p-details-sub-img').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


