var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoHeight : true,
  autoplay : {
      delay : 5000,
      disableOnInterraction : false,
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  $('#ob-og').click(function(){
    $('.ob-og').modal('show');
  });

  $('.tab-btn').on('click',function(){
    $('.tab_btn').removeClass("active");
    $('.tab-item').removeClass("active");

    $($(this).attr("href")).addClass("active");
    $(this).addClass("active");

  });

  $('.sidebar.icon').on('click', function(){
    $('.ui.labeled.icon.sidebar').sidebar('toggle');
  });

  // var tag = document.createElement('script');
  // tag.src = "http://www.youtube.com/iframe_api";
  // var firstScriptTag = document.getElementByTagName('script')[0];
  // firstScriptTag.parentNode.inserBefore(tag, firstScriptTag);
  // $('.slides').slick({
  //   accessibility: true,
  //   speed: 400,
  //   cssEase: 'ease',
  //   dots: true,
  //   draggable: true,
  //   arrows: true,
  //   infinite: true,
  //   swipe: true,
  // });
  // $('.slides').on('afterChange', function(event, slick, currentSlide){
  //   Object.keys(ytPlayers).forEach(function(key) {
  //     var ytPlayer = this[key];
  //     console.log(key, ytPlayer);
  //     ytPlayer.pauseVideo();
  //   }, ytPlayers);
  // });
});
