$(document).ready(Init());    

function Init(){
    const page = $('html,body');
    const menuItems = $('header nav ul li a');
    menuItems.click(function(e){
        e.preventDefault();
        e.stopPropagation();
        animatePageTo(page, $(this));
        return false;
    });
}

function animatePageTo(_page, _el){
    _page.animate({
        'scrollTop': $(_el.attr('href')).offset().top,
    })
}