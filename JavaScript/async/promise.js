'use strict';

// Promise is a JavaScript object for asynchronous operation. 자바스크립트안에 내장되어 있음
// State: pending -> fulfilled or rejected 상태에 대해서 이해해야함
// Producer vs Consumer 제공자와 서비자를 이해해야함

// 1. Producer
// when new Promise is created, the executor runs automatically. executor가 자동으로 바로 실행됨
const promise = new Promise((resolve, reject) => { // Promise는 함수
    // doing some heavy work (network, read files)
    console.log('doing something...') // 만들어지는 순간 진행됨, 불필요한 네트워크 소통을 할 수 있음
    setTimeout(() => {
        // resolve('ellie'); // 성공
        reject(new Error('no network')); // 실패
    }, 2000);
}); 

// 2. Consumers: then, catch, finally
promise
    .then((value) => { // value는 promise가 잘 실행되어서 resolve에 들어있는 ellie가 들어오게됨
        console.log(value); // then으로 성공적인 것만 잡게 됨
    })
    .catch(error => {
        console.log(error); // 실패한 에러를 받아옴
    })
    .finally(() => {console.log('finally'); // 실패와 성공의 상관없이 실행함
    }); 

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2) // 1을 받아서 2가 됨
    .then(num => num * 3) // 2를 받아서 6이 됨
    .then(num => { // then은 값을 바로 전달할 수도 있고 promise도 전달 가능
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000); // 6을 받아서 5가 됨
        });
    })
    .then(num => console.log(num)); // 5 출력


// 4. Error Handling
const getHen = () => // 암탉을 받아옴
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000); // 1초 이후에 닭을 리턴함
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000); // 닭으로부터 달걀을 얻어옴
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); // error가 발생했을 때
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000); // 달걀을 받아와서 요리함
    });

    getHen()
        // .then(hen => getEgg(hen)) // .then(getEgg) 같은것을 한가지만 받아와서 넣으면 생략이 가능하게 됨
        // .then(egg => cook(egg))
        // .then(meal => console.log(meal));
        .then(getEgg) // getEgg에서 발생하는 오류를 잡고 싶다면 바로 밑에 catch 사용
        .catch(error => {
            return '🥖'; // 계란을 받아오는데 문제가 생기면 빵을 대신하게 함, 빵을 대신 전달함으로 오류가 발생하지 않음
        })
        .then(cook)
        .then(console.log) // 모두 잘 진행되면 🐓 => 🥚 => 🍳 출력
        .catch(console.log) // 오류가 진행된다면 catch에서 잡아서 오류가 출력됨, catch로 잡지않으면 오류가 발생
