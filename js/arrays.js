// We are introducing ourselves again. Same setup but with ARRAYS
// Create 2 array variables. One with only strings and the other with only numbers.
// The string array will have our firstName, lastName, and programming language
let stringArray = ["Lois", "Harris", "JavaScript"];
// The number array will have the date
let numberArray = [28];
// Create a function that introduces yourself BUT with ARRAYS : It should take 2 parameters: a string array and a number array
function introduction(strArr, numArr) {
  // add a new value to the string array using the square brackets, **remember what index to use
  strArr[3] = "October";
  // add a new value to the number array using the square brackets **remember what index to use
  numArr[1] = 2021;
  // lets introduce ourself with console.log and template literals i.e. `I am an example of a template literal`
  console.log(`Hello! My name is ${strArr[0]} ${strArr[1]}`);
  // ex. Hello! My name is stringArray[index] stringArray[index] < what index would the first and last name be?
  // ex. The date is the numberArray[index] of currentMonth, numberArray[index]  < what index would the date, month and year be?
  // ex. I am currently learning how to program in stringArray[index] < What index would the language be?
  console.log(`The date is the ${numArr[0]} of ${strArr[3]}, ${numArr[1]}`);
  // change the value at the index the programming language is at to "HTML/CSS"
  console.log(`I am currently learning how to program in ${strArr[2]}`);
  strArr[2] = "React";
  // Add a console.log to output programming language
  console.log(`And ${strArr[2]}`);
  // ex. And I'm learning stringArray[index]
  // ex. I now know how to make a variables and functions
  console.log(`I now know how to make a variables and functions`);
  // exit out of the function
  return;
}
introduction(stringArray, numberArray);
//Call the function
// What would be the length of the string array?
console.log(stringArray.length);
// Create a function that re-introduces yourself with ARRAYS : using the push, pop, and join array methods
function reintroduceMyself() {
  let stringArrayOfLanguages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bananas",
  ];
  console.log(
    `I want to say that I am learning ${stringArrayOfLanguages.join(", ")}`
  );
  console.log(`Wait! I'm not learning ${stringArrayOfLanguages.pop()}`);
  stringArrayOfLanguages.push("Node");
  console.log(`I am leaning this ${stringArrayOfLanguages.toString()}`);
  return;
}
reintroduceMyself();
//create a string array with these values: "HTML", "CSS", "JavaScript", "React", "Bananas"
// use console.log to let everyone know what languages you are learning and JOIN all the items of the array into a string
// ex: I want to say that I am learning stringArray.
// You are not learning Bananas! POP that item out of the Array
// ex: Wait! I'm not learning bananas
// PUSH a new language, Node, into the stringArray
// ex: I am leaning this stringArray < convert the stringArray into a string
// exit out of the function
// call the re-introduce function
// In the reintroduceMyself function what would happen if we called the stringArray variable that we defined in the function block?
