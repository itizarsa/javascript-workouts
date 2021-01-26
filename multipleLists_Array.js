var myArray = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], 
[["firstname", "Sri"], ["lastname", "Devi"], ["aGe", 28], ["roLe", "Coder"]]];

var a=(function(b){
    var obj={};
    for (i=0; i<b.length; i++){
        for(j=0; j<b[i].length; j++){
            obj[b[i][j][0]]=b[i][j][1]
        }
    }
    console.log(obj)
})(myArray);
