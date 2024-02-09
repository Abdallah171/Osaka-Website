/// <reference types="../@types/jquery" />

// window.addEventListener('scroll', function() {
//     console.log('hello');
// })

AOS.init();

$('.owl-carousel').owlCarousel();

let sectionOffset = $('#about').offset().top


$(window).on('scroll', function() {
    let windowScroll = ($(window).scrollTop());
    if (windowScroll > sectionOffset - 70) {
        $('.navbar').css('backgroundColor', '#0000009e')
    } else {
        $('.navbar').css('backgroundColor', 'transparent')
    }
})

$('a[href^="#"]').on('click', function(e) {
    let sectionHref = e.target.getAttribute('href');
    console.log(sectionHref);
    let sectionOffset = $(sectionHref).offset().top
    $('body').animate({ scrollTop: sectionOffset }, 2000)
})



$(function() {
    $('.loader').fadeOut(500, function() {
        $('.loading').slideUp(500, function() {
            $('body').css('overflow', 'auto')
            $('.loading').remove()
        })

    })
})