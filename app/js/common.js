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
   $('.mobile-menu').slideToggle();
});

$('.btn-close').click(function (){
    $('.mobile-menu').slideUp();
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
            slidesToShow: 2,
            arrows: false,
            // autoplay: true
        });
    } else {
        $(".articles-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.btn-view').click(function (e){
    e.preventDefault();
    $(this).siblings('.for-whom-list').find('li:hidden').css('display', 'flex');
    $(this).hide();
});

$('.btn-view').click(function (e){
    e.preventDefault();
    $(this).siblings('.advantages-wrapper').find('.advantages-box:hidden').css('display', 'flex');
    $(this).hide();
});

//плавный скролл
$(document).ready(function () { //плавный скролл
    $(".go_to").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        let id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        let headerHeight = $('header').height();

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top - headerHeight}, 500);
    });
});
//плавный скролл end
