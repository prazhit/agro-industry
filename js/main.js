// -----------------Pre-Loader-----------------

var preloader = document.getElementById('loader');
function myFunction(){
	preloader.style.display='none';
}


// --------------Menu ------------------

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



$(window).on('scroll',function(){
    let bodyScroll = $(window).scrollTop()
    if(bodyScroll>10){
        $('#myNav').css({'width':'0'})
    }
    if(bodyScroll>200){
        $('#bars').css({'color':'green','transition':'.5s'});
        $('.menu .atag, #logo').css({'opacity':'0','transition':'.5s'});
    }
    else{
        $('#bars').css({'color':'white'})
        $('.menu .atag, #logo').css({'opacity':'1'});

    }
});




// -------------------------Slider Owl Carousel--------------------

$('.slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 20000,
    autoplayHoverPause: false,
    autoplaySpeed: 1000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    mouseDrag: false,
    touchDrag: true,
    autoWidth: true,
    // freeDrag : true,
    // pullDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        
    }
});

var owl = $('.slider');
owl.owlCarousel();

owl.click(function() {
   owl.trigger('next.owl.carousel');

});





// ----------------------Magnific Popup-----------------

$(document).ready(function() {
    $('#movie').magnificPopup({
        type:'iframe',
        closeBtnInside: false,
        callbacks: {
            resize: changeImgSize,
            imageLoadComplete:changeImgSize,
            change:changeImgSize
        },
       
    });

    function changeImgSize(){
        var mov = this.content.find('video');
        mov.css('max-height', '800px');
        mov.css('width', 'auto');
        mov.css('max-width', 'auto');
    }
});


// -----------------------World Owl Carousel-------------------

$('.world').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 20000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    mouseDrag: true,
    touchDrag: true,
    autoWidth: true,
    // freeDrag : true,
    // pullDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        
    }
});

// -----------------------Agriculture Carousel------------

$('.agriculture, .construction').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 20000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    mouseDrag: true,
    touchDrag: true,
    // autoWidth: true,
    // freeDrag : true,
    // pullDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        
    }
});


// -----------------------The Smart Way--------------------

$('#smart').one('click',function(){

    $('#smart-text').css({"width":"50%"});
    $('#smart').css({"margin-right":"50%","cursor":"default"});

    $('.smart-title #s').css({"color":"green","transition":"1s"});
 
     

});



$('.smart-title #s').click(function(){
    $('#smart-text .social').fadeIn(1000);
    $('#smart-text .making').fadeOut(500);
    $('#smart-text .involve').fadeOut(500);
    $('#smart-text .response').fadeOut(500);
    $('#smart-text .together').fadeOut(500);
    $('.smart-title #s').css({"color":"green","transition":"1s"});
    $('.smart-title #m').css({"color":"white","transition":"1s"});
    $('.smart-title #a').css({"color":"white","transition":"1s"});
    $('.smart-title #r').css({"color":"white","transition":"1s"});
    $('.smart-title #t').css({"color":"white","transition":"1s"});
    
});

$('.smart-title #m').click(function(){
    $('#smart-text .social').fadeOut(500);
    $('#smart-text .making').fadeIn(1000);
    $('#smart-text .involve').fadeOut(500);
    $('#smart-text .response').fadeOut(500);
    $('#smart-text .together').fadeOut(500);
    $('.smart-title #s').css({"color":"white","transition":"1s"});
    $('.smart-title #m').css({"color":"green","transition":"1s"});
    $('.smart-title #a').css({"color":"white","transition":"1s"});
    $('.smart-title #r').css({"color":"white","transition":"1s"});
    $('.smart-title #t').css({"color":"white","transition":"1s"});
});

$('.smart-title #a').click(function(){
    $('#smart-text .social').fadeOut(500);
    $('#smart-text .making').fadeOut(500);
    $('#smart-text .involve').fadeIn(1000);
    $('#smart-text .response').fadeOut(500);
    $('#smart-text .together').fadeOut(500);
    $('.smart-title #s').css({"color":"white","transition":"1s"});
    $('.smart-title #m').css({"color":"white","transition":"1s"});
    $('.smart-title #a').css({"color":"green","transition":"1s"});
    $('.smart-title #r').css({"color":"white","transition":"1s"});
    $('.smart-title #t').css({"color":"white","transition":"1s"});
});

$('.smart-title #r').click(function(){
    $('#smart-text .social').fadeOut(500);
    $('#smart-text .making').fadeOut(500);
    $('#smart-text .involve').fadeOut(500);
    $('#smart-text .response').fadeIn(1000);
    $('#smart-text .together').fadeOut(500);
    $('.smart-title #s').css({"color":"white","transition":"1s"});
    $('.smart-title #m').css({"color":"white","transition":"1s"});
    $('.smart-title #a').css({"color":"white","transition":"1s"});
    $('.smart-title #r').css({"color":"green","transition":"1s"});
    $('.smart-title #t').css({"color":"white","transition":"1s"});
});

$('.smart-title #t').click(function(){
    $('#smart-text .social').fadeOut(500);
    $('#smart-text .making').fadeOut(500);
    $('#smart-text .involve').fadeOut(500);
    $('#smart-text .response').fadeOut(500);
    $('#smart-text .together').fadeIn(1000);
    $('.smart-title #s').css({"color":"white","transition":"1s"});
    $('.smart-title #m').css({"color":"white","transition":"1s"});
    $('.smart-title #a').css({"color":"white","transition":"1s"});
    $('.smart-title #r').css({"color":"white","transition":"1s"});
    $('.smart-title #t').css({"color":"green","transition":"1s"});
});


// $(window).resize(function(){
//     if ($(window).width() < 767) {  
// location.reload();
           
// $('#smart-text').bind('click',function(){
//     $(this).unbind('click');
//     $('#smart-text .making').fadeIn(1000);
//     $('#smart-text .social').fadeOut(500);
//     $('#smart-text .involve').fadeOut(500);
//     $('#smart-text .response').fadeOut(500);
//     $('#smart-text .together').fadeOut(500);



//     $('#smart-text').bind('click',function(){
//         $(this).unbind('click');
//         $('#smart-text .making').fadeOut(500);
//         $('#smart-text .social').fadeOut(500);
//         $('#smart-text .involve').fadeIn(1000);
//         $('#smart-text .response').fadeOut(500);
//         $('#smart-text .together').fadeOut(500);
    

//         $('#smart-text').bind('click',function(){
//             $(this).unbind('click');
//             $('#smart-text .making').fadeOut(500);
//             $('#smart-text .social').fadeOut(500);
//             $('#smart-text .involve').fadeOut(500);
//             $('#smart-text .response').fadeIn(1000);
//             $('#smart-text .together').fadeOut(500);
            

//             $('#smart-text').bind('click',function(){
//                 $(this).unbind('click');
//                 $('#smart-text .making').fadeOut(500);
//                 $('#smart-text .social').fadeOut(500);
//                 $('#smart-text .involve').fadeOut(500);
//                 $('#smart-text .response').fadeOut(500);
//                 $('#smart-text .together').fadeIn(1000);

            
//             });
//         });

//     });
   
// });




//     }     

// });




