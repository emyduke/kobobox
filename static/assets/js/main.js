$(document).ready(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        if($(window).scrollTop() > 50){
            $(".nav-link").css({"color":"black"});   
            $(".offcanvas-body").find($(".btn")).removeClass("btn-outline-light");
            $(".offcanvas-body").find($(".btn")).addClass("btn-outline-dark");
            
        }
        else{
            $(".nav-link").css({"color":"white"});
            $(".offcanvas-body").find($(".btn")).removeClass("btn-outline-dark");
            $(".offcanvas-body").find($(".btn")).addClass("btn-outline-light");
        }

    })


    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      });
})