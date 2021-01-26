function removeProperty(obj, key){
    delete obj[key]
    console.log(obj)
   }

   var obj={
       key:"value",
       bike: "saavi"
   };
removeProperty(obj,"bike")