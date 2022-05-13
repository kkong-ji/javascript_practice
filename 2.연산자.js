console.log(1 == 1);
console.log(1 == "1");

let option1 = 10 > 1; // true
let option2 = 2 == 3; // false

console.log(option1 || option2);    // true
console.log(option && option2);     // false
console.log(!option1);              // false


// 중간실습
const height = 173;
const goodWeight = (height - 100) * 0.9;

console.log(`당신의 키는 ${height}cm이며 적정체중은 ${goodWeight}kg입니다.`);