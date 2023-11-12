$(document).ready(function() {
 
    $("a.scroll-to").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
          duration: 500,
          easing: "swing"
       });
       return false;
    });

    $(".block1__btn").click(function() {
      $(".block1__info").addClass('show');
      $(".block1__btn").addClass('d-none');
      $(".close").addClass('d-block');
    });

    $(".close").click(function() {
      $(".block1__info").removeClass('show');
      $(".block1__btn").removeClass('d-none');
      $(".close").removeClass('d-block');
    });
  
 });