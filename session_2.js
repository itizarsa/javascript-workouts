// 100 Numbers
for(i=1; i<=100; i++){
    var div=document.createElement('div')
    div.innerHTML=i

    if(i%2!=0){  
        div.setAttribute('style','color:red;')
    }else{
        div.setAttribute('style','color:blue;')
    }
    document.body.appendChild(div)
}