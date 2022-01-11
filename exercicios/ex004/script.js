var clique = document.querySelector('input#but')
var num = document.querySelector('input#num')
var tab = document.querySelector('select')

clique.addEventListener('click', clicar)

function clicar () {
    if (num.value.length == 0) {
        window.alert('ARE YOU GAY?')
    } else {
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num.value} X ${c} = ${Number(num.value) * c}`
            tab.appendChild(item)
        }  
    }
}