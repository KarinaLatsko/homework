// const user = {
//   name: 'Alex',
//   age: 23,
//   isAdmin: false
// }
// console.log(user.name)

// const users = {
//   alex: {
//     age: 23,
//     isAdmin: false
//   }
// }
// // console.log(users.alex)
// console.log(users.alex.isAdmin)

// const users = {
//   alex: {
//     age: 23,
//     isAdmin: false
//   },
//   john: {
//     age: 20,
//     isAdmin: true,
//     sayHello(name) {
//       console.log(`Hello ${name}`)
//     }
//   }
// }
// console.log(users.john)
// users.john.sayHello('Tom')

// const users = [
//   {
//     name: 'alex',
//     age: 23,
//     isAdmin: false
//   },
//   {
//     name: 'john',
//     age: 30,
//     isAdmin: true
//   }
// ]
// users.push ({
//   name: 'ivan',
//     age: 30,
//     isAdmin: true
// })

// for(let i = 0; i < users.length; i++) {
//   console.log(users[i])
// }

// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).

// const me = {
//   firstName: 'Karina',
//   lastName: 'Lacko',
//   age: 37,
//   height: 164,
//   weight: 52,
//   hobby: 'fitness'
// } 
// console.log(me)

// 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

// const greeting = {
//   sayHello(name) {
//     console.log(`Hello ${name}!`)
//   }
// }
// greeting.sayHello('Jason Statham')

// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, 
// в которой будет храниться количество простых пользователей, начальное значение будет - 0. 
// Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. 
// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

const users = [
    {
      name: 'alex',
      age: 23,
      isAdmin: false
    },
    {
      name: 'john',
      age: 30,
      isAdmin: true
    },  
    {
      name: 'ivan',
      age: 30,
      isAdmin: false
    },
    {
      name: 'maria',
      age: 35,
      isAdmin: false
    }
]
let isNotAdmin = 0

for (let i = 0; i < users.length; i++) {
  if(users[i].isAdmin !== true) {
    isNotAdmin++
  }
}
console.log(isNotAdmin)

