enum racas {
    Golden = 'Golden',
    Shitzou = 'Shitzou',
}


const cachorro: {nome: string, raca: string} = {
    nome: 'Raiko',
    raca: racas.Golden
}

console.log(cachorro.nome + ' - ' + cachorro.raca)