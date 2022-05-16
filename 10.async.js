// 비동기처리방식 1

// 1
console.log('1등!');

// 2
setTimeout(function() {
    console.log("2등!");
    setTimeout(function() {
        console.log("3등!");
    }, 2000);
}, 2000);

// 비동기처리방식 2
const helloPromise = new Promise((resolve, reject) => {
    // 생성 자체는 pending
    let isSuccess = true;
  
    if (!isSuccess) {
      reject(false); // catch 호출
      return;
    }
  
    console.log("1등");
    setTimeout(() => {
      resolve(); // then 호출
    }, 2000);
  });
  
  helloPromise
    .then((res) => {
      console.log("2등");
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
      });
    })
    .then((res) => {
      console.log("3등");
    })
    .catch((err) => {
      console.log(err);
    });

// 비동기처리방식 3
async function asyncFunction() {
    console.log("1등");
    await second();
    await third();
  }
  
  function second() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("2등");
        resolve();
      }, 2000);
    });
  }
  
  function third() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("3등");
        resolve();
      }, 2000);
    });
  }
  
  asyncFunction();



