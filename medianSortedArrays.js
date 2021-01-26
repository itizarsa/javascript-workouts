myArray1=[6,8,4,9,45]
myArray2=[67,43,98,30,109]

var a=(function(b,c){
    b.sort(function(a, b){return a-b});
    c.sort(function(a, b){return a-b});

    var median1=Math.ceil(b.length/2)
    var median2=Math.ceil(c.length/2)

    console.log("Sorted Arrays ", b, c)
    console.log("Median of Sorted Arrays ", b[median1-1], c[median2-1])

})(myArray1,myArray2);