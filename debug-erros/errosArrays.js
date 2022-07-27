function validaArray(array, num){
   
    try {
     if(!array && !num) throw new ReferenceError('Envie os parâmetros');

    if(typeof array !== 'object') throw new TypeError('Array precisa ser do tipo object');

    if(typeof array !== 'number') throw new RangeError('Array precisa ser do tipo number');

    return array;
} catch (error) {
    if(error instanceof ReferenceError){
        console.log('Este erro é um ReferenceError!')
        console.log(error.message);
    }

    if(error instanceof TypeError){
        console.log('Este erro é um TypeError!')
        console.log(error.message);
    }

    if(error instanceof RangeError){
        console.log('Este erro é um RangerError!')
        console.log(error.message);
    }else{
        console.log('Tipo de erro não esperado + e');
    }
}
}

console.log(validaArray());