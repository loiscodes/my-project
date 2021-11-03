var arr = [0, 1, 2, 3, 4, 5];

arr.forEach(function (element) {
  return element + 1;
});

var arrTwo = [0, 1, 2, 3, 4, 5];

var arrTwoThatWasMapped = arrTwo.map(function (element) {
  return element + 1;
});

console.log(arr);
console.log(arrTwo);
console.log(arrTwoThatWasMapped);
