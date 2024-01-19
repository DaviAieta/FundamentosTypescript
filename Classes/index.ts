/*
    public -> Pode ser acessado pela mesma classe,
    classes filhas e outras classes.

    protected -> Pode ser acessado pela mesma classe e
    classes filhas, nao pode ser acessado por outras classes

    private -> Pode ser acessado somente pela mesma classe

*/

class Pessoa{
   public nome: string
   public sobrenome: string
   public idade: number

    constructor(nome:string, sobrenome:string , idade:number){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    public comer = (comida: string) => {
        return `O ${this.nome} comeu ${comida}`
    }

    public fezAniversario = () => {
        return `O ${this.nome} fez ${++this.idade} anos`
    }

    public getNomeCompleto = () => {
        return this.nome + this.sobrenome
    }

}

// Heranca:
class Cliente extends Pessoa{
    public plano: string
    private _profissao: string = 'Engenheiro'

    constructor(nome:string, sobrenome:string , idade:number, plano:string){
        super(nome, sobrenome, idade)
        this.plano = plano
    }

    public tipoPlano = () => {
        return `${this.nome} tem acesso a conteudos do plano ${this.plano}`
    }

    get profissao() {
        return this._profissao
    }

    set profissao(profissao: string){
        this._profissao = profissao 
    }

}

const cliente = new Cliente('Davi', 'Carvalho', 14, 'Premium')
console.log(cliente.tipoPlano())

cliente.profissao = 'Programador'
console.log('Profissao: ' + cliente.profissao)