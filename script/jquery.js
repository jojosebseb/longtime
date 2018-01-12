$(document).ready(function(){




var slideWidth = $('#indexSlider .slider-bar').width();

var winWidth = $(window).width();

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

$('#indexSlider > .slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
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
    $(this).parent().find('.partner-flex').toggleClass('active');
    if ($(this).parent().find('.partner-flex').hasClass('active')) {
        $(this).html('VIEW LESS');
        console.log('asd');
    }else {
        $(this).html('VIEW ALL');
        console.log('dsa');
    }
});

var tempVar;

$('#productDetail .product-box img').on('click', function(){
    tempVar = $(this).attr('src');
    console.log(tempVar);
    $('#productDetail .product-preview img').attr('src', tempVar)
});

$('.expand-subcat').on('click', function(){
    $(this).parent().toggleClass('active');
    if ($(this).parent().hasClass('active')) {
        $(this).html('-');
    }else {
        $(this).html('+');
    }
});
$('.news-belt.slick').slick({
    slidesToShow: 3,
    infinite: false,
    nextArrow: '<div class="arrow-container next"><div class="arrow next"></div</div>',
    prevArrow: '<div class="arrow-container prev"><div class="arrow prev"></div</div>',
    responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    //   dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
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

$('.latest-product-belt.slick').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    nextArrow: '<div class="arrow-container next"><div class="arrow next"></div</div>',
    prevArrow: '<div class="arrow-container prev"><div class="arrow prev"></div</div>',
    responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    //   dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
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

console.log('asd');
var imgUrl, posX, posY;

$('.product-preview').on('mouseenter', function(){
    $('.product-zoom').addClass('active');
    imgUrl = $(this).find('img').attr('src');
    $('.product-zoom').css({
        'background-image': 'url('+imgUrl+')'
    });
    $(this).on('mousemove', function(e){
        var parentOffset = $(this).offset();
        //or $(this).offset(); if you really just want the current element's offset
        posX = e.pageX - parentOffset.left;
        posY = e.pageY - parentOffset.top;
        $('.product-zoom').css({
            'background-position': -(posX-50)+'px ' +-(posY-50)+'px'
        });
    });
    $(this).on('mouseleave', function(){        
        $('.product-zoom').removeClass('active');
    });
});


});
