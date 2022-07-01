

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar").addClass("bg-nav");
            // $(".nav-link").css({"color":"black"});   
            // $(".offcanvas-body").find($(".btn")).removeClass("btn-outline-light");
            // $(".offcanvas-body").find($(".btn")).addClass("btn-outline-dark");

        }
        else {
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






$(document).ready(function () {

    function reveal() {
        var reveals = document.querySelectorAll(".js-scroll");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("scrolled");
            } else {
                reveals[i].classList.remove("scrolled");
            }
        }
    }



    window.addEventListener("scroll", reveal);



    function firstReveal() {
        var reveals = document.querySelectorAll(".count-up");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                $(".counter").each(function () {
                    var count = $(this);
                    var countTo = count.attr("data-count");

                    $({ countNum: count.text() }).animate({
                        countNum: countTo,
                    },
                        {
                            duration: 3000,
                            easing: "linear",
                            step: function () {

                                count.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                count.text(this.countNum);
                            }
                        });
                });
            } else {

                reveals[i].classList.remove("scrolled");
            }
        }
    }



    window.addEventListener("scroll", firstReveal);



})

var scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };

var elementsToShow = document.querySelectorAll('.animate-on-scroll');
var textToShow = document.querySelectorAll('.animate-text-on-scroll');
var btnsToShow = document.querySelectorAll('.inline-btns');
var boxToShow = document.querySelectorAll('.feature-box');

function loop() {
    /*elementsToShow.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }else{
            element.classList.remove('is-visible');
        }
    });*/

    const loopAndShowElem = elems => {
        elems.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('animate__animated');
                element.classList.add('animate__pulse');
            } else {
                element.classList.add('animate__animated');
                element.classList.remove('animate__pulse');
            }
        });
    }
    loopAndShowElem(elementsToShow);
    // loopAndShowElem(textToShow);
    // loopAndShowElem(btnsToShow);
    // loopAndShowElem(boxToShow);

    scroll(loop);
}

loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 300;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #f7c758 }";
    document.body.appendChild(css);
};
