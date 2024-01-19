let pessoa: {nome: string, sobrenome: string, idade: number, preferencias: object} = {
    nome: 'davi',
    sobrenome: 'carvalho',
    idade: 14,
    preferencias: {
        time: 'Flamengo',
        comida: 'arabe',
        carro: 'bmw'
    }
}

const getCarro = (objeto:any) =>{
    return `${objeto.preferencias.carro}`
}

console.log(getCarro(pessoa))

const getNomeCompleto = (objeto:any) =>{
    return `${objeto.nome} ${objeto.sobrenome}` 
}

let objeto: Array<{
    nome: string,
    sobrenome: string, 
    idade: number,
    profissao:string
}> = [
    {
        nome: 'Davi',
        sobrenome: 'Carvalho',
        idade: 14,
        profissao: 'adawd'
    },
    {
        nome: 'Rodrigo',
        sobrenome: 'Carvalho',
        idade: 39,
        profissao: 'adawd'
    },
    {
        nome: 'Mariana',
        sobrenome: 'Aieta',
        idade: 42,
        profissao: 'adawd'
    }
]

console.log(objeto)