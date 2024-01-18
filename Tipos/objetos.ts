let pessoa: {nome: string, sobrenome: string, idade: number} = {
    nome: 'davi',
    sobrenome: 'carvalho',
    idade: 14,
    
}
const getNomeCompleto = (objeto:any) =>{
    return `${objeto.nome} ${objeto.sobrenome}` 
}

let fruta = [
    {
        nome: 'Banana',
        cor: 'Amarelo',
    }
]

console.log(fruta)