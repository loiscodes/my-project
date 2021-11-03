const digitalCraftsCrew = [
  "Jamie",
  "Dr. Vicki",
  "Jada",
  "Athena",
  "Dee",
  "Ernesto",
  "Robbie",
];
//Length of the array
console.log(digitalCraftsCrew.length);
console.log(digitalCraftsCrew);
//Add a new item to the END of the array
digitalCraftsCrew.push("Lois");
console.log(digitalCraftsCrew);
//Add a new item to the START of the array
digitalCraftsCrew.unshift("Jawann");
console.log(digitalCraftsCrew);
//Remove item from the END of the array
digitalCraftsCrew.pop();
console.log(digitalCraftsCrew);
//Remove item from the START of the array
digitalCraftsCrew.shift();
console.log(digitalCraftsCrew);
//Get the index of "Dr. Vicki"
console.log(digitalCraftsCrew[1]);
