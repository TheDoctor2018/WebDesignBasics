var dog={
    hasSpots: true,
    isGoodBoyd: true,
    loveNaps: true
}

var poodle = Object.create(dog);
console.log("Poodle: ",poodle);

var rotriler = Object.create(dog);

console.log("Rotriler is good boy: ", rotriler.isGoodBoyd);

var mut =Object.create(dog);
mut.hasSpots =false;

console.log("Does the mutt have spots? ", mut.hasSpots);