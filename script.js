let currentYear = new Date().getFullYear();
let birthYear = 2004;
document.getElementById("currentAge").innerHTML = currentYear - birthYear;

let typed = new Typed(".auto-type", {
    strings: ["^500Hugo Lui^1000", "^500a Software Developer^1000"],
    typeSpeed: 100,
    backSpeed: 100
})

$(window).scroll(function() {
    $('.fade').each(function() {
        const topElement = $(this).offset().top;
        const bottomElement = $(this).offset().top + $(this).outerHeight();
        const bottomScreen = $(window).scrollTop() + $(window).innerHeight();
        const topScreen = $(window).scrollTop();

        if((bottomScreen > topElement) && (topScreen < bottomElement) && !$(this).hasClass('visible')) {
            $(this).addClass('visible');
        }
        else if(((bottomScreen < topElement) || (topScreen > bottomElement)) && $(this).hasClass('visible')){
            $(this).removeClass('visible');
        }
    });
});