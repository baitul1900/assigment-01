// // assingment 03

// // topic: 01
function printObjectProperties(obc) {
  // 1st check the object property value empty or not
  if (Object.keys(obc).length === 0) {
    console.log(`Object is empty`);
  }
  // then iterate the object
  for (let vales in obc) {
    console.log(`${vales}: ${obc[vales]}`);
  }
}

let allValues = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};

printObjectProperties(allValues);

// end

// topic 2
function findMaxNumber(arr) {
  if (arr.length === 0) {
    return null;
  }

  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); // Output: 30

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); // Output: 15

const emptyArray = [];
console.log(findMaxNumber(emptyArray));

// topic 3

function mergeArrays(one, tow) {
  let h = [...one, ...tow];
  return h;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1, arr2));

// topic 4
let calculateSquare = (num) => {
  return num * num;
};

console.log(calculateSquare(5));
console.log(calculateSquare(8));

// topic 5

const numbers = [1, 2, 3, 4, 5];

function doubleNumbers(num) {
  const b = num.map((n) => n + n);
  return b;
};

console.log(doubleNumbers(numbers));

// topic 6
class MathUtility {
  static multiply(a, b) {
      return a * b;
  }
}

console.log(MathUtility.multiply(5, 3)); 
console.log(MathUtility.multiply(2, 8));

// topic 7




























