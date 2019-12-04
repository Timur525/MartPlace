$(function(){

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "13px",
    readOnly: true,
  });
  
  $(".slider__wrapper-product").slick({
    prevArrow: '<button class="slick-arrow slick-prev lnr-chevron-right"></button>',
    nextArrow: '<button class="slick-arrow slick-next lnr-chevron-left"></button>',
  });

  var mixer = mixitup('.products__inner-box')

});
