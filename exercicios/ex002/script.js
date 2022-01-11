function clicar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var anod = document.querySelector('input#idade')
    var res = document.querySelector('div#res')



    if (anod.value > anoatual || anod.value.length == 0 || anod.value <= 1900) {
        window.alert('Valor inválido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(anod.value)
        var gen = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'M'
            if (idade <= 10) {
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade <= 18) {
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        }else {
            gen = 'F'
            if (idade <= 10) {
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade <= 18) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img) 
    }
    
}