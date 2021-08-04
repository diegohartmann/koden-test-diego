$(document).ready(function (){
    LoadItems(`${window.location.href}/js/jsons/planos.json`);
});
function LoadItems (_jsonPath) {
    const itemsContainer = $('.planos-container');
    $.getJSON(_jsonPath, function(data){
        data.forEach(planoSingle => {
            appendInContainer(itemsContainer, planoSingle);
        });
    }).fail(function(){
        console.log("Erro ao ler arquivo .json de 'serviços'")
        appendInContainer(itemsContainer, "Erro. Recarregue a página.");
    });
}
function appendInContainer(_container, _planoSingle){
    _container.append(getPlanoSingleHTML(_planoSingle.price, _planoSingle.about, _planoSingle.planNum, getItemsHTML(_planoSingle.items)));
}
function getPlanoSingleHTML(_price, _about, _planNum, _getItemsHTML){
    return `<div class="plano-single">
        <div class="plano-box">
            <h2>Plano ${_planNum}</h2>
            <h1>R$ ${_price},00</h1>
            <p>${_about}</p>
            <input type="submit" value="QUERO ESSE PLANO" class="greenButton">
        </div>
        <h3>Inclusos neste plano:</h3>
        <ul style="list-style-type: none; color: white;">
            ${_getItemsHTML}
        </ul>
    </div>`
}
function getItemsHTML(_items){
    let itemsHTML = '';
    _items.forEach(element => {
        itemsHTML += `<li><img src="assets/img/check.png" alt="plano">${element}</li>`;
    });
    return itemsHTML;
}