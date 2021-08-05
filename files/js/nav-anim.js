$(document).ready(Init());    

function Init(){
    const page = $('html,body');
    const menuItems = $('header nav ul li a');
    menuItems.click(function(e){
        const tthisHref = $(this).attr('href');
        if(tthisHref !== 'afiliado.html'){
            e.preventDefault();
            e.stopPropagation();
            animatePageTo(page, tthisHref);
            return false;
        }
    });
}

function animatePageTo(_page, _el){
    _page.animate({
        'scrollTop': $(_el).offset().top,
    })
}