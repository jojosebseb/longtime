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
    //   dots: true
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
    //   dots: true
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
    responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    //   dots: true
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

$('#navbar li').on('click', function(){
    // $('#navbar li').removeClass('active');
    // $(this).addClass('active');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }
    else {
        $('#navbar li').removeClass('active');
        $(this).addClass('active');
    }
})
$('.mobile-handle').on('click', function(){
    $(this).toggleClass('active');
    $('#navbar .right').toggleClass('active');
})

// $('.vision-flex .red').on('mouseenter', function(){
//     $(this).animate({
//             'right': -500
//         },180
//     );
//     $(this).animate({
//             'right': 0,
//             'zIndex': 5
//         },150
//     );
// });
// $('.vision-flex .blue').on('mouseenter', function(){
//     $(this).animate({
//             'left': -500
//         },180
//     );
//     $(this).animate({
//             'left': 0,
//             'zIndex': 5
//         },150
//     );
// });

// $('.vision-flex .flex-module').on('mouseleave', function(){
//     $(this).animate({
//             'zIndex': 4
//         },400
//     );
// });

$('.vision-flex .flex-module').on('mouseenter', function(){
    // $('.vision-flex .flex-module').animate({
    //         margin: '0 -50px'
    //     },200
    // );
    // $('.vision-flex .flex-module').animate({
    //         margin: '0 50px'
    //     },200
    // );

    $('.vision-flex .flex-module').removeClass('active');
    $(this).addClass('active');
})

$('.full-input').on('focus', function(){
    $(this).parent().find('.floating-placeholder').addClass('active');
})
