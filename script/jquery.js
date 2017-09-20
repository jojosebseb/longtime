$('.news-belt').slick({
    slidesToShow: 3,
    infinite: false,
    nextArrow: '<div class="arrow-container next"><div class="arrow next"></div</div>',
    prevArrow: '<div class="arrow-container prev"><div class="arrow prev"></div</div>',
    responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

$('.latest-product-belt').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    nextArrow: '<div class="arrow-container next"><div class="arrow next"></div</div>',
    prevArrow: '<div class="arrow-container prev"><div class="arrow prev"></div</div>',
    responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

$('.related-product-belt').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: '<div class="arrow-container next"><div class="arrow next"></div</div>',
    prevArrow: '<div class="arrow-container prev"><div class="arrow prev"></div</div>',
});

var x = 0;
$('.latest-product-belt .product-module').each(function(i){
    x++;
    if (x > 5) {
        x = 1;
    }
    $(this).css({
        transition: 'opacity .5s ease '+ x/10+'s'
    });
});

var tempId;
$('.highlight-flex').on('click', '.flex-module', function(){
    $('.highlight-flex > .flex-module').removeClass('active');
    $(this).addClass('active');
    tempId = $(this).attr('id');
    $('.highlight-flex > .highlight-container').removeClass('active');
    $('.'+tempId).addClass('active');
});

$('.filter-handle').on('click', function(){
    // $('.filter-handle').parent().removeClass('active');
    $(this).parent().toggleClass('active');
})
