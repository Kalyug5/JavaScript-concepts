const incrementCounter=()=>{ //parent function
    let counter=0;
    const innerCounter=()=>{ //inner function
        counter++;
        console.log(counter);
    }

    return innerCounter
}

let myIncrementer =incrementCounter(); // returns the function which increments and logs to console everytime it is called
myIncrementer(); //now the myIncrement variable can be used as function which will return the inner function values know as closures.