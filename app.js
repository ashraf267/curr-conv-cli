let input = require('sync-input');

console.log("Welcome to Currency Converter!");
console.log(`1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

(function myCurrConv() {
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");
  
  let toDo = input("Do:");
  
  if(Number(toDo) === 1) {
    // do something
    console.log("What do you want to convert?");
    let fromCurrency = input("From:");
    
    let currencies = [
      {
        name: "JPY",
        val: 113.5,
      },
      {
        name: "EUR",
        val: 0.89,
      },
      {
        name: "RUB",
        val: 74.36,
      },
      {
        name: "GBP",
        val: 0.75,
      },
      {
        name: "USD",
        val: 1,
      },
    ];
    
    (function checkCurrency(fCurr) {
      let isFound = false;
      let fromCurrVal;
      let currArray;
      
      currencies.forEach(function(itm, ind, arr) {
        if(itm.name == fCurr) {
          // true
          isFound = true;
          fromCurrVal = itm.val;
          currArray = arr;
        }
      });
      
      (!(isFound == true)) ? console.log("Unknown currency") : convertCurrency(fromCurrVal, currArray);
    }(fromCurrency.toUpperCase()));
    
    function convertCurrency(fCurrVal, currArr) {
      let isFound = false;
      let toCurrency = input("To:");
      let toCurrVal;
      
      currArr.forEach(function(item) {
        if(item.name == toCurrency.toUpperCase()) {
          // true
          isFound = true;
          toCurrVal = item.val;
        }
      });
      
      let amount;
      let result;
      
      if(!(isFound == true)) {
        result = "Unknown currency";
      } else {
        amount = input("Amount:");
        
        if(amount < 1) {
          result = "The amount can not be less than 1";
        } else if(isNaN(amount)) {
          result = "The amount has to be a number";
        } else {
          // all tests passed. Go ahead
          result = amount * toCurrVal / fCurrVal;
        }
      }
      
      isNaN(result) ? console.log(result) : console.log("Result: " + amount + " " + fromCurrency.toUpperCase() + " equals " + parseFloat(result).toFixed(4) + " " + toCurrency.toUpperCase());
    }
    myCurrConv();
  } else {
    // toDo = 2 or unknown input
    if(!(toDo == 2)) {
      // unknown input
      console.log("Unknown input");
      myCurrConv();
    } else {
      // 2
      // exit the program
      console.log("Have a nice day!");
    }
  }
}());
