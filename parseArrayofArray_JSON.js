var myArray=[["make", "Ford"], ["model", "Mustang"], ["year", 1964]]

var a=(function(b){
    var obj={};
    for (i=0; i<b.length; i++){
        obj[b[i][0]]=b[i][1]
    }
    console.log(obj)
})(myArray);