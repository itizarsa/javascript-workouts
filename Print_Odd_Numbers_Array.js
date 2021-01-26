// Using IIFE

(function(myArray){
    for (i=0; i<myArray.length; i++)
    {
        if (myArray[i]%2!=0){
            console.log(myArray[i]);
    }
}
})([1,2,3,4,5,6,7,8]);


// Using Arrow

myArray=[1,2,3,4,5,6,7,8]

var odd=(a)=>{
    for (i=0; i<a.length; i++)
    {
        if (a[i]%2!=0){
            console.log(a[i]);
    }
}
};

odd(myArray)