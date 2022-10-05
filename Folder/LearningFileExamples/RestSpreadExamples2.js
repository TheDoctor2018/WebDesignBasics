//How to join arrays with rest operator..can use var, let, or const up to you
 let dogs=["wolf", "chiwawa","poodle"];
 let hunter=["tiny","tina","wolfenstein"];
 let dogshunt=[...dogs,...hunter];
 console.log(dogshunt);

 //how to join objects..can use var, let, or const up to you
 let ruffians ={bad: 3};
 let cartwheels ={spins: 4};
 let tripping ={...ruffians,...cartwheels};
 console.log(tripping);

//how to add to arrays without push
dogs =[...dogs,"hotdogs","catdogs"];
console.log(dogs);

//how to copy an array into another one
dogs2=[...dogs];
console.log(dogs2);

//how to copy an object into a nother
let ruffians2 =[...ruffians];
console.log(ruffians2)