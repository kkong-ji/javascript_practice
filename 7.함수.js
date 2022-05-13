// 1부터 10까지 더하기

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);

// 함수로 만들기
function sum(target) {
    let result = 0;
    for (let i = 1; i <= target; i++) {
        result = result + i;
    }

    return result;
}

console.log(sum(10));
console.log(sum(50));
console.log(sum(100));


// 함수 연습문제.

function BMI(height, weight) {
    const meterHeight = height / 100;
    const result = weight / (meterHeight * meterHeight);

    return result;
}

console.log(BMI(170, 70));