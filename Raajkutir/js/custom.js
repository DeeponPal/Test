$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    singleItem:true,
    stagePadding: 0,
    nav:true,
    navText: ["<span class='prev-arrow'></span>","<span class='next-arrow'></span>"],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})