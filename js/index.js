$(function () {
  $('.js_btn').on('click', function () {        
    $('.header_nav_list , .btn_line').toggleClass('open');
  })
  $('.header_nav_list a').on('click', function() {
    $('.header_nav_list ul').slideToggle();
    $('.header_nav_list , .btn_line').removeClass('open');
  });  
});
$(window).scroll(function (){
	$(".marker").each(function(){
    var position = $(this).offset().top; 
    var scroll = $(window).scrollTop(); 
    var windowHeight = $(window).height(); 
    if (scroll > position - windowHeight){ 
      $(this).addClass('active'); 
    }
	});
});
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
$(function(){
  var topBtn = $('#page_top');
  topBtn.hide();
  $(window).scroll(function () {
  var w = $(window).width();
  if ($(this).scrollTop() > 100) {
  topBtn.fadeIn();
  } else {
  topBtn.fadeOut();
  }
  });
  topBtn.click(function () {
  $('body,html').animate({
  scrollTop: 0
  }, 500);
  return false;
  });
  });
