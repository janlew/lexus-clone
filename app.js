$(document).ready(function () {
    $('.carousel').carousel('pause');

    // MOBILE MENU
    $('#mobile-nav-right').click((e) => { 
        $('#mobile-menu').slideToggle();
    });

    // EXPLORE YOUR LEXUS COLOR CHANGE

    $('.color-btn').each(function() {
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