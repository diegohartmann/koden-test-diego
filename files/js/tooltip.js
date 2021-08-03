$(document).ready(Init());

function Init(){
    const tip = $('.em-andamento-tooltip');
    const tipText = tip.find('p');
    const _html = $('html');
    const defaultColorCSS = 'white';
    const warningColorCSS = 'rgb(240, 240, 76)';
    const errorColorCSS = 'red';
    
    _html.on("mouseenter", ".defaultTip", function() {
        SeguirMouse();
        CSSEnter(tip, tipText, "Descricao sobre...", defaultColorCSS);
    });
    _html.on("mouseleave", ".defaultTip", function() {
        PararSeguirMouse();
        CSSExit(tip);
    });
    
    _html.on("mouseenter", ".warningTip", function() {
        SeguirMouse();
        CSSEnter(tip, tipText, "Não é possível ler", warningColorCSS);
    });
    _html.on("mouseleave", ".warningTip", function() {
        PararSeguirMouse();
        CSSExit(tip);
    });
    _html.on("mouseenter", ".errorTip", function() {
        SeguirMouse();
        CSSEnter(tip, tipText, "Erro", errorColorCSS);
    });
    _html.on("mouseleave", ".errorTip", function() {
        PararSeguirMouse();
        CSSExit(tip);
    });
}

function CSSEnter(_tip, _tipText, _text, _color = defaultColorCSS){
    _tipText.html(_text);
    _tip.css('background-color', _color);
    _tip.css('display','block');
}
function CSSExit(_tip){
    _tip.css('display','none');
}
function SeguirMouse(_tip){
    document.addEventListener('mousemove', function(event){
        _tip.css('left', event.pageX - 45 + 'px')
        _tip.css('top', event.pageY - 21 + 'px')
    });
}
function PararSeguirMouse(){
    //nao sei ainda como fazer pra remover o evento
    // ??? document.removeEventListener('mousemove',self.onInputMove); ???
}