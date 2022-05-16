//  엘리먼트 선택 예제
console.log(document.querySelector("div.welcome"));
console.log(document.querySelectorAll("div"));
console.log(document.getElementsByTagName("div"));
console.log(document.getElementById("hi"));
console.log(document.getElementsByClassName("welcome"));


const divTag = document.querySelector("div");

console.log(divTag);

divTag.style.color = "red";


const divTag = document.querySelector("div");

divTag.innerHTML = "<h1>안녕하세요.</h1>";
divTag.style.fontSize = "30px";

const productsData = { title: "감자칩", weught: 300 };

const app = document.querySelector("#app");

app.innerHTML = `<div class="item">상품명 : ${productsData.title}, 무게 ${productsData.weight}g</div>`;
// 템플릿 리터럴과 innerHTML 속성을 사용

// 연습문제
// const productsData = [
//     {title: "감자칩", weight: 300},
//     {title: "칙촉", weight: 100},
//     {title: "고구마칩", weight: 300},
//     {title: "오잉", weight: 50},
// ];
// const app = document.querySelector("#app");

// let result = "";

// for (let data of productsData) {
//     result += `<div class="item">상품명: ${data.title}, 무게 ${data.weight}g</div>`;
// }

// app.innerHTML = result;