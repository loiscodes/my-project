const letMeIntroduceMyself = function (name) {
  return name != null && name !== ""
    ? "Hello my name is " + name
    : name === ""
    ? "Hello I am not going to provide my name"
    : "What was the question again?";
};
console.log(letMeIntroduceMyself("Lois"));
console.log(letMeIntroduceMyself(""));
console.log(letMeIntroduceMyself());

// if (name != null && name !== ""){
//     return "Hello my name is " + name
// }else if(name === ""){
//     return "Hello I am not going to provide my name"
// }else{
//     return "What was the question again?"
// }
