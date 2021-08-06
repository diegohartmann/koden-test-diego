$(document).ready(Init());

function Init(){
    const openButton = $('input#earn-calc-button');
    const calcWindow = $('#earn-calc-window');
    const closeButton = calcWindow.find('#earn-calc-window-close');
    const calcButton = calcWindow.find('div#calc-button')
    const numInput = calcWindow.find('input#numInput');
    const priceInput = calcWindow.find('input#priceInput');
    const yourMessP = calcWindow.find('p#your-result-message');
    const totalMessP = calcWindow.find('p#total-result-message');

    openButton.click(function(){
        calcWindow.animate({
            'height' : '200px',
            // 'padding': '20px 0 0 0;'
        })
    })
    closeButton.click(function(){
        calcWindow.animate({
            'height' : '0',
            // 'padding': '0;'
        })
    })
    calcButton.click(function(){
        const totalSale = (parseInt(numInput.val()) * parseInt(priceInput.val()));
        const yourSale = totalSale * (60/100);
        const yourResult = `Seu ganho é de <b><span style="color:#00cf89">${formatter.format(yourSale)}</span></b>`;
        if(totalSale){
            yourMessP.html(yourResult);
            const totalResult = `Para um total vendido de <b>${formatter.format(totalSale)}</b>.`;
            totalMessP.html(totalResult);
            console.log(yourResult);
            console.log(totalResult);
        }
    })
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL',
    });
}