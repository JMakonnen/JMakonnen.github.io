$(document).ready(function(){
  $('.features-line').slick({
  	slidesToShow: 3,

  	  responsive: [{

      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        infinite: true,
        nextArrow: '<button type="button" class="slick-next right"><i class="fas fa-chevron-left"></i></button>',
        prevArrow: '<button type="button" class="slick-prev left"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>'
      }

    }]

  });
});
	
