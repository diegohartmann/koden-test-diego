$(document).ready(Init());    

function Init(){
    const page = $('html,body');
    const menuItem = $('header nav ul li');
    menuItem.click(function(e){
        const tthisHref = $(this).find('a').attr('href');
        if(isInPageLink(tthisHref)){
            e.preventDefault();
            e.stopPropagation();
            animatePageTo(page, tthisHref);
            return false;
        }
    });
}
function isInPageLink(_href){
    return  _href !== 'afiliado.html'
            && _href !== './'
            && _href !== '../files/'
            && _href !== '../'
}
function animatePageTo(_page, _section){
    _page.animate({
        'scrollTop': $(_section).offset().top,
    })
}