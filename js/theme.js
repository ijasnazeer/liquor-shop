
//  Theme Custom jquery file, 

    // Created on   : 13/08/2019.
    // Theme Name   : Cukape.
    // Description  : Caramello.
    // Version      : 1.0.
   



"use strict";

// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  var inputField = $("input,textarea");
  if (inputField.length) {
    inputField.each(
        function(){
        $(this).data('holder',$(this).attr('placeholder'));
        $(this).on('focusin', function() {
            $(this).attr('placeholder','');
        });
        $(this).on('focusout', function() {
            $(this).attr('placeholder',$(this).data('holder'));
        });
            
    });
  }
}


// Theme-banner slider 
function BannerSlider () {
  var banner = $(".banner-one");
  if (banner.length) {
    banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
      height: '940px',
      pagination: false,
      navigation: false,
      thumbnails: false,
      playPause: false,
      pauseOnClick: false,
      autoPlay:true,
      hover: false,
      overlayer: true,
      loader: 'none',
      minHeight: '650px',
      time: 4000,
    });
  };
}


// Theme-banner slider 
function BannerSliderTwo () {
  var bannertwo = $(".banner-two");
  if (bannertwo.length) {
    bannertwo.camera({ //here I declared some settings, the height and the presence of the thumbnails 
      height: '730px',
      pagination: false,
      navigation: false,
      thumbnails: false,
      playPause: false,
      pauseOnClick: false,
      autoPlay:true,
      hover: false,
      overlayer: true,
      loader: 'none',
      minHeight: '650px',
      time: 400000,
    });
  };
}

// hiddenBarToggler
function hiddenBarToggler () {
  var subMenu = $ (".aside-menu-wrapper ul li.dropdown-holder>a"),
      expender = $ (".aside-menu-wrapper ul li.dropdown-holder .expander");

    if ($('.close-aside-menu').length) {
      $('.close-aside-menu').on('click', function () {
        $('#hidden-aside-menu').removeClass("show-menu");
      });
    };
    if ($('.toggle-show-menu-button').length) {
      $('.toggle-show-menu-button').on('click', function () {
        $('#hidden-aside-menu').addClass("show-menu");
      });
    };

    subMenu.on("click", function (e) {
        e.preventDefault();
    });

    subMenu.append(function () {
      return '<button type="button" class="expander"><i class="fa fa-chevron-down" aria-hidden="true"></i></button>';
    });
    subMenu.on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    });
}



// WOW animation 
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated) 
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  }
}

// Mixitup gallery
function mixitupGallery () {
  if ($("#mixitUp-item").length) {
    $("#mixitUp-item").mixItUp()
  };
}


// Popular Item Slider 
function popularItemSlider () {
  var pslider = $ (".portfolio-slider-one");
  if(pslider.length) {
      pslider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1200,
        lazyLoad:true,
        autoplayHoverPause:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            700:{
                items:3
            },
            992:{
                items:4
            }
        }
    })
  }
}

// Client Slider 
function clientSlider () {
  var pslider = $ ("#client-slider");
  if(pslider.length) {
      pslider.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1000,
        lazyLoad:true,
        autoplayHoverPause:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
  }
}


// Partner Logo Footer 
function partnersLogo () {
  var logoslider = $ (".partner-sldier");
  if(logoslider.length) {
      logoslider.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:3
            },
            992:{
                items:4
            }
        }
    })
  }
}



// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}



//Contact Form Validation
function contactFormValidation () {
  if($('.form-validation').length){
    $('.form-validation').validate({ // initialize the plugin
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        sub: {
          required: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


// Sticky header
function stickyHeader () {
  if ($('.theme-menu-wrapper').length) {
    var sticky = $('.theme-menu-wrapper'),
        scroll = $(window).scrollTop();

    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    
  };
}


// Accordion panel
function themeAccrodion () {
  if ($('.theme-accordion > .panel').length) {
    $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
          var heading = $(this).find('.panel-heading');
          heading.addClass("active-panel");
          
    });
    $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
          //setProgressBar(heading.get(0).id);
    });
    $('.panel-heading a').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.stopPropagation();
        }
    });
  };
}

// shop price ranger
function priceRanger () {
  if ($('.price-ranger').length) {
    $( '.price-ranger #slider-range' ).slider({
      range: true,
      min: 0,
      max: 1200,
      values: [ 99, 1035 ],
      slide: function( event, ui ) {
        $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + ui.values[ 0 ] );
        $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + ui.values[ 1 ] );
      }
    });
      $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 0 ) );
    $( '.price-ranger .ranger-min-max-block .max' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 1 ) );        
  };  
}


// Product value
function productValue () {
  var inputVal = $("#product-value");
  if(inputVal.length) {
    $("#value-decrease").on('click', function() {
        var v= inputVal.val()-1;
        if(v>=inputVal.attr('min'))
        inputVal.val(v)
      });

    $("#value-increase").on('click', function(){
      var v= inputVal.val()*1+1;
      if(v<=inputVal.attr('max'))
      inputVal.val(v)
    });
  }
}



// Related Product Slider
function productSlider () {
  var pSlider = $ (".related-product-slider");
  if(pSlider.length) {
      pSlider.owlCarousel({
        loop:true,
        nav:true,
        navText: ["",""],
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1000,
        lazyLoad:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
  }
}


// Music Button
function musicPlayOff () {
  var start = $ ("#start");
  var off = $ ("#stop")
  if(start.length) {
      start.on('click', function(){
        $(this).addClass('active')
      });
      off.on('click', function(){
        start.removeClass('active')
      })
  }
}


// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     BannerSlider ();
     BannerSliderTwo ();
     hiddenBarToggler ();
     wowAnimation ();
     popularItemSlider ();
     clientSlider ();
     partnersLogo ();
     scrollToTop ();
     contactFormValidation ();
     closeSuccessAlert ();
     themeAccrodion ();
     priceRanger ();
     productValue ();
     productSlider ();
     musicPlayOff ()
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
		  prealoader ();
      mixitupGallery ()
  })(jQuery);
 });


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ();
  })(jQuery);
});
