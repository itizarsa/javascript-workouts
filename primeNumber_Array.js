// Using IIFE

(function(b){
    for (i=0; i<b.length; i++)
    {
        if (b[i]<=1){
            continue
        }
        else if (b[i]==2){
            console.log(b[i])
        }
        else{
            var prime=0;
            for (j=2; j<b[i]; j++){
                if ((b[i]%j) == 0){
                    var prime=prime+1
                }
            }
            if (prime==0){
            console.log(b[i])
            }
        }
    }
})([1,2,3,4,5,6,7,8]);


// Using Arrow

myArray=[1,2,3,4,5,6,7,8]

var prime=(b)=>{
    for (i=0; i<b.length; i++)
    {
        if (b[i]<=1){
            continue
        }
        else if (b[i]==2){
            console.log(b[i])
        }
        else{
            var prime=0;
            for (j=2; j<b[i]; j++){
                if ((b[i]%j) == 0){
                    var prime=prime+1
                }
            }
            if (prime==0){
            console.log(b[i])
            }
        }
    }
};

prime(myArray)