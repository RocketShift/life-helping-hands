$(document).ready(function(){
    $('.slideshow-vision').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        showDots: false,
        arrows: false, 
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
        ]
    });

    $('.slideshow-testimonial').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        showDots: false,
        arrows: false
    });
  });
          