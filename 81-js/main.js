// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers)

// const numbers = [1, '2', true, [1, 2, 3], 5]
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5]
// console.log (numbers[2])

// const numbers = [1, 2, 3, 4, 5]
// numbers [4] = 6
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i < numbers.length; i++) {
//   console.log (numbers[i] + 1)
// }

const numbers = [8, 22, 51, 67, 74, 86]
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i])
  }
}

const rainbow = ['красный', 'оранжевый', 'желтый', 'зеленый', 'голубой', 'синий', 'фиолетовый']
for (let i = rainbow.length - 1; i >= 0; i--) {
  console.log (rainbow[i])
}