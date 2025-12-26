//! Calculator JS Homework: 1

const inputNumberFirst = Number(prompt('input first num:'));
const useAction = prompt('input an action:');
const inputNumberSecond = Number(prompt('input second num:'));
let result;

switch (useAction){
  case '+':
    result = inputNumberFirst + inputNumberSecond
    break;

  case '-':
    result = inputNumberFirst - inputNumberSecond
    break;

  case '*':
    result = inputNumberFirst * inputNumberSecond
    break;

  case '/':
    if (inputNumberSecond === 0) {
      alert('Помилка: не можливо розділити нуль на нуль!')
    }
    result = inputNumberFirst / inputNumberSecond
    break; 
    
  default: alert('Помилка: введено не допустимий символ або пусте значення');
}


if (result === undefined || isNaN(result)) {
    alert(`Результат помилка: введено рядки або пусте значення чи не допустимі значення`);
} else {
  alert(`Результат діЇ:  ${inputNumberFirst} ${useAction} ${inputNumberSecond} = ${result}`);
}




//?-------------------------------------------------------------------->

// alert("welcome! to CALCULATOR press key :  OK.  for continue...");

// const n1 = +prompt("Enter number: one", "");

// const symbol = prompt("Enter (+) (-) (*) (/)", "");

// const n2 = +prompt("Enter number: two", "");

// let result;

// switch (symbol) {
//   case "+":
//     result = n1 + n2;
//   break;

//   case "-":
//     result = n1 - n2;
//     break;

//     case "*":
//       result = n1 * n2;
//       break;

//   case "/":
//     result = n1 / n2;
//     break;
// }

// if (n1 && n2 >= 0){
//   alert(`RESULT:  ${n1} ${symbol} ${n2} = ${result}`);
// }
// else {
//   alert('please enter only numbers and reload page');
// }
