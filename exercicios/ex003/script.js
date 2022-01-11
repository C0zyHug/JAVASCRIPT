
function clicar () {
    var init = document.querySelector('input#inicio')
    var fimt = document.querySelector('input#fim')
    var past = document.querySelector('input#passo')
    var div = document.getElementById('res')

    if (init.value.length == 0 || fimt.value.length == 0 || past.value.length == 0 || past.value <= 0) {
        window.alert('Não posso continuar!')
    } else {
        div.innerHTML = 'Contando...'
            //CONTAGEM CRESCENTE
        if (Number(init.value) < Number(fimt.value)) {
            for (var c = Number(init.value); c <= Number(fimt.value); c += Number(past.value)) {
                    div.innerHTML += `<br> ${c}`
            }
            //CONTAGEM REGRESSIVA
        } else {
            for (var c = Number(init.value); c >= Number(fimt.value); c -= Number(past.value)) {
                    div.innerHTML += `<br>${c}`
            }
        }
    }
}