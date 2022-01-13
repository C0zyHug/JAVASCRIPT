function fatorial(v) {
    let fat = 1
    for (let c = v; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))