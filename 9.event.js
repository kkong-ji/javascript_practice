const showBtn = document.getElementById("btn");
// 아이디가 "btn"인 요소를 선택함.

showBtn.addEventListener("click", eventHandler); 

function eventHandler(event) {
    console.log(event.target);
    document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
}