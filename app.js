$(document).ready(function () {
    $('.carousel').carousel('pause');

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
        if ($slides[counter].id === "lastClone" ) {
            counter = size - 2;
            $('.amazing-slide').css({
                "transform": "translateX(" + (-100 * counter) + "%)",
                "transition": "none"
            });
        }

        if ($slides[counter].id === "firstClone" ) {
            counter = size - counter;
            $('.amazing-slide').css({
                "transform": "translateX(" + (-100 * counter) + "%)",
                "transition": "none"
            });
        }
    });

    

    






















});