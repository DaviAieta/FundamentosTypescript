class Pessoa{
    nome: string
    sobrenome: string
    idade: number

    constructor(nome:string, sobrenome:string , idade:number){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    comer(comida: string){
        return `O ${this.nome} comeu ${comida}`
    }

    fezAniversario(){
        return `O ${this.nome} fez ${++this.idade} anos`
    }

    nomeCompleto(){
        return this.nome + this.sobrenome
    }

}

const pessoa = new Pessoa('Davi', 'Carvalho', 14)
console.log(pessoa.comer('arroz'))
console.log(pessoa.fezAniversario())