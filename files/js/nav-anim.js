$(document).ready(Init());    

function Init(){
    const page = $('html,body');
    const menuItems = $('header nav ul li a');
    menuItems.click(function(e){
        const tthisHref = $(this).attr('href');
        if(tthisHref !== 'afiliado.html' || tthisHref !== 'index.html'){
            e.preventDefault();
            e.stopPropagation();
            animatePageTo(page, tthisHref);
            return false;
        }
    });
}
function animatePageTo(_page, _section){
    _page.animate({
        'scrollTop': $(_section).offset().top,
    })
}