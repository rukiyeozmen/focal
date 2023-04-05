// const diceNumber = process.argv[2];

// if (!diceNumber || isNaN(diceNumber)) {
//   process.exit();
// }

// const rolls = [];

// for (let i = 0; i < diceNumber; i++) {
//   const roll = Math.floor(Math.random() * 6 + 1);
//   rolls.push(roll);
// }

// console.log(`Rolled ${diceNumber} dice: ${rolls.join(', ')}`);
let myGlobalVar = "global";

const printMyVars = function() {
  let myLocalVar = "local";
  console.log("-- Inside printMyVars --");
  console.log("myLocalVar is:", myLocalVar);
  console.log("myGlobalVar is:", myGlobalVar);
};

printMyVars();

console.log('-- Outside of printMyVars now --');
console.log(myLocalVar);