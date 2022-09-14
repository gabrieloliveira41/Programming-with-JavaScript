var bird={
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log("eagle1: ",eagle1);

console.log("eagle1: ",eagle1.hasWings);
console.log("eagle1: ",eagle1.canFly);
console.log("eagle1: ",eagle1.hasFeathers);

var eagle2=Object.create(bird);
console.log("eagle2: ",eagle1);

console.log("eagle2: ",eagle1.hasWings);
console.log("eagle2: ",eagle1.canFly);
console.log("eagle2:  ",eagle1.hasFeathers);

var penguin = Object.create(bird);

penguin.canFly=false;
console.log("penguin: ",penguin);
console.log("penguinhas feathers: ",penguin.hasFeathers);
console.log("penguin can fly: ",penguin.canFly);
console.log("penguin has wongs: ",penguin.hasWings);