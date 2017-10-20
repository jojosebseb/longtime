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
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

$('.related-product-belt.slick').slick({
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
      dots: true,
      arrows: false,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

var slideWidth = $('#indexSlider .slider-bar').width();

var winWidth = $(window).width();

console.log(
    winWidth
);

console.log(slideWidth);
// window.setInterval(function(){
//     if (slideWidth >= winWidth) {
//         slideWidth= 0;
//     }
//     else {
//         $('#indexSlider .slider-bar').css({
//             width: slideWidth+1 +'px'
//         });
//         slideWidth = $('#indexSlider .slider-bar').width();
//     }
// }, 100);

function timer(){
    $('.slider-bar').animate({
        width: '100%'
    }, 5000, function(){
        timerReset()
    });
};
function timerReset(){
    $('#indexSlider > .slider-container').slick('slickNext');
    $('.slider-bar').animate({
        width: '0%'
    }, 0, function(){
        timer();
    });
}
timer();

// window.setInterval(function(){
//     $('.slider-bar').removeClass('full');
//     $('.slider-bar').addClass('full');
// }, 2000);

$('#indexSlider > .slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // fade: true,
    nextArrow: '<div class="arrow-container next"><div class="arrow next"></div</div>',
    prevArrow: '<div class="arrow-container prev"><div class="arrow prev"></div</div>',
    // autoplay: true,
    // autoplaySpeed: 1600,
    cssEase: 'ease-out',
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
    $(this).parent().toggleClass('active');
})

$('#navbar li').on('click', function(e){
    // e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }
    else {
        $('#navbar li').removeClass('active');
        $(this).addClass('active');
    }
});

$('.mobile-handle').on('click', function(){
    $(this).toggleClass('active');
    $('#navbar .right').toggleClass('active');
});

$('.vision-flex .flex-module').on('mouseenter', function(){
    $('.vision-flex .flex-module').removeClass('active');
    $(this).addClass('active');
});

$('.full-input').on('focus', function(){
    $(this).parent().find('.floating-placeholder').addClass('active');
});

var tempVar;

$('#videoFlex > .flex-module').on('click', function(){
    joPopup();
    tempVar = $(this).find('.content').html();
    console.log(tempVar);
    $('#jo-popup').find('.content-container').append(tempVar);

});

$('#jo-popup > .fader').on('click', function(){
    joPopup();
    $('#jo-popup').find('.content-container').empty();
});

function joPopup(){
    $('#jo-popup').toggleClass('active');
}

$('.filter-parent-handle').on('click', function(){
    $(this).parent().toggleClass('active');
});

$('.view-all-brand').on('click', function(){
    console.log('asd');
    $(this).parent().find('.partner-flex').toggleClass('active');
});

var tempVar;

$('#productDetail .product-box img').on('click', function(){
    tempVar = $(this).attr('src');
    console.log(tempVar);
    $('#productDetail .product-preview img').attr('src', tempVar)
});
