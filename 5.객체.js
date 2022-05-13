// 객체 create
let userInfo = {
    email: "dummy@dummy.com",
    password: "a1234"
}

// 객체 Read
console.log(userInfo.email);
console.log(userInfo["email"]);

// 객체 update
userInfo.email = "updated";
console.log(userInfo.email);

// 객체 delete
delete userInfo.email;
console.log(userInfo);