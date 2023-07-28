// topic one

/* You are tasked with creating a simple discount calculator for an online store. The store offers discounts based on the total purchase amount.
 Customers can avail different discounts depending on their total spending. 
 Your goal is to implement a JavaScript program that takes the total purchase amount as input and calculates the discounted amount (if any) based on the 

following rules:


If the total purchase amount is less than $50, no discount is applied.

If the total purchase amount is between $50 and $100 (both inclusive), apply a 5% discount.

If the total purchase amount is between $100 and $200 (both inclusive), apply a 10% discount.

If the total purchase amount is $200 or more, apply a 15% discount.

Tasks:

Implement the JavaScript function to calculate the discounted amount based on the input.

Display / console.log the “discounted amount & total amount + discount amount “ */

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
};




calculateDiscount(80);
