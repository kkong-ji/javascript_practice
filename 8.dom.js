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