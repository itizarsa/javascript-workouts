var object = {
    name: "ISRO", 
    age: 35, 
    role: "Scientist"
};

var a=(function(b){
    var myArray=[]
    for (x in b){
        myArray.push([x,b[x]]) 
    }
    console.log(myArray)
})(object);