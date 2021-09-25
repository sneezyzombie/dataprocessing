$(function () {
    $('.header__content__slider').slick({
        dots: true,
        arrows: false,
        fade:true,
    });
    $('.appointment__input').styler({
    });
    $('.feedback__slider__item__stars').rateYo({
        starWidth: "18px",
        ratedFill: "#ffce1c",
        normalFill:"#222222",
        halfStar: true,
        readOnly: true,
        spacing: "7px",
    });
    $('.feedback__slider').slick({
        slidesToShow: 3,
        infinite:false
    })
    $('.header__btn').on('click', function () {
        $('.header__menu-list').toggleClass('header__menu-list--active'),
            $('.header__btn').toggleClass('header__btn--active')
    })
});
