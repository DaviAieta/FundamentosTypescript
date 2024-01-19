const funcao = (nome: string, idade?:number) => {
    if(!idade){
        return `Nome: ${nome}, Idade sem valor definido`
    }
    return `Nome: ${nome}, Idade: ${idade}`
}

console.log(funcao('Davi'))
console.log(funcao('Davi', 14))