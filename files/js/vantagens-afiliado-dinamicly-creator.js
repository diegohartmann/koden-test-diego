$(document).ready(function(){
    LoadServicesDynamicaly(`${window.location.href}/../js/jsons/vantagens-afiliado.json`);
});
function LoadServicesDynamicaly (_jsonPath) {
    const itemsContainer = $('.vantagens-itens');
    $.getJSON(_jsonPath, function(data){
        data.forEach(service => {
            appendService(itemsContainer, service);
        });
    }).fail(function(){
        console.log("Erro ao ler arquivo .json de 'vantagens'")
        appendService(itemsContainer, "Erro. Recarregue a página.");
    });
}
function appendService(_container, _service){
    _container.append( getServiceHTML(_service) )
}
const getServiceHTML = (__service) =>{
    return `
        <div class="item-single">
            <img src="assets/img/eumei-list-style.png" alt="vantagem">
            <p>${__service}</p>
        </div>
    `
}