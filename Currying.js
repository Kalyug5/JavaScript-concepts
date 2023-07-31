//It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.

const fistPara=(a)=>{
     return function(b){
        return function(c){
            return a+b+c;
        }
     } 
}


let result=fistPara(1) (2) (3) //calling the function having multiple argument functions
console.log(result)