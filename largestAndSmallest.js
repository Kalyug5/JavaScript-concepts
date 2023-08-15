const find=(arr)=>{
    let minimum=arr[0]
    let maximum=arr[0]
    arr.forEach(element => {
        if(maximum<element){
            maximum=element
        }
        if(minimum>element){
            minimum=element
        }
    });
    console.log(`min=${minimum},max=${maximum}`)
}

find([4,7,5,6,8,12])