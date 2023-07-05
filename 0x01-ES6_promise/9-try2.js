function divideFunction(numerator, denominator) {
    if(denominator === 0){
        throw new Error(`cannot divide by 0`)
    }else {
        return numerator/denominator;
    }
}

console.log(divideFunction(10, 2));
//console.log(divideFunction(10, 0));


function guardrail(mathFunction){
    const queue = [];
    try{
        const result = mathFunction();
        queue.push(result); //Guardrail was processed
    }catch(Error){
        queue.push(Error.message)
    }finally{
        queue.push(`result 'Guardrail was processed'`)
    }
    return queue;
}
console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
