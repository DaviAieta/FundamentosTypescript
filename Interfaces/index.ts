/*
    As interfaces em typescript definem contratos no codigo
    E fornecem nomes explicitos para verificacao de tipo
*/

interface IPessoa{
    nome: string,
    idade: number
}

const pessoa: IPessoa = {nome: 'Davi', idade: 14}