$(document).ready(Init());

function Init(){
    let dataPath = `${window.location.href}/js/jsons/servicos.json`
    LoadServicesDynamicaly(dataPath);
}
function LoadServicesDynamicaly (_jsonPath) {
    const itemsContainer = $('.diff-items');
    $.getJSON(_jsonPath, function(data){
        data.forEach(service => {
            appendInContainer(itemsContainer, service);
        });
    }).fail(function(){
        console.log("Erro ao ler arquivo .json de 'serviços'")
        appendInContainer(itemsContainer, "Erro. Recarregue a página.");
    });
}

function appendInContainer(_container, _service){
    _container.append(serviceHTML(_service))
}

const serviceHTML = (__service) =>{
    return `
        <div class="item-single">
            <img src="assets/img/eumei-list-style.png" alt="servico">
            <p>${__service}</p>
        </div>
    `
}
