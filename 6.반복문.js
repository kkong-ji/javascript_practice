let i = 1;

while (i <= 50) {
    if ( i % 5 === 0) {
        console.log(i);
    }
    // i = i + 1;
    i++;
}

for (let i=1; i<=50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

const arr = [5, 6, 7, 8];

for (let index in arr) {
    console.log(arr[index]);
}

for (let item of arr) {
    console.log(item);
}

const jsonArr = { email: "dummy", password: "a123" };

for (let key in jsonArr) {
    console.log(jsonArr[key]);
}

// 연습문제
// 1부터 10까지 출력하는 반복문에서 i가 5이상이 되면 반복문을 빠져나오게 만들기
for (let i = 1; i <= 10; i++) {
    if (i >= 5) {
        break;
    }
    console.log(i);
}