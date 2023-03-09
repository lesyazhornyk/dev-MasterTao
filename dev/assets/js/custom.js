$( document ).ready(function() {
    $('.banner').slick({
    //dots: true,
    arrow: true,
    appendArrows: ".banner-nav",
    responsive: [
        {
          breakpoint: 991,
          settings: {
           arrows: false,
           dots: true,
          }
        },

      ]
   
    });
    
});