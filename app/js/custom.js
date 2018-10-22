$(document).ready(function(){
//zooming galery
// $('.gallery-item img').elevateZoom({
//   zoomType: "window",
//   cursor: "pointer"
// });
// Тип Image - галерея картинок
$('.gallery-item li').magnificPopup({
 delegate: 'a',
 type: 'image',
 tLoading: 'Загрузка изображения #%curr%...',
 gallery: {
   enabled: true,
   navigateByImgClick: true,
   preload: [0, 1]
 }
});
//send popup
$(".popup-form").submit(function() {
  $.ajax({
    type: "POST",
    url: "message.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
    $(".popup-form").trigger("reset");
         $(".popup").css('opacity','0').delay(200);  // delay() позволяет сделать паузу между изменениями свойств
         $(".popup").css('display', 'none'); 
         $(".popup").dequeue();
       });
  return false;
});
//catalog item click
$('.catalog-item').click(function(event){
  event.stopPropagation();
  if (!$(event.target).is('.more-info')) {
    $(this).find('.more-info').click();
  }
});
//menu burger
$('.header-menu-link').click(function(e) {
  e.preventDefault();
  // $(this).toggleClass('open').next('ul').slideToggle(400);
  $(this).toggleClass('open').blur().next('ul').slideToggle('medium', function() {
    if ($(this).is(':visible'))
      $(this).css('display','flex');
  });
});
$('.blog-item img, .blog-item span').click(function() {
  $(this).parent().find('a')[0].click();
});
//search
$('.header-social-item.search').click(function() {
  $(this).find('input').toggle('slide');
});
//catalog-tabs
$('.catalog-tabs-caption li, .catalog-tabs-content-item').first().addClass('active').siblings().removeClass('active');
$('.catalog-tabs-caption').on('click', 'li:not(.active)', function(e) {
  e.preventDefault();
  $(this)
  .addClass('active').siblings().removeClass('active')
  .closest('.catalog-tabs').find('.catalog-tabs-content-item').removeClass('active').eq($(this).index()).addClass('active');
});
//product gallery
$('.gallery-preview').on('click', 'li:not(.active)', function() {
  $(this).closest('.product-content-info-gallery').find('.gallery-item li').removeClass('active').eq($(this).index()).addClass('active');
  // .addClass('active').siblings().removeClass('active')
});
//popup button
$('.popup-btn').click(function(e) {
  e.preventDefault();
  $('.popup').show();
  $('.overlay').show();
});
$('.popup-close, .overlay').click(function() {
  $('.overlay, .popup').hide();
});
//buy btn
$('.buy-btn').click(function(e) {
  e.preventDefault();
  $('.popup').addClass('buy-form').show();
  $('.overlay').show();
});
$('.popup-close, .overlay').click(function() {
  $('.overlay, .popup').hide().removeClass('buy-form');
});
//popup Nice Select
$('.popup-select').niceSelect();
//banner carousel
$('.header-slider .owl-carousel').owlCarousel({
  items:1,
  loop:true,
  nav: true,
  dots: true,
  autoplay:true,
  autoplaySpeed: 3000,
  navSpeed: 3000,
  autoplayTimeout:5000,
  autoplayHoverPause:true
});
});
