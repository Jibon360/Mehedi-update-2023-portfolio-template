$(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.navbar').addClass("navbg");
        } else {
            $('.navbar').removeClass("navbg");
        }
    })

    $(window).on('load', function () {
        $(".cell").fadeOut();
    })



    // color switcher box show hide
    $(".colorswitch-icon").on('click', function () {
        $(".color-switcher").toggleClass("colorboxshowhide");
    })

    $(".btnitem").each(function () {
        $(this).on('click', function () {
            var color = $(this).attr("data-color");
            document.documentElement.style.setProperty("--orange", color);
        })
    })



    // bar animation navbar
    $(".navbar-toggler").on('click', function () {
        $(".fa-bars-staggered").toggleClass("fa-xmark");
    });
    {/* <i class="fa-solid fa-xmark"></i> */ }

    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})


var typed = new Typed('.bannerruntext', {
    strings: ['MEHEDI HASSAN JIBON', 'WEB DESIGNER', 'WEB DEVELOPER', 'GRAPHICS DESIGNER'],
    smartBackspace: true,
    typeSpeed: 100,
    startDelay: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
});


$('.bannercontainer').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
});


$('.demo').googleMaps({
    points: [{

        // New York
        lat: 40.7127,
        lng: -75.1890,
        marker: true,
        title: 'Marker title',
        infoWindow: 'Info window content',
        marker: 'custom.png'

    }]
});


