/*
    Os [] representam a quantidade de itens e seu tipo
    array: [string, string] = ['string1', 'string2']

    <> a quantidade pode ser infinita, porem o\
    seu tipo eh definido

    string OU number
    array2: Array<string | number> = ['Davi', 'Rodrigo', 123]

*/
let array1: [string, string] = ['Davi', 'Rodrigo']

let array2: Array<string | number | object> = ['Davi', 14, {
    roupas: {
        blusa: {
            cor: 'preta',
            tamanho: 'M'
        },
        tenis:{
            marca: 'nike',
            cor: 'branco',
            tamanho: '42'
        }
    }
}]

console.log(array2)