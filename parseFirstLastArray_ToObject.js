var myArray=["Guvi","I","Geek"]

var a=(function(b){
    var obj={};
    obj[b[0]]=b[b.length-1]
    console.log(obj)
})(myArray);