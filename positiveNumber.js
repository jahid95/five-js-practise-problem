const numbers = [10,5,20,-2,5,3,-9];

function positiveNumber(array){
    let positiveNumber =[];
    for(let i=0; i<array.length; i++){
        const number = array[i];
        if(number>=0){
            positiveNumber.push(number);   
            
        }
         else if(number <= -1){
            break;
        }
        
    }
    return positiveNumber;
}

const output = positiveNumber(numbers);
console.log(output);