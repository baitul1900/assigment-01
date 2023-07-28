// topic one

function calculateDiscount(totalpurchase) {
  let discountPar;
  if ((totalpurchase) => 200) {
    discountPar = 0.15;
  } else if ((totalpurchase) => 100) {
    discountPar = 0.1;
  } else if ((totalpurchase) => 50) {
    discountPar = 0.05;
  } else {
    discountPar = 0;
  }

  let disAmount = totalpurchase * discountPar;
  let finalAmount = totalpurchase - disAmount;

  console.log(`Total Amount: $${totalpurchase}`);
  console.log(`Discount Amount: $${disAmount.toFixed(2)}`);
  console.log(`Discounted Amount: $${finalAmount.toFixed(2)}`);
}

calculateDiscount(80);

// topic two


function filterEvenNumbers(...arr) {
  let evenNumbers = arr.filter((x) => x % 2 == 0);
  console.log(evenNumbers);
}

filterEvenNumbers(12, 34, 45, 23, 6, 78, 54, 90);

/* topic 03 */

function generateMultiplicationTable(number) {
  console.log(`Generate Multiplication Table for: ${number}\n`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number} = ${i * number}`);
  }
}

generateMultiplicationTable(5);




// topic 04

function calculateGrade(studentScore) {
  switch (true) {
    case studentScore >= 90:
      console.log("your grade is A+");
      break;
    case studentScore >= 80 && studentScore < 90:
      console.log("your grade is B");
      break;
    case studentScore >= 70 && studentScore < 80:
      console.log("your grade is C");
      break;
    case studentScore >= 60 && studentScore < 70:
      console.log("your grade is D");
      break;
    default:
      console.log("your grade is F");
  }
}

calculateGrade(65);
