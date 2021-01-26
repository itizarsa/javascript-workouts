myArray=[1,1,2,3,4,4,5,6,9]

var a=(function(b){
    uniqueArray=[]
    for (i=0; i<b.length; i++){
        var duplicate=0
        for (j=0; j<uniqueArray.length; j++){
            if (b[i]==uniqueArray[j]){
                var duplicate=duplicate+1
            }
        }
        if (duplicate==0){
            uniqueArray.push(b[i])
        }
    }
    console.log(b)
    console.log(uniqueArray)
})(myArray);