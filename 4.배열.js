// 배열 Create
const arr = [1, 2, 3, 4];

// 배열 Read
arr[0];
console.log(arr[3]);

console.log(arr.slice(1, 3));

// 배열 update
arr[0] = 100;
console.log(arr);

// 배열 delete
arr.splice(0, 1);
console.log(arr);

// 연습문제

// 1. 문자열 생성
const nameList = ["짱구", "철수"];

// 2. 훈이 추가
nameList.push("훈이");
console.log(nameList);

// 3. 철수 -> 유리
nameList[1] = "유리"
console.log(nameList);

// 4. 짱구 삭제
nameList.splice(0,1);
console.log(nameList);