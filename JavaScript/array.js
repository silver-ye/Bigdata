'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array(); // 배열 생성
const arr2 = [1, 2]; // 배열 생성

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length -1]); // 🍌

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => { // 인자들과 인덱스, 전체 배열까지 받아서 사용할 수 있지만, 배열은 잘 사용하지않음
    console.log(fruit, index); // 과일과 인덱스를 출력 가능
});

fruits.forEach((fruit) => console.log(fruit)); // 위의 코드와 동일하며, 한줄로 된 코드는 {} 생략 가능

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑'); // 뒤로 추가됨
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // 뒤에 있는 인자가 빠지게 됨
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋'); // 앞에서부터 추가
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift(); // 앞에서부터 빠짐
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push shift나 unshift는 너무 느림
// 뒤에서는 넣고 빼는게 쉽게 가능하지만, 앞에는 옮기고 해야해서 오래 걸리게 됨
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // splice 사용시에 시작 인덱스를 지정하고 몇개를 지울지 지정하지 않으면 디폴트값으로 그값부터 이후의 값들을 지워버림
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 지우고나서 원하는 데이터를 넣는 것도 가능, 지우고 싶지않다면 0을 적으면 지우지않고 데이터 삽입 가능
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); // concat을 이용하여 배열을 합칠 수 있음
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // indexOf로 몇번째 인덱스에 있는지 확인이 가능
console.log(fruits.indexOf('🍉')); 
console.log(fruits.indexOf('🥥')); // indexOf에서 배열안에 없다면 -1을 출력

// includes
console.log(fruits.includes('🍉')); // 배열안에 있다면 true, 없다면 false를 출력
console.log(fruits.includes('🥥')); // false를 출력

// lastIndexOf
console.clear();
fruits.push('🍎'); // 같은 데이터를 추가할 경우
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 같은 데이터를 가지고 있다면 같은 데이터값의 첫번째 인덱스 값을 가져옴
console.log(fruits.lastIndexOf('🍎')); // 같은 데이터를 가지고 있다면 같은 데이터값의 제일 마지막 인덱스 값을 가져옴

