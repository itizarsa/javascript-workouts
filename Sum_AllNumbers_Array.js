// Using IIFE

myArray=[1,2,3,4,5,6,7,8]

var a=(function(b){
    var sum=0;
    for (i=0; i<b.length; i++)
    {
        var sum=sum+b[i];
    }
    console.log(sum)
})(myArray);


// Using Arrow

myArray=[1,2,3,4,5,6,7,8]

var sum=(b)=>{
    var sum=0;
    for (i=0; i<b.length; i++)
    {
        var sum=sum+b[i];
    }
    console.log(sum)
};

sum(myArray)