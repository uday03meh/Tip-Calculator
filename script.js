/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

// console.log(billTotalInput);
// console.log(tipInput);
// console.log(numberOfPeople);
// console.log(perPersonTotal);

let number = Number(numberOfPeople.innerText);
// console.log(number);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billTotalInput.value);
    // console.log(bill);
    bill.toLocaleString().toFixed(2);

  // get the tip from user & convert it into a percentage (divide by 100)
    let tip = (Number(tipInput.value)/100).toFixed(2);
  

  // get the total tip amount
  let tipAmount = (tip*bill).toFixed(2);

  // calculate the total (tip amount + bill)
    let amount = (tipAmount + bill);


  // calculate the per person total (total divided by number of people)
    let perPersonAmount = amount/number;

  // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerText = (perPersonAmount.toFixed(2));
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  // update the DOM with the new number of people
numberOfPeople.innerText++;
    number = Number(numberOfPeople.innerText)

  // calculate the bill based on the new number of people
calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    if(number<=1){
        return;
    }
    else{
numberOfPeople.innerText--;
    number = Number(numberOfPeople.innerText)

  // calculate the bill based on the new number of people
calculateBill();
    }
    }