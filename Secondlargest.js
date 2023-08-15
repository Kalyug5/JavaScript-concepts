function SecondLargest(num){
    if(num.length<2){
        console.log("No of Elements should be greater than 2")
        return null
    }
    let largest=num[0]
    let secondLargest=num[1]
    for(let i=1;i<num.length;i++){
        if(num[i]>largest){
            secondLargest = largest
            largest = num[i];
        }
        if(num[i]>secondLargest && num[i]!=largest){
            secondLargest=num[i];
        }
    }
    console.log(`The second largest element is ${secondLargest}`)

}

SecondLargest([2,5,3,1,7,6,8])