//DOM
var adicionarb = document.querySelector('input#but')
var verificarb = document.querySelector('input#verificar')
var num = document.querySelector('input#num')
var tab = document.querySelector('select')
var res = document.querySelector('div#res')

//VARIAVEIS GLOBAIS (?)
var listan = []
var soma = Number('')


//BOTÕES
adicionarb.addEventListener('click', adicionar)
verificarb.addEventListener('click', verificar)

function adicionar () {
    var numv = Number(num.value)

    if (listan.indexOf(numv) >= 0 || num.value.length == 0 || numv < 1 || numv > 100) {
        window.alert('Por favor, digite um número válido!')
    } else {
        listan.push(numv)
        item = document.createElement('option')
        item.text = `Número ${numv} adicionado`
        tab.appendChild(item)
        soma += numv
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function verificar () {
        if (listan.length == 0) {
            window.alert('Não há valores!')
        } else {
            listan.sort((a, b) => a - b) //ORGANIZAR OS NÚMEROS EM ORDEM

            res.innerHTML = ''
            res.innerHTML += `Ao todo, temos ${listan.length} número(s)! <br>`
            res.innerHTML += `O maior valor é ${listan[listan.length - 1]}! <br>`
            res.innerHTML += `O menor valor é ${listan[0]}! <br>`
            res.innerHTML += `Somando tudo temos ${soma}! <br>`
            res.innerHTML += `A média é ${(soma / listan.length).toFixed(2).replace('.', ',')}!`
        }
        
}
