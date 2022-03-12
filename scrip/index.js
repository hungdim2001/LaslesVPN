$(document).ready(function () {
  $(".customer-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./image/prebtn.svg'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='./image/nextbtn.svg'>"
  });
});
