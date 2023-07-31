const findMissingNumb=(num)=>{
    let i=1;
    const size=num.length+i;
    let sum = (size*(size+1))/2 ; //sum of first n natural numbers

    //calculate the total sum of the array elements
    let totalSum=0;
    num.map((items)=>{
            totalSum+=items
    })

    return (sum-totalSum) //returning the value of missing number


}

let resultofMissingNum=findMissingNumb([1,3,4,5,6]);
console.log(resultofMissingNum)