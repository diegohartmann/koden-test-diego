$(document).ready(function(){
    LoadCardsDynamicaly(`${window.location.href}/../js/jsons/servicos-cards.json`);
});
function LoadCardsDynamicaly (_jsonPath) {
    const itemsContainer = $('.cards-container');
    $.getJSON(_jsonPath, function(data){
        data.forEach(card => {
            appendCard(itemsContainer, card);
        });
    }).fail(function(){
        console.log("Erro ao ler arquivo .json de 'servicos-cards'")
        for (let index = 0; index < 8; index++) {
            appendCard(itemsContainer, {
                title: "Erro ao ler ítem.",
                about: "Ocorreu um problema ao tentar carregar as informações deste item.",
                color: "#ccc"
            });
        }
    });
}
function appendCard(_container, _card){
    _container.append(getCardHTML(_card) )
}
const getCardHTML = (__card) =>{
    return `
        <div class="card-single">
            <div style="margin-bottom: 30px; height: 2px; width: 100%; background-color: ${__card.color};"></div>
            <h2><b>${__card.title}</b></h2>
            <p>${__card.about}</p>
        </div> 
    `
}