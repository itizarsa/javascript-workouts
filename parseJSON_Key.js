var object = {
    name: "RajiniKanth", 
    age: 33, 
    hasPets : false
};

var a=(function(b){
    var myArray=[]
    for (x in b){
        myArray.push(x)
    }
    console.log(myArray)
})(object);