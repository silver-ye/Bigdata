// async & await
// clear style of using promise :) , promise가 맞는 경우와 async와 await이 맞는 경우가 다름

// 1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs...., 오래걸리는 일들은 비동기적으로 처리해야함
//         resolve('ellie'); // resolve나 reject를 사용하지않고 return을 사용하면 pending으로 결과값이 나오게됨
//     });
// }

async function fetchUser() { 
    // do network request in 10 secs...., 오래걸리는 일들은 비동기적으로 처리해야함
    return 'ellie'; // promise대신해서 async를 사용해서 사용 가능, async를 적으면 코드블럭이 promise로 됨
}

const user = fetchUser(); // return코드가 user에 리턴됨
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000); // await은 async가 붙은 함수안에서만 사용 가능, await은 딜레이가 끝나는 3초까지 기다렸다가 사과를 리턴함
    return '🍎';
}

async function getBanana() {
    await delay(1000); // 딜레이가 끝나는 3초까지 기다렸다가 바나나를 리턴함
    return '🍌';
}

// function pickFruits() { // promise도 계속해서 중첩되면 callback 지옥과 동일
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// async function pickFruits() { // 위와 동일하지만 asycn로 변경
//     const apple = await getApple(); // 1초 소요
//     const banana = await getBanana(); // 1초 소요
//     return `${apple} + ${banana}`; // apple과 banana는 서로 연관되어있지않음으로 기다릴 필요가 없음
// }

async function pickFruits() {  // Promise를 이용해서 병렬적으로 실행 가능
    const applePromise = getApple(); // Promise를 이용하면 바로 실행이 됨
    const bananaPromise = getBanana();
    const apple = await applePromise; 
    const banana = await bananaPromise; 
    return `${apple} + ${banana}`; // apple과 banana는 서로 연관되어있지않음으로 기다릴 필요가 없어서 병렬로 실행해서 1초 걸림
}

pickFruits().then(console.log);

// 3. useful APIs ✨ 위에보다 더 간단하게 사용하기 위해서 API 이용
function pickAllFruits() { 
    return Promise.all([getApple(), getBanana()]) // Promise.all을 사용하여서 배열에 promise를 넣어서 실행됨
    .then(fruits => fruits.join(' + ')); // 다 받아진 배열이 전달이 됨
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); // race를 사용하면 배열중에서 가장 먼저 값을 리턴하는 아이만 전달함
}

pickOnlyOne().then(console.log);
