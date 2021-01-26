var expected={
    foo:6,
    bar:7
};

var actual={
    foo:6,
    bar:9
};

var a=(function(b,c){
    var x=JSON.stringify(b);
    var y=JSON.stringify(c);
    if (x==y){
        console.log("Passed")
    }else{
        console.log("Failed. Expected - ",expected)
    }
})(expected,actual);