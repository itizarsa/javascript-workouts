// Using IIFE

(function(b){
    
    for (i=0; i<b.length; i++)
    {
        var reverse=0;
        var c=b[i];
        for (j=0; c>0; j++)
        {
            
            var last=c%10;
            var c=Math.floor(c/10);
            var reverse=(reverse*10)+last
        }
        
        if (reverse==b[i]){
            console.log(b[i])
        }

    }


})([121,111,198]);


// Using Arrow

myArray=[121,111,198]

var palindrome=(b)=>{
    
    for (i=0; i<b.length; i++)
    {
        var reverse=0;
        var c=b[i];
        for (j=0; c>0; j++)
        {  
            var last=c%10;
            var c=Math.floor(c/10);
            var reverse=(reverse*10)+last
        }
        if (reverse==b[i]){
            console.log(b[i])
        }
    }
};

palindrome(myArray)