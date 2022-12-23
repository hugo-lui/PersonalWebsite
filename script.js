let currentYear = new Date().getFullYear();
let birthYear = 2004;
document.getElementById("currentAge").innerHTML = currentYear - birthYear;
let typed = new Typed(".auto-type", {
    strings: ["^500Hugo Lui^1000", "^500a Developer^1000"],
    typeSpeed: 100,
    backSpeed: 100
})
$(window).scroll(function() {
    $('.fade').each(function() {
        const top_of_element = $(this).offset().top;
        const bottom_of_element = $(this).offset().top + $(this).outerHeight();
        const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        const top_of_screen = $(window).scrollTop();

        if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('visible')) {
            $(this).addClass('visible');
        }
        else if(((bottom_of_screen < top_of_element) || (top_of_screen > bottom_of_element)) && $(this).hasClass('visible')){
            $(this).removeClass('visible');
        }
    });
});