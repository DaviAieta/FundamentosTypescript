let pessoa: {nome: string, sobrenome: string, idade: number} = {
    nome: 'davi',
    sobrenome: 'carvalho',
    idade: 14,
    
}
const getNomeCompleto = (objeto:any) =>{
    return `${objeto.nome} ${objeto.sobrenome}` 
}

let objeto: Array<{
    nome: string,
    sobrenome: string, 
    idade: number
}> = [
    {
        nome: 'Davi',
        sobrenome: 'Carvalho',
        idade: 14
    },
    {
        nome: 'Rodrigo',
        sobrenome: 'Carvalho',
        idade: 39
    },
    {
        nome: 'Mariana',
        sobrenome: 'Aieta',
        idade: 42
    }
]

console.log(objeto)