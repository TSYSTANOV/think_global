$(function()
{
    $('.head__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/prev.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/forw.png"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
          
            }
          },

          {
            breakpoint: 640,
            settings: {arrows:false
            
            }
          }
        ]
      });
})
//Comment
$(function()
{
    $('.comment__wrap').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/prev.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/forw.png"></button>',
        arrows:false,
      });
})