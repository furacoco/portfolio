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
    let position = $(this).offset().top; 
    let scroll = $(window).scrollTop(); 
    let windowHeight = $(window).height(); 
    if (scroll > position - windowHeight){ 
      $(this).addClass('active'); 
    }
	});
});
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
$(function(){
  let topBtn = $('#page_top');
  topBtn.hide();
  $(window).scroll(function () {
  let w = $(window).width();
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
