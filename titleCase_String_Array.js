// Using IIFE

(function(str){
    lower_str=str.toLowerCase().split(" ");
    new_str="";
    for (i=0;i<lower_str.length; i++)
    {
        lower_str[i]=lower_str[i][0].toUpperCase()+lower_str[i].slice(1)
        new_str=new_str+lower_str[i]+" "
    }
    
    console.log(new_str)
})("welcome to confusing script world");


// Using Arrow

var myStr="welcome to confusing script world"

var titleCase=(str)=>{
    lower_str=str.toLowerCase().split(" ");
    new_str="";
    for (i=0;i<lower_str.length; i++)
    {
        lower_str[i]=lower_str[i][0].toUpperCase()+lower_str[i].slice(1)
        new_str=new_str+lower_str[i]+" "
    }
    
    console.log(new_str)
};

titleCase(myStr)