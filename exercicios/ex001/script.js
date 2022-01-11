function relogio() {
    var agora = new Date()
    //var hora = agora.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) //função .toLocaleTimeString sem segundos
    var hora = agora.toLocaleTimeString()
    var img = document.querySelector('img')
    var dtn = document.querySelector('h1')

    document.querySelector('h2').innerHTML = `Agora são ${hora}`


    if (hora > 0 && hora < 6) {
        img.src = 'imagens/imadruga.png'
        document.body.style.background = '#9DBDB8'
        dtn.innerHTML = 'Boa Madrugada!'
    } else if (hora <= 12) {
        img.src = 'imagens/idia.png'
        document.body.style.background = '#FE7841'
        dtn.innerHTML = 'Bom Dia!'
    } else if (hora < 18 ) {
        img.src = 'imagens/itarde.png'
        document.body.style.background = '#E16B00'
        dtn.innerHTML = 'Boa Tarde!'
    } else {
        img.src = 'imagens/inoite.png'
        document.body.style.background = '#324F57'
        dtn.innerHTML = 'Boa Noite!'
    }
    window.setInterval('relogio()', 1000)
}

