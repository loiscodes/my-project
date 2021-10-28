let thisVariableValueWillChange = 12;
// Adding a console to view what this will output to Chrome's console window
console.log(thisVariableValueWillChange);
//Const often written in all caps letting other Developers know that this variable will never change
const UNCHANGING_VARIABLE_NAME = "This will never change";
console.log(UNCHANGING_VARIABLE_NAME);
thisVariableValueWillChange = 23;
console.log(thisVariableValueWillChange);
UNCHANGING_VARIABLE_NAME = "I'm going to change this";
console.log(UNCHANGING_VARIABLE_NAME);
