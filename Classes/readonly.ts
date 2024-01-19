class Carro{
    public readonly modelo:string
    public readonly marca:string
    public readonly features:object

    constructor(modelo:string, marca:string, features: object){
        this.modelo = modelo,
        this.marca = marca,
        this.features = features
    }
}

const carro = new Carro('320i', 'bmw', {
    volante:'Modificado',
})

console.log(carro)

// carro.marca = 'audi' -> propriedade somente leitura


class CarroEsportivo extends Carro{
    public readonly tipo:string = 'Esportivo'
    public readonly tracao: string

    constructor(modelo:string,marca:string,features:object, tracao:string){
        super(modelo, marca, features)
        this.tracao = tracao
    }
}

const carroEsportivo = new CarroEsportivo('320i','bmw',{volante:'Modificado'},'Traseira')
console.log(carroEsportivo)