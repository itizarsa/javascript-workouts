var cars=["BMW","AUDI","BENZ","RR","JAQUAR"];
var cars1=[]
var j=0
for (i=0; i<=cars.length; i++){
    if (cars[j]=="RR"){
        cars1[i]="VOLVO"
        cars1[i+1]="RR"
        i++
        j=j+1
    }
    else{
        cars1[i]=cars[j]
        j=j+1
    }
}

console.log(cars1)