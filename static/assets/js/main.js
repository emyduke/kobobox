$(document).ready(function () {
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        if($(window).scrollTop() > 50){
            $(".navbar").addClass("bg-nav");
            // $(".nav-link").css({"color":"black"});   
            // $(".offcanvas-body").find($(".btn")).removeClass("btn-outline-light");
            // $(".offcanvas-body").find($(".btn")).addClass("btn-outline-dark");

        }
        else{
            $(".navbar").removeClass("bg-nav");
            // $(".nav-link").css({"color":"white"});
            // $(".offcanvas-body").find($(".btn")).removeClass("btn-outline-dark");
            // $(".offcanvas-body").find($(".btn")).addClass("btn-outline-light");
        }

    })


    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    // arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
})