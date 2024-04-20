// function sumNumbers (firstNumber, secondNumber) {
//   return firstNumber + secondNumber
// }

// const result = sumNumbers (3, 10)
// console.log(result)

// console.log(sumNumbers(-2,2))

// const users = ['John', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]

// const checkForCopyItem = (array, item) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//       return `There is a copy of the ${item} in array`
//     }
//   }
//   return 'There is not such item in the array'
// }
// console.log(checkForCopyItem(numbers, 3))

// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

// function helloName(name) {
//   return `Hello ${name}!`
// }
// console.log(helloName('Karina'))

// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. 
// Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

// const numbers = [6, 70, 8, 9, 1, 11, 120, 13, 14, 88, 16]
// function findNumbersAboveTen (array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 10) {
//       console.log(array[i])
//     }
//   }
// } 
// findNumbersAboveTen(numbers)

// 3) Предлагаю вам реализовать простенький калькулятор. 
// Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. 
// При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак 
// и в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. 
// Запишите результат выполнения функции в переменную и выведите в консоль. 
// Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

function fourMathOperation(numberOne, numberTwo, operator) {
  if (operator === 'minus') {
    return numberOne - numberTwo
  }
  else if (operator === 'plus') {
    return numberOne + numberTwo
  }
  else if (operator === 'devision') {
    return numberOne / numberTwo
  }
  else if (operator === 'multiplication') {
    return numberOne * numberTwo
  }

}

const result = fourMathOperation(6, 3, 'plus')
console.log(result)