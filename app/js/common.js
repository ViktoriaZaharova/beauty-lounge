$(document).ready(function() {
    let penImg = $('.gallery-item img');
    let linksImg = $('.gallery-item');

    $('.gallery-min').on('click', function (e) {
        let imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);
        linksImg.attr('href', imgPath);

    });
});


$('.btn-burger').click(function (){
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').click(function (){
    $('.mobile-menu').fadeOut();
});

// модальные окна (несколько)
$(document).ready(function () {
    let overlay = $('.overlay');
    let open_modal = $('.open_modal');
    let close = $('.modal__close, .overlay');
    let modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end


// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        $('.articles-slider:not(.slick-initialized)').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            variableWidth: true,
            autoplay: true
        });
    } else {
        $(".articles-slider.slick-initialized").slick("unslick");
    }
});
// slick active
