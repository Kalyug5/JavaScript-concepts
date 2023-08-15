const commonEle=(arr1,arr2)=>{
    const result=[];
    
    for(const item of arr1){
        if(arr2.includes(item)){
            result.push(item)
        }
    }
    console.log(result)
}

commonEle([2,5,3,4,7],[9,4,3,1,8,6])