// console.log("hello world");
// 0.5;
// 1;
// ("use strict");
// ("jhhjgj");
// true;
// false;
// //字串 布林值

// let number = 2;
// //const name = "jac"
// number = 3;
// let temp = number;
// console.log(temp);
// number = 4;
// temp = number;
// console.log(temp);

// //let a = 10
// //let b = 20
// //let c
// //c = a
// //a = b
// //b = c
// //console.long(a,b)

// // == 等於 !=不等於  && 兩者皆要正確才會是ture  || or  > < 邏輯運算子
// let a = 10;
// let b = 20;
// // console.log(a == 10)
// // console.log(a != 10)
// // console.log(a == 10 && b == 20)
// // console.log(a == 10 || b == 10)
// // console.log(a <= 10 && b >= 20)
// // //算術運算子
// // // + - * / %
// // console.log("1"+"2") 字串也能算結果為12
// // console.log(1 + 2)
// // console.log(2 - 1)
// // console.log(2 * 3)
// // console.log(6 / 2)
// // console.log(5 % 2)

// // if( a == 10 ) {
// //     console.log(" a is 10 ")
// // } else if( a == 15){
// //     console.log("a is 15")
// // } else{
// //     console.log(" a is not equal qo and 15")
// // }

// // for(let i = 0; i<10; i++){
// // //宣告i=0  i++等於i+1
// // console.log(i)
// // }
// // console.log("for loop end")

// let double = function (num1, num2) {
//   //num = num || 1 // 如果沒有傳入參數，預設為1
//   return num1 * 2;
// };
// let c = double(2, 3); // 4
// console.log(c);

// let sayMyName = function (name) {
//   console.log("my name is" + name);
// };
// sayMyName("jac");
// sayMyName("mary");
// sayMyName("ming");
// sayMyName("john");

// //let num =0
// //for(let i = 1; i<=100; i++) {
// //  num = num +i
// //console. log(i)
// //}
// window.onload = function () {
//   console.log(document.querySelector("#year"));
//   document.querySelector("#year_btn").addEventListener("click", function () {
//     const year = parseInt(document.querySelector("#year").value);
//     // 該年份為400的倍數，或者為4的倍數，不可以是100％的倍數
//     let result;
//     if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//       result = "閏年";
//     } else {
//       result = "不是閏年";
//     }
//     console.log(year);
//     document.querySelector("#answer").innerHTML = result;
//   });
// };
//  三角形特性，兩邊相加大於第三邊
//  istriangle(1, 2, 3) // false
//  istriangle(3, 4, 5) // true

// const istriangle = function (a, b, c) {
//   let result;
//   if (a + b > c && a + c > b && b + c > a) {
//     result = "是三角形";
//   } else {
//     result = "不是三角形";
//   }
//   return result;
// };

// let result = istriangle(2, 3, 5);
// console.log(result);

// // const countBMI = function (height, weight) {
// // 體重/身高平方(M)
// let BMI = function (height, weight) {
//   return weight / (height * height);
// };
// BMI(1.7, 60);
// console.log(BMI(1.7, 70));

// // 判斷大小的函式
// const wichisbig = function (a, b) {
//   if (a > b) {
//     return a;
//   }
//   if (a < b) {
//     return b;
//   }
// };
// let big = wichisbig(15, 20);
// console.log(big);

// 做出99乘法表
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     cconsole.log(i + " * " + j + " = " + i * j);
//   }
// }

// // 成績計算公式 自動判斷成績
// // 100-95 A+
// // 94-90 A
// // 89-80 B
// // 79-70 c
// // 69-0以下D

// const getGrade = function(score) {
//   if (score >= 95 && score <= 100) {
//     return "A+";
//   } else if (score >= 90 && score <= 94) {
//     return "A";
//   } else if (score >= 80 && score <= 89) {
//     return "B";
//   } else if (score >= 70 && score <= 79) {
//     return "C";
//   } else if (score >= 0 && score <= 69) {
//     return "D";
//   } else {
//     return "無效成績";
//   }
// };

// class Person {
//   constructor(name, age) {
//      this.name = name
//      this.age = age
//    }
//    sayName() {
//      console.log(this.name)
//    }
//  }

// const jac = new Person("jac", 20)
// jac.sayName() // jac
// const mary = new Person("mary", 21)
// mary.sayName() // mary

// console.log("Hello world".length) // length 長度
// console.log("Hello world".substring(0, 3))
// console.log("Hello world".toUpperCase())
// const word = "hello world"

// console.log(
//   word.substring(0, 1).toUpperCase() + //H
//   word.substring(1, word.length))// ello world

// string
// console.log("1, jac,wang,21;2, mary,yang,22".split(";"))

// xml
// {
/* <students>
  <student>
    <firstname>jac</firstname>
    <age>21</age>
  </student>
  <student>
    <firstname>mary</firstname>
    <age>22</age>
  </student>
</students> */
// }

// json

const students = [
  {
    id: 1,
    last_name: "林",
    first_name: "美玲",
    gender: "female",
    phone: "0912-345-678",
    birthday: "1998-03-15",
    email: "meiling.lin@email.com",
  },
  {
    id: 2,
    last_name: "王",
    first_name: "俊傑",
    gender: "male",
    phone: "0923-456-789",
    birthday: "1997-11-22",
    email: "junjie.wang@email.com",
  },
  {
    id: 3,
    last_name: "張",
    first_name: "雅婷",
    gender: "female",
    phone: "0934-567-890",
    birthday: "1999-07-30",
    email: "yating.zhang@email.com",
  },
  {
    id: 4,
    last_name: "李",
    first_name: "建志",
    gender: "male",
    phone: "0945-678-901",
    birthday: "1998-09-05",
    email: "jianzhi.li@email.com",
  },
  {
    id: 5,
    last_name: "陳",
    first_name: "佳蓉",
    gender: "female",
    phone: "0956-789-012",
    birthday: "1997-05-18",
    email: "jiarong.chen@email.com",
  },
  {
    id: 6,
    last_name: "黃",
    first_name: "志明",
    gender: "male",
    phone: "0967-890-123",
    birthday: "1999-01-10",
    email: "zhiming.huang@email.com",
  },
  {
    id: 7,
    last_name: "吳",
    first_name: "芳瑜",
    gender: "female",
    phone: "0978-901-234",
    birthday: "1998-12-03",
    email: "fangyu.wu@email.com",
  },
  {
    id: 8,
    last_name: "劉",
    first_name: "家豪",
    gender: "male",
    phone: "0989-012-345",
    birthday: "1997-08-20",
    email: "jiahao.liu@email.com",
  },
  {
    id: 9,
    last_name: "蔡",
    first_name: "雅琪",
    gender: "female",
    phone: "0990-123-456",
    birthday: "1999-04-25",
    email: "yaqi.cai@email.com",
  },
  {
    id: 10,
    last_name: "楊",
    first_name: "志遠",
    gender: "male",
    phone: "0901-234-567",
    birthday: "1998-06-12",
    email: "zhiyuan.yang@email.com",
  },
];

// forEach
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].first_name);
// }

// students.forEach(function (student) {
//   console.log(student.first_name);
// });

// students.forEach((student) => {
//   console.log(student.first_name);
// }); 跟上方一樣

// filter
// const result = [];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].gender == "male") {
//     result.push(students[i]);
//   }
// }
// console.log(result);
// console.log(
//   students.filter(function (student) {
//     return student.gender == "male";
//   })
// );

// map
// const result = []
// for (let i = 0; i < students.length; i++) {
//   result.push({
//     // id: students[i].id,
//     // first_name: students[i].first_name,
//     // last_name: students[i].last_name,
//     // gender: students[i].gender,
//     // phone: students[i].phone,
//     // birthday: students[i].birthday,
//     // email: students[i].email,
//     ...students[i],
//     age: new Date().getFullYear() - students[i].birthday.substring(0, 4),
//   })
//   // console.log(new Date().getFullYear() - students[i].birthday.substring(0, 4))
// }
// console.log(result)

console.log(
  students.map(function (student) {
    return {
      ...student,
      age: new Date().getFullYear() - student.birthday.substring(0, 4),
    };
  })
);
// reduce
// let sum = 0
// for (let i = 0; i < students.length; i++) {
//   sum += new Date().getFullYear() - students[i].birthday.substring(0, 4)
// }
// console.log(sum)
// console.log(
//   students.filter(function (student) {
//     return new Date().getFullYear() - student.birthday.substring(0, 4) == 26;
//   }, 0)
// );

// fetch
fetch(
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    console.log(json);
  });

// setInterval 持續動作
let timer = setInterval(function () {
  console.log("senInterval");
}, 1000);
// setTimeout
setTimeout(function () {
  console.log("timeout");
}, 1000);
setTimeout(() => {
  clearInterval(timer);
}, 5000);
