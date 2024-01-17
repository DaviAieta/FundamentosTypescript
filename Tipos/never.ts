const error = (): never =>{
    throw new Error('Algo deu errado')
}

const validate = (res: any) =>{ 
    if(typeof res === 'string'){
       return console.log('Eh uma string !')
    }else if(typeof res === 'number'){
        return console.log('Eh um numero !')
    }

    console.log(error())
}

validate(123)