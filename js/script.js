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

    $(".scroll__top").on("click", function() {
      $("body").scrollTop(0);
    });

   $(window).scroll(function() {
   var height = $(window).scrollTop();
   
         /*Если сделали скролл на 100px задаём новый класс для header*/
      if(height > 100){
      $('.scroll__top').addClass('show');
      } else{
            /*Если меньше 100px удаляем класс для header*/
      $('.scroll__top').removeClass('show');
      }
   
   });
  
 });