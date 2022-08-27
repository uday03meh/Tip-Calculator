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
  let bill = Number(billTotalInput.value);
    // console.log(bill);

    let tip = (Number(tipInput.value)/100);
    let tipAmount = (tip*bill);
    let amount = (tipAmount + bill);
    let perPersonAmount = amount/number;

    perPersonTotal.innerText = `$${(perPersonAmount).toFixed(2)}`;
}

const increasePeople = () => {

numberOfPeople.innerText++;
    number = Number(numberOfPeople.innerText)

calculateBill();
}

const decreasePeople = () => {
    if(number<=1){
        return;
    }
    else{
numberOfPeople.innerText--;
    number = Number(numberOfPeople.innerText)

calculateBill();
    }
    }