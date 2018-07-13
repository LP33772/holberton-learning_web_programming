<!DOCTYPE javascript>
let number = process.argv[2];
if (isNaN(number)) {
    comparison="input is not a number";
  } else {
    comparison = (number > 5) ? "The value is greather than 5": "no";
  }
  console.log(comparison)
