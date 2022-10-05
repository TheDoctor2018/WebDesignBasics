const car ={
    engine : true,
    speed : "fast"
}
const vroom = Object.create(car);
vroom.engine = false;

//Only display the object properties(key)
for(prop in vroom)
{
    console.log(prop);
}

//dispays property key and value
for( prop of Object.keys(vroom)){
    console.log(prop + ": " + vroom[prop]);
}


