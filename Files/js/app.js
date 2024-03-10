

ScrollReveal({ distance: '90px' });
ScrollReveal().reveal('.reveal-left', { origin: 'left' });
ScrollReveal().reveal('.reveal-right', { origin: 'right' });

VanillaTilt.init(document.querySelectorAll(".data-tilt"), {
    max: 15,
    speed: 400
});

function ScrollIntoFrame(id){
    // let section = document.querySelectorAll(".section-".concat(wut));


    document.getElementById(id).scrollIntoView();
    // ('section#' + id)[0].scrollIntoView();
    // section.scrollIntoView({behavior: 'smooth'})
}