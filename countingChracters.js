
const CountCharacter=(str)=>{
    // declaring the empty object to store the value of counts
    objCount={};
    str=str.toLowerCase();

    for(let text of str) {
        if (/[a-z]/.test(text)) {
            objCount[text]=(objCount[text] || 0) +1;
            
        }

    };
    console.log(objCount)

    

}

CountCharacter("abbrxyzbbgs");