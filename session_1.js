// Write the Output

function
myfun(a,b){
    console.log("hi");
    if (a==10)
    {
        return a-b;
    }
    console.log(a+b
    );
    return a+b;

    console.log("hello")
    ;
}

a1=myfun(10,20);
console.log(a1);

b1=myfun(20,10);
console.log(b1);



// Anonymous Function

function foo(){ console.log("Hello")};
foo();

var f=function foo(){ console.log("Hello")};
f();

var f=function(){ console.log("Hello")};
f();



// Self Executing Function | IIFE

(function(){ console.log("My Number")})();

(Number=function(num=3){console.log("My Number "+num)})();
Number(4)



// Passing Function into a Function

var f=function(){console.log("hello")};

var g=function(a){console.log(a)}; //This will return the function name

var g=function(a){ a() };

g(f)



// Arrow Function

var sum=(a,b)=>a+b; console.log(sum(1,2))

var sqrt= a=>a*a; console.log(sqrt(2))


var sum= a=>{
    return a*a;
}
console.log(sum(2))



// Array Method | ForEach 

var cars=["BMW","AUDI","BENZ","RR","JAQUAR"];

cars.forEach(function(item,index,array){
    console.log("Brand Name is "+array)
    console.log("Car "+item+" Position "+index)
})



// Array Method | Map

var num=[30,28,40,50,18,29]
var divisible=num.map(function(mar){
    return mar-(mar*10/100)
})

console.log(divisible)



// Array Methods | Filter

var marks=[
    {a:10},
    {a:20},
    {a:30},
    {a:40},
    {a:50},
    {a:60},
    {a:70},
    {a:80},
    {a:90}
]

var mar = marks.filter(function(num){
    return num.a>=40
});

console.log(mar)



// Array Method | Reduce

var a=[10,20,30,40,50]
var sum=a.reduce(function(accumulator,currentvalue,index){
    console.log("Accum = ",accumulator)
    console.log("Crnt Value = ",currentvalue)
    console.log("Index = ",index)
    return accumulator+currentvalue
});