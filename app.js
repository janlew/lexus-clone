$(document).ready(function () {
    $('.carousel').carousel('pause');

    //MENU SEARCH
    $('#search-btn').click(function () { 
        $('#main-menu-wrapper, #right-menu-wrapper, #logo-wrapper').css({
            "z-index": "0"
        });
        $('#searchbar-wrapper').css({
            "display": "block",
            "transform": "translateX(100%)",
            "transition": "none",
            "z-index": "1"
        });
        setTimeout(() => {
            $('#searchbar-wrapper').css({
                "transform": "translateX(0%)",
                "transition": "2s",
                "z-index": "1"
            });
        }, 100);
    });

    $('.bi-x').click(function () { 
        $('#searchbar-wrapper').css({
            "transform": "translateX(100%)",
            "transition": "2s"
        });
        setTimeout(() => {
            $('#searchbar-wrapper').css({
                "display": "none"
            });
        }, 2000);
        
        
    });

    //TEXT ANIMATION 
    $('#hero-carousel-item1').mouseenter(function () {
        console.log('enter');
        $('.hero-label-top').css({
            "top": "2%",
            "transition": "1s"
        });
        $('#hero-label-bot').css({
            "z-index": "1",
            "top": "60%",
            "transition": "1.5s"
        });
        $('#hero-btn1').css({
            "z-index": "1",
            "bottom": "4%",
            "transition": "1s"
        });
        $('#hero-btn2').css({
            "z-index": "1",
            "bottom": "4%",
            "transition": "1s"
        });
    });

    $('#hero-carousel-item2').mouseenter(function () {
        console.log('enter');
        $('.hero-label-top').css({
            "top": "2%",
            "transition": "1s"
        });
        $('#hero-btn3').css({
            "z-index": "1",
            "bottom": "4%",
            "transition": "1s"
        });
    });

    $('.carousel-control-next, .carousel-control-prev').click(function () {
        $('.hero-label-top').css({
            "top": "-30%",
            "transition": "none"
        });
        $('#hero-label-bot').css({
            "top": "50%",
            "z-index": "-1",
            "transition": "none"
        });
        $('#hero-btn1').css({
            "z-index": "-1",
            "bottom": "14%",
            "transition": "none"
        });
        $('#hero-btn2').css({
            "z-index": "-1",
            "bottom": "14%",
            "transition": "none"
        });
        $('#hero-btn3').css({
            "z-index": "-1",
            "bottom": "14%",
            "transition": "none"
        });
    });

    // MOBILE MENU
    $('#mobile-nav-right').click((e) => {
        $('#mobile-menu').slideToggle();
    });

    // EXPLORE YOUR LEXUS COLOR CHANGE

    $('.color-btn').each(function () {
        $(this).click(() => {
            console.log(this.id);
            let text = this.id;
            $('#color-name-label').html(text);

            let url = 'https://www.lexus.com/' + this.value;
            $('#explore-car-img').attr('src', url);

            $('.color-btn').each(function () {
                $(this).removeClass('activated');
            });
            $(this).addClass('activated');
        });
    });

    // EXPERIENCE AMAZING CAROUSEL

    $('.amazing-slide').css({
        "transform": "translateX(-100%)"
    });

    const $slides = $('.amazing-slide');
    const size = 4;
    const $prev = $('#amazing-prev');
    const $next = $('#amazing-next');

    let counter = 1;

    $next.click(() => {
        if (counter >= size - 1) return;
        counter++;
        $('.amazing-slide').css({
            "transform": "translateX(" + (-100 * counter) + "%)",
            "transition": "1s"
        });
    });

    $prev.click(() => {
        if (counter <= 0) return;
        counter--
        $('.amazing-slide').css({
            "transform": "translateX(" + (-100 * counter) + "%)",
            "transition": "1s"
        });
    });

    $('.amazing-slide').on("transitionend", () => {
        if ($slides[counter].id === "lastClone") {
            counter = size - 2;
            $('.amazing-slide').css({
                "transform": "translateX(" + (-100 * counter) + "%)",
                "transition": "none"
            });
        }

        if ($slides[counter].id === "firstClone") {
            counter = size - counter;
            $('.amazing-slide').css({
                "transform": "translateX(" + (-100 * counter) + "%)",
                "transition": "none"
            });
        }
    });

});