// Follow the instructions below. As you go through the process console log each variable to see it change!
// 1. Create a new Object representing YOU. Include they following keys: fullName, age, faveColor, and likesPizza.
let aboutMe = {
  fullName: "Lois Harris",
  age: 16,
  faveColor: "red",
  likesPizza: true,
};
// HINT: likesPizza accepts a boolean.
// 2. Create a new variable and set it equal to the faveColor property.
const FAVE_COLOR = aboutMe.faveColor;
// 3. Update your fullName to only be your last name.
aboutMe.fullName = "Lois";
// 4. Delete the likesPizza property.
delete aboutMe.likesPizza;
// 5. Add a new key that represents your fave food and mirrors the likePizza. The value will represent the fact that you like it :)
// For example, I would like put likesCookies.
aboutMe.likesCookies = true;

console.log(aboutMe);
console.log(FAVE_COLOR);
