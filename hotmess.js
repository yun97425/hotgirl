console.log("hello world");
0.5;
1;
("use strict");
("jhhjgj");
true;
false;
//字串 布林值

let number = 2;
//const name = "jac"
number = 3;
let temp = number;
console.log(temp);
number = 4;
temp = number;
console.log(temp);

//let a = 10
//let b = 20
//let c
//c = a
//a = b
//b = c
//console.long(a,b)

// == 等於 !=不等於  && 兩者皆要正確才會是ture  || or  > < 邏輯運算子
let a = 10;
let b = 20;
// console.log(a == 10)
// console.log(a != 10)
// console.log(a == 10 && b == 20)
// console.log(a == 10 || b == 10)
// console.log(a <= 10 && b >= 20)
// //算術運算子
// // + - * / %
// console.log("1"+"2") 字串也能算結果為12
// console.log(1 + 2)
// console.log(2 - 1)
// console.log(2 * 3)
// console.log(6 / 2)
// console.log(5 % 2)

// if( a == 10 ) {
//     console.log(" a is 10 ")
// } else if( a == 15){
//     console.log("a is 15")
// } else{
//     console.log(" a is not equal qo and 15")
// }

// for(let i = 0; i<10; i++){
// //宣告i=0  i++等於i+1
// console.log(i)
// }
// console.log("for loop end")

let double = function (num1, num2) {
  //num = num || 1 // 如果沒有傳入參數，預設為1
  return num1 * 2;
};
let c = double(2, 3); // 4
console.log(c);

let sayMyName = function (name) {
  console.log("my name is" + name);
};
sayMyName("jac");
sayMyName("mary");
sayMyName("ming");
sayMyName("john");

//let num =0
//for(let i = 1; i<=100; i++) {
//  num = num +i
//console. log(i)
//}
window.onload = function () {
  console.log(document.querySelector("#year"));
  document.querySelector("#year_btn").addEventListener("click", function () {
    const year = parseInt(document.querySelector("#year").value);
    // 該年份為400的倍數，或者為4的倍數，不可以是100％的倍數
    let result;
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      result = "閏年";
    } else {
      result = "不是閏年";
    }
    console.log(year);
    document.querySelector("#answer").innerHTML = result;
  });
};
// 三角形特性，兩邊相加大於第三邊
// istriangle(1, 2, 3) // false
// istriangle(3, 4, 5) // true

const istriangle = function (a, b, c) {
  let result;
  if (a + b > c && a + c > b && b + c > a) {
    result = "是三角形";
  } else {
    result = "不是三角形";
  }
  return result;
};

let result = istriangle(2, 3, 5);
console.log(result);

// const countBMI = function (height, weight) {
// 體重/身高平方(M)
let BMI = function (height, weight) {
  return weight / (height * height);
};
BMI(1.7, 60);
console.log(BMI(1.7, 70));

// 判斷大小的函式
const wichisbig = function (a, b) {
  if (a > b) {
    return a;
  }
  if (a < b) {
    return b;
  }
};
let big = wichisbig(15, 20);
console.log(big);

// 做出99乘法表
// 成績計算公式 自動判斷成績
// 100-95 A+
// 94-90 A
// 89-80 B
// 79-70 c
// 69-0以下D
