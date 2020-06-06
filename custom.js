$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        padding:120,
        margin:20,
        responsiveClass:true,
        autoWidth:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:3,
               
            },
            1000:{
                items:5,
                
            }
        }
    })
  });