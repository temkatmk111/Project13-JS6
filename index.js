// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// const jims  =[ "alim","banana","jurj"]
// for (let i =0 ; i < jims.length; i++) {
//     console.log(jims[i]);
// }

// for (let i = 1; i <= 20; i++) {
//   if ( i%2 === 0)
//   console.log(i);
// }

// for (let i = 20; i >= 1; i--) {
//     if ( i%2 === 1)
//   console.log(i);
// }

// const jims  ="Hello"
// for (let i =0 ; i < jims.length; i++) {
//     console.log(jims[i]);
// }

// let a = 0;
// for (let i = 1; i <= 100; i++) {
//   a = a + i;
// }
//   console.log(a);

// let a = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i%2 ===0)
//   a = a + i;
// }
//     console.log(a);

// let squares = [];
// for (let i = 1; i <= 10; i++) {
//   squares.push(i ** 2);
// }
// console.log(squares);

// const  numbers = [5, 10, 15, 20]
// let a = 0
// for (let i =0 ; i < numbers.length; i++) {
//   a =a+numbers[i]
// }
//     console.log(a);

// const numbers = [10, 20, 30, 40];
// let a = 0;
// for (let i = 0; i < numbers.length; i++) {
//   a = a + numbers[i];
// }
// console.log(a / numbers.length);

// const jims  ="School"
// let a = 0
// for (let i =1 ; i < jims.length; i++) {
// a=+i
// }
// console.log(++a);

// const numbers = [3, 8, 12, 5, 6, 7];
// let a = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) a = a + 1;
// }
// console.log(a);

// for (let i = 1; i <= 50; i++) {
//   if (i%3 ===0)
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i%3 ===0 && i%5 ===0 )
//     console.log(i);
// }

// const jims  ="Hello"
// for (let i =jims.length- 1; i >= 0; i--) {
//   console.log(jims[i]);
// }

// const word = "banana";
// const letter = "a";
// let a = 0;
// for (let i = 0; i < word.length; i++) {
//   if (word[i] === letter[0]) {
//     a = a + 1;
//     console.log(a);
//   }
// }

// let a = 0
// for (let i = 1; i <= 10; i++) {
//   a=i*5
//   console.log(a);
// }

// let a = 0
// for (let i = 10; i >= 0; i--) {
//   a=i*10
//   console.log(a);
// }

// const word = "Би JavaScript сурч байна";
// const letter = " ";
// let a = 0;
// for (let i = 0; i < word.length; i++) {
//   if (word[i] === letter[0]) {
//     a = a + 1;
//   }
// }
//     console.log(a);

// let a = 2;
// let b = 5;
// for (let i = 0; i <= b; i++) {
//   c = a ** i;
// }
// console.log(c);

// let b = 5;
// let c = 1
// for (let i = 1; i <= b; i++) {
//   c = i * c;
// }
// console.log(c);

// const word = "education";
// const letter = ["a", "e", "i", "o", "u"];
// let a = 0;
// for (let i = 0; i < word.length; i++)
//   for (let b = 0; b < letter.length; b++) {
//     if (word[i] === letter[b]) {
//       a = a + 1;
//     }
//   }
// console.log(a);

// let a = 0
// for (let i = 1; i <= 10; i++) {
//   a=i*5
//   console.log(`5 * ${i} = ${a}`);
// }

// const numbers = [4, 7, 2, 7, 9];
// const letter = 7;
// let a = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === letter) {
//     a = a + 1;
//     break;
//   }
// }
// console.log(a);

// const word = "Би JavaScript сурч байна";
// let a = 0;
// for (let i = 0; i < word.length; i++) {
//   let bb = word[i].charCodeAt(0);
//   if (bb >= 65 && bb <= 90) {
//     a = a + 1;
//   }
// }
// console.log(a);

// let num = 12
// let a = 0;
// for (let i = 0; i <= num ; i++) {
//   if (num%i===0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("*".repeat(i));
// }

// const numbers = [4, 7, 2, 7, 9];
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i] + 10;
// }
// console.log(numbers);

//  const booleans = [false, false, true, true]
// for (let i = 0; i < booleans.length; i++) {
//   if (booleans[i]=== true ) {
//   }
//   else{
//   booleans.splice(booleans[i] , 1 ,true)
//     booleans.splice(booleans[i] , 1 ,true)
//   }
// }
// console.log(booleans);

// const products = [
//                    { title: "Уут", price: 500 },
//                   { title: "Сав", price: 800 }
//                  ]
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price  >=600) {
//     console.log(products[i]);
//   }
// }

// const employees = [{ name: "Амгалан", department: "IT" }, { name: "Номин", department: "HR" }]
// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].name);
// }

//  const students = [{ name: "Бат", score: 85 }, { name: "sara", score: 92 }]
//  for (let i = 0; i < students.length; i++) {
//   if (students[i].score  >=90) {
//     console.log(students[i].name);
//   }
// }

//  products = [{ title: "Уут", stock: 5 }, { title: "Сав", stock: 0 }]
//  for (let i = 0; i < products.length; i++) {
//   if (products[i].stock  >0) {
//     console.log(products[i]);
//   }
// }

//  books = [{ title: "Монгол түүх", year: 2000 }, { title: "Газар зүй", year: 2010 }]
//   for (let i = 0; i < books.length; i++) {
//   if (books[i].year  >2005) {
//     console.log(books[i]);
//   }
// }

// let a = 0;
// students = [
//   { name: "Бат", age: 20 },
//   { name: "sara", age: 22 },
// ];
// for (let i = 0; i < students.length; i++) {
//   a = a + students[i].age;
// }
// console.log(a / students.length);

// let products = [
//   { title: "Уут", price: 500 },
//   { title: "Сав", price: 800 },
// ];
// for (let i = 0; i < products.length; i++) {
//   products[i].price = (products[i].price / 10) * 11;
// }
// console.log(products);

// let employees = [
//   { name: "Амгалан", salary: 1000, active: true, department: "IT" },
//   { name: "Номин", salary: 1500, active: false, department: "HR" },
//   { name: "Баяр", salary: 1200, active: true, department: "IT" },
// ];
// let a = 0;
// let count = 0;
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].active === true) {
//     a = a + employees[i].salary;
//     ++count;
//   }
// }

// console.log(a / count);
