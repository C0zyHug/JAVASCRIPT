let amigo = {nome: 'José', idade: '55', peso: '95',
    engordar (p=0) {
        this.peso += p
    }
}

amigo.engordar(9)

console.log(amigo.peso)