$(function(){
  var $tab_list = $('.tab_menu');
  $tab_list.find('ul ul').hide();
  $tab_list.find('li.active > ul').show();
  
  function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
  }
  $tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu);

  $('.tit .btn').click(function(e){
  e.preventDefault();
  $('#cont_nav').slideToggle(430);
  $(this).toggleClass('on');
  });
  
  // 배너 슬릭슬라이드
  $(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });

  // gallery_img
  $(".gallery_img").slick({
    infinite: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  });
  $('.play').click(function(){
    $(".gallery_img").slick('slickPlay');
  });
  $('.pause').click(function(){
    $(".gallery_img").slick('slickPause');
  });
  $('.prev').click(function(){
    $(".gallery_img").slick('slickPrev');
  });
  $('.next').click(function(){
    $(".gallery_img").slick('slickNext');
  });

  // 레이어 팝업
  $('.layer').click(function(e){
    e.preventDefault();
    $('#layer').fadeIn();
  });
  $('.close').click(function(e){
    e.preventDefault();
    $('#layer').fadeOut();
  });
  // 윈도우 팝업
  $('.window').click(function(e){
    e.preventDefault();
    // window.open("파일명","팝업이름","옵션설정");
    // 옵션 : left, top, width, height, status, toolbar, location, menubar, scroolbars, fullscreen
    window.open("smaple_popup.html","popup02","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0")
    // 라이트 박스
  });
  $(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
  }); 
});
