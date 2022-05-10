'use strict';

// JavaScript is synchronous. 자바스크립트는 동기적
// Execute the code block by orger after hoisting. 작성한 순서에 맞춰서 하나씩 실행하게 됨
// hoisting: var, function declaration 선언들이 제일 위로 올라가는 것잏 호이스팅
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 지정한 시간이 지나면 전달한 콜백 함수를 호출함, 1000은 1초, 비동기
// 브라우저에 요청하는 것으로 1초가 지난 후에 나오게 됨
console.log('3'); // 먼저 출력됨으로 1 3 2 출력, 동기

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); // 동기는 함수의 선언을 위로 올림으로 1 3 hello 2 출력, 동기

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기, 1 3 hello 2 async callback 출력


// Callback Hell example, 가독성이 떨어짐, 디버깅 경우에도 어려움
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||  
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id); // 조건문에 만족한다면 id를 반환
            } else {
                onError(new Error('not found')); // 만족하지않으면 Error를 생성해서 not found를 반환
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
        if (user === 'ellie') {
            onSuccess({ name : 'ellie', role : 'admin' }); // 조건문이 맞으면 object를 전달
        } else {
            onError(new Error('no access')); // 만족하지않으면 no access를 반환
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`); // alter로 유저에게 알려주기
            },
            error => {
                console.log(error);
            }
            );
    },
    error => {console.log(error)}
    );
