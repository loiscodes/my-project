// Create an object variable that has our firstName, lastName, programming language, current date, and a random key/value pair
let objOfDetails = {
  firstName: "Lois",
  lastName: "Harris",
  currentDate: 28,
  currentMonth: "October",
  randomKey: "randomValue",
};
const whatsMyName = "firstName";
// Create an string variable that's value is "firstName"
// Create a function that introduces yourself BUT with an Object!
console.log(objOfDetails.randomKey);
function introduction(obj) {
  // Create a new key/value pair that has key of currentMonth and string value of October using dot notation
  // Create a new key/value pair that has key of currentYear and number value of 2021 using bracket notation
  obj["currentYear"] = 2021;
  obj.programLanguage = "JavaScript";
  // lets introduce yourself with console.log and template literals i.e. `I am an example of a template literal`
  // ex. Hello! My name is obj.key obj.key < what keys should you be use to get your first and last name be?
  console.log(`Hello! My name is ${obj.firstName} ${obj.lastName}`);
  // ex. The date is the obj[key] of currentMonth, obj[key]  < what key would you use to get the date? the month? year?
  console.log(
    `The date is the ${obj.currentDate} of ${obj.currentMonth}, ${obj.currentYear}`
  );
  // ex. I am currently learning how to program in obj.key < What key would you use to get the programming language?
  console.log(
    `I am currently learning how to program in ${obj.programLanguage}`
  );
  // change the value for programming language
  obj.programLanguage = "React";
  // Add a console.log to output language
  // ex. And I'm learning stringArray[index]
  console.log(`And ${obj.programLanguage}`);
  console.log(`I now know how to make a variables and functions`);
  delete obj.randomKey;
  return;
  // ex. I now know how to make a variables and functions
  // delete the random key/value pair
  // exit the function
  // call the function
  // What is the value of currentMonth key?
  // Using obj variable created at the begin, bracket notation and the string variable with a value of "firstName" you made at the begin of the script what would the output be if we combined them?
  // What would be the output of the random key/value pair that we deleted inside of the function?
}

introduction(objOfDetails);
console.log(objOfDetails.randomKey);
console.log(objOfDetails[whatsMyName]);
