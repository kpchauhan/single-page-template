new WOW().init();

$(document).ready(function(){           
    
    $(document).on('click', ".menuToggle, .overlay", function () {
        $('header').toggleClass('open');
        return false;
    });
    
    $(".menuToggle").clone().appendTo(".navbar-collapse");

    $('a.color').on('click', function() {
        var title = $(this).attr('title');
        $('#style-colors').attr('href', 'assets/styles/css/' + title + '.css');
        return false;
    });

    $('.setting').on('click', function() {
        $(".style_changer").toggleClass('active');
    });


    // start banner-slider-js
    $('#bannerSlider').on('init', function(event, slick){
        $('.animated').addClass('activate fadeInUp');
    });       

    $('#bannerSlider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus:false,
        swipe : false,
        pauseOnHover: false,
        dots: true,
    });           

    $('#bannerSlider').on('afterChange', function(event, slick, currentSlide) {
        $('.animated').removeClass('off');
        $('.animated').addClass('activate fadeInUp');
    });       

    $('#bannerSlider').on('beforeChange', function(event, slick, currentSlide) {
        $('.animated').removeClass('activate fadeInUp');
        $('.animated').addClass('off');
    });

    setTimeout(function() {
        $('#bannerSlider .slick-prev').prepend('<div class="nav_img"><img src=""></div>');
        $('#bannerSlider .slick-next').append('<div class="nav_img"><img src=""></div>');
        get_prev_slick_img();
        get_next_slick_img();
    }, 500);

    $('#bannerSlider').on('click', '.slick-prev', function() {
        get_prev_slick_img();
    });
    $('#bannerSlider').on('click', '.slick-next', function() {
        get_next_slick_img();
    });
    $('#bannerSlider').on('swipe', function(event, slick, direction) {
        if (direction == 'left') {
            get_prev_slick_img();
        }
        else {
            get_next_slick_img();
        }
    });
    $('#bannerSlider .slick-dots').on('click', 'li button', function() {
        var li_no = $(this).parent('li').index();
        if ($(this).parent('li').index() > li_no) {
            get_prev_slick_img()
        }
        else {
            get_next_slick_img()
        }
    });
    function get_prev_slick_img() {
        var prev_slick_img = $('#bannerSlider .slick-current').prev('.banner_item').find('img').attr('src');
        $('#bannerSlider .slick-prev img').attr('src', prev_slick_img);
        var prev_next_slick_img = $('#bannerSlider .slick-current').next('.banner_item').find('img').attr('src');
        $('#bannerSlider .slick-next  img').attr('src', prev_next_slick_img);
    }
    function get_next_slick_img() {
        var next_slick_img = $('#bannerSlider .slick-current').next('.banner_item').find('img').attr('src');
        $('#bannerSlider .slick-next  img').attr('src', next_slick_img);
        var next_prev_slick_img = $('#bannerSlider .slick-current').prev('.banner_item').find('img').attr('src');
        $('#bannerSlider .slick-prev img').attr('src', next_prev_slick_img);
    }
    // end banner-slider-js

    $('#appSlider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: false,
        dots: false,
        arrows:false
    });   

    
});



$(window).on('scroll', function () {
    if ($(this).scrollTop() > 220) { // Set position from top to add class
        $('header').addClass('sticky_header');
    }
    else {
        $('header').removeClass('sticky_header');
    }
});



var a = 0;
$(window).scroll(function() {

  var oTop = $('#achievement').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
 


$("header .navbar .navbar-collapse .navbar-nav .nav-item a.nav-link").click(function() {
    var id =  $(this).attr('href');
     $('html, body').animate({         
         scrollTop: $(id).offset().top-70
     }, 1000);
 });


$("#mouseScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top-70
    }, 1000);
});

$(".colors_div a.color").click(function(){
  $(".style_changer").removeClass("active");
});


// scroll to id on another page load

var jump=function(e)
{
   if (e){
       e.preventDefault();
       var target = $(this).attr("href");
   }else{
       var target = location.hash;
   }

   $('html,body').animate(
   {
       scrollTop: $(target).offset().top-70
   },2000,function()
   {
       location.hash = target;
   });

}

// $('html, body').hide();

$(document).ready(function()
{
    $('a[href="index.html"]').bind("click", jump);

    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    }else{
        $('html, body').show();
    }
});

// scroll to id on another page load