var myArray=[1,2,3,4,5,6,7,8];
var rotate=7;

var a=(function(b,c){
    for (i=0; i<c; i++){
        var temp=b[0];
        for (j=0; j<b.length-1; j++){
            b[j] = b[j+1]
        }
        b[b.length-1]=temp;
    }
    console.log(myArray)
})(myArray,rotate);