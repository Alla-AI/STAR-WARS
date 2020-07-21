$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        navClass: ["slider-left", "slider-right"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
  });